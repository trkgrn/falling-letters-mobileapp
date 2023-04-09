import React, { useState } from "react";
import styles from "./GameScreen.style";
import { Text, View } from "react-native";
import Button from "../Button/Button";
import letters from "../../config/letters";
import axios from "axios";
import LetterCardList from "../LetterCardList/LetterCardList";

const GameScreen = () => {
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
  const [status, setStatus] = useState<string>("ACTIVE");

  // Card Press Function
  function onCardPress(letter: any) {
    console.log("card pressed = " + letter.value + " " + letter.key);
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
  function deleteCards(selectedCardList:any) {
    console.log("delete pressed");
    selectedCardList.forEach((letter: any) => {
      deleteCard(letter);
    });
    setSelectedLetter([]);

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
  function onOkPress() {
    console.log("ok pressed");
    const word = selectedLetter.map(letter => letter.value).join("").toLocaleLowerCase("tr-TR");
    const letters = selectedLetter.map((letter: any) => letter.value);
    const letterCardList = selectedLetter.map((letter: any) => letter);
    console.log(word);
    console.log(word.toLocaleLowerCase("tr-TR"));

    if (word.length < 3) {
      console.log("Word is too short");
    }else {
      axios.get("https://sozluk.gov.tr/gts?ara=" + word)
        .then((response) => {
          if (response.data.error) {
            console.log(response.data.error);
            return;
          }

          let dataStr = JSON.stringify(response.data);
          dataStr = dataStr.substring(1, dataStr.length - 1);
          console.log(dataStr);
          let addedScore = calculateScore(letters);
          setScore(score + addedScore);
          deleteCards(letterCardList);
          // const data = JSON.parse(dataStr);
          // const anlamlarListe:any = data.anlamlarListe;
          // anlamlarListe.forEach((anlam: any) => {
          //   console.log(anlam.anlam);
          // });
        }).catch((error) => {
        console.log(error);
      });
    }



  }
  function onResetPress() {
    console.log("reset pressed");
    letterCards.forEach((card: any) => {
      card.isClicked = false;
    });
    setSelectedLetter([]);
    setLetterCards([...letterCards]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score:{score} Status:{status}</Text>
      <View style={styles.letterListContainer}>
        <LetterCardList letterCards={letterCards} setLetterCards={setLetterCards} letterList={letterList}
                        setLetterList={setLetterList} score = {score}
                        status={status} setStatus={setStatus} onLetterPress={onCardPress}></LetterCardList>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{selectedLetter.map(letter => letter.value)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"OK"} onPress={onOkPress}></Button>
        <Button title={"Reset"} onPress={onResetPress}></Button>
      </View>
    </View>
  );
}

export default GameScreen;
