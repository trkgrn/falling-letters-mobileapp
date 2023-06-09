import React, { useState } from "react";
import styles from "./GameScreen.style";
import { Alert, Dimensions, Pressable, Text, ToastAndroid, View } from "react-native";
import Button from "../Button/Button";
import letters from "../../config/letters";
import axios from "axios";
import LetterCardList from "../LetterCardList/LetterCardList";
import Icon from "react-native-vector-icons/Ionicons";
import PauseScreenModal from "../PauseScreenModal/PauseScreenModal";
import { IStackScreenProps } from "../../props/StackScreenProp";
import { useDispatch, useSelector } from "react-redux";
import { GameResult } from "../../models/GameResult";
import { Word } from "../../models/Word";
import { addGameResult } from "../../redux/actions/GameResultsActions";

const deviceSize = Dimensions.get("window");
const GameScreen: React.FunctionComponent<IStackScreenProps> = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);


  const [navigation, route, nameProp] = [props.navigation, props.route, props.nameProp];
  const vowels = letters.vowels;
  const consonants = letters.consonants;

  // Letter List Generator
  let letterStrList: any = [];

  function initLetterCards(): any {
    for (let i = 0; i < 24; i++) {
      if (i % 5 < 3) { // Add a vowel with 60% probability
        letterStrList.push(vowels[Math.floor(Math.random() * vowels.length)]);
      } else { // Add a consonant with 40% probability
        letterStrList.push(consonants[Math.floor(Math.random() * consonants.length)]);
      }
    }

    let cards: any = [];
    for (let i = 0; i < 80; i++) {
      if (i >= 56)
        cards[i] = { key: `${i}`, value: `${letterStrList[80 - i - 1]}`, isClicked: false };
      else
        cards[i] = { key: `${i}`, value: "", isClicked: false };
    }
    return cards;
  }

  const letterObjList = initLetterCards();

  // State Variables
  const [letterCards, setLetterCards] = useState<any>([...letterObjList]);
  const [letterList, setLetterList] = useState<any>([...letterStrList]);
  const [selectedLetter, setSelectedLetter] = useState<any[]>([]);
  const [score, setScore] = useState<number>(0);
  const [faultCount, setFaultCount] = useState<number>(0);
  const [status, setStatus] = useState<string>("ACTIVE");
  const [iconName, setIconName] = useState<string>("pause");
  const [lastWords, setLastWords] = useState<string[]>([]);
  const [gameResult, setGameResult] = useState<GameResult>(new GameResult(0, []));
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  // Card Press Function
  function onCardPress(letter: any) {
    letterCards[letter.key].isClicked = !letterCards[letter.key].isClicked;
    setLetterCards([...letterCards]);
    if (letterCards[letter.key].isClicked) {
      selectedLetter.push(letter);
      setSelectedLetter([...selectedLetter]);
    } else {
      setSelectedLetter(selectedLetter.filter((item) => item.key !== letter.key));
    }
  }

  // Button Functions
  function calculateScore(letterList: any): number {
    let score = 0;
    const scoresMap = letters.scoresMap;
    letterList.forEach((letter: any) => {
      score += scoresMap.get(letter)!;
    });
    return score;
  }

  function deleteCard(letter: any) {
    letterCards[letter.key].value = "";
    letterCards[letter.key].isClicked = false;
    setLetterCards([...letterCards]);
  }

  function deleteCards(selectedCardList: any) {
    selectedCardList.forEach((letter: any) => {
      deleteCard(letter);
    });
    setSelectedLetter([]);
    fixCards();

  }

  function fixCards() {
    for (let i = 79; i >= 0; i--) {
      if (letterCards[i].value === "") {
        for (let j = i - 8; j >= 0; j -= 8) {
          if (letterCards[j].value !== "") {
            letterCards[i].value = letterCards[j].value;
            letterCards[i].isClicked = letterCards[j].isClicked;
            letterCards[j].value = "";
            letterCards[j].isClicked = false;
            break;
          }
        }
      }
    }
    setLetterCards([...letterCards]);
  }

  async function onOkPress() {
    if (status != "ACTIVE") return;
    setIsAvailable(false);
    const word = selectedLetter.map(letter => letter.value).join("").toLocaleLowerCase("tr-TR");
    const letters = selectedLetter.map((letter: any) => letter.value);
    const letterCardList = selectedLetter.map((letter: any) => letter);

    if (lastWords.includes(word)) {
      showToast("Word is already found");
    } else if (word.length < 3) {
      showToast("Word is too short");
    } else {
      await axios.get("https://sozluk.gov.tr/gts?ara=" + word)
        .then((response) => {
          if (response.data.error) {
            showToast("Word not found");
            setFaultCount(faultCount + 1);
            setIsAvailable(true);
            return;
          }

          let data = response.data[0];
          saveWord(data, word);
          let addedScore = calculateScore(letters);
          setScore(score + addedScore);
          deleteCards(letterCardList);
          showToast(word + " " + addedScore + " points");
        })
        .catch((error) => {
          showToast("Internet connection error");
        });
    }

    setIsAvailable(true);
  }

  function onResetPress() {
    letterCards.forEach((card: any) => {
      card.isClicked = false;
    });
    setSelectedLetter([]);
    setLetterCards([...letterCards]);

  }

  function onPauseOrPlayPress() {
    if (isPaused) {
      setIsPaused(false);
      setIconName("pause");
      setStatus("ACTIVE");
    } else {
      setIsPaused(true);
      setIconName("play");
      setStatus("PAUSE");
    }
  }

  function saveWord(data: any, word: string) {
    lastWords.push(word);
    setLastWords([...lastWords]);
    const meanings = data.anlamlarListe.map((item: any) => item.anlam);
    const wordObj = new Word(word, meanings);
    let res = { ...gameResult };
    res.words!.push(wordObj);
    setGameResult(res);
  }

  function exitGame() {
    Alert.alert(
      "Exit Game",
      "Are you sure you want to exit the game?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate("GameLobby") }
      ],
      { cancelable: false }
    );
  }

  function showToast(message: string) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  function onGameFinished() {
    setStatus("FINISHED");
    Alert.alert(
      "Game Finished",
      "Your score is " + score,
      [
        {
          text: "Back To Lobby", onPress: () => {
            let res = { ...gameResult };
            res.score = score;
            dispatch(addGameResult(res));
            navigation.navigate("GameLobby");
          }
        }
      ],
      { cancelable: false }
    );
  }

  async function punish() {
    let letterArr: string[] = [];
    for (let i = 0; i < 8; i++) {
      const vowelRatio = letterList.filter((letter: any) => vowels.includes(letter)).length / letterList.length;
      let newLetter = "";
      if (vowelRatio < 0.6) {
        newLetter = vowels[Math.floor(Math.random() * vowels.length)];
      } else {
        newLetter = consonants[Math.floor(Math.random() * consonants.length)];
      }
      letterArr.push(newLetter);
      letterList.push(newLetter);
    }
    letterArr.forEach((letter: string, index) => {
      if (letterCards[index].value !== "") {
        setStatus("INACTIVE");
        return;
      }
      letterCards[index].value = letter;
      letterCards[index].isClicked = false;
    });
    setLetterCards([...letterCards]);
    await new Promise((resolve: any) => setTimeout(resolve, 1000));
    fixCards();
  }

  async function punishEvents() {
    setStatus("FAILED");
    await fixCards();

    await new Promise((resolve: any) => setTimeout(resolve, 500));
    setFaultCount(0);
    await punish();
    setStatus("ACTIVE");
  }

  if (status === "INACTIVE" && !isFinished) {
    setIsFinished(true);
    onGameFinished();
  }

  if (faultCount === 3 && status === "ACTIVE") {
    punishEvents().then(() => {
    });
  }

 // console.log(deviceSize.height/35);

  return (
    <View style={styles.container}>
      <PauseScreenModal isPaused={isPaused} resumeGame={onPauseOrPlayPress}
                        lastWords={lastWords} exitGame={exitGame} />

      <View style={styles.navContainer}>
        <Pressable onPress={onPauseOrPlayPress}>
          <View style={styles.pauseAndPlayButton}>
            <Icon name={iconName} color={"black"} size={deviceSize.width/15}></Icon>
          </View>
        </Pressable>

        <View style={styles.faultContainer}>
          {
            Array.of(1, 2, 3).map((item, index) => {
              return (
                <Icon key={item} name={"md-close"} color={index < faultCount ? "red" : "grey"} size={deviceSize.width / 10}></Icon>
              );
            })
          }
        </View>

        <View style={styles.scoreContainer}>
          <Text style={styles.score}>{score}</Text>
        </View>
      </View>

      <View style={styles.letterListContainer}>
        <LetterCardList letterCards={letterCards} setLetterCards={setLetterCards} letterList={letterList}
                        setLetterList={setLetterList} score={score}
                        status={status} setStatus={setStatus} onLetterPress={onCardPress} />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{selectedLetter.map(letter => letter.value)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"OK"} onPress={onOkPress} disabled={status == "FAILED" || !isAvailable}/>
        <Button title={"Reset"} onPress={onResetPress}/>
      </View>
    </View>
  );
};

export default GameScreen;
