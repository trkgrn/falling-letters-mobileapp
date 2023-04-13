import React, { FC, useState } from "react";
import { FlatList, View } from "react-native";
import LetterCard from "../LetterCard/LetterCard";
import letters from "../../config/letters";
import styles from "./LetterCardList.style";

interface ILetterCardListProps {
  letterCards: any;
  setLetterCards: any;
  letterList: any;
  setLetterList: any;
  status: any;
  setStatus: any;
  score: any;
  onLetterPress: (item: any) => void;
}

const LetterCardList: FC<ILetterCardListProps> = ({
                                                    letterCards,
                                                    setLetterCards,
                                                    letterList,
                                                    setLetterList,
                                                    status,
                                                    setStatus,
                                                    score,
                                                    onLetterPress
                                                  })  => {

  const vowels = letters.vowels;
  const consonants = letters.consonants;

  const delay = async (ms: any) => new Promise((resolve: any) => setTimeout(resolve, ms));
  const [lock, setLock] = useState<boolean>(false);

  function getDelayTime(): number {
    const num: any = Math.floor(score / 100);
    if (score < 500)
      return 5000 - (num * 1000);
    else
      return 1000;
  }

  // ----------------- addLetter -----------------

  async function fallLetter(index: any, letter: any) {
    if (letter == "") return;
    if (letterList.length === 0) return;

    letterCards[index].value = letter;
    setLetterCards([...letterCards]);

    letterList = letterCards.map((item: any) => {
      if (item.value !== "" && item.value !== undefined && item.value !== null)
        return item.value;
    }).filter((item: any) => item !== undefined);
    setLetterList([...letterList]);

    let counter = 0;
    while (true) {
      let i = index + counter * 8;
      if (i > 71)
        break;
      if (letterCards[i + 8].value !== "") {
        break;
      } else {
        letterCards[i + 8].value = letterCards[i].value;
        letterCards[i + 8].isClicked = letterCards[i].isClicked;
        letterCards[i].value = "";
        letterCards[i].isClicked = false;
        setLetterCards([...letterCards]);
        counter++;
        await delay(100);
      }
    }

  }
  async function addLetter() {
    const vowelRatio = letterList.filter((letter: any) => vowels.includes(letter)).length / letterList.length;
    console.log("Vowel Ratio: " + vowelRatio + " length: " + letterList.length + " score: " + score +
      " lettercards: " + letterCards.length);
    const randomIndex = Math.floor(Math.random() * 8);
    if (letterCards[randomIndex].value != "") {
      status = "INACTIVE";
      setStatus(status);
      return;
    }

    let newLetter = "";
    if (vowelRatio < 0.6) {
      newLetter = vowels[Math.floor(Math.random() * vowels.length)];
    } else {
      newLetter = consonants[Math.floor(Math.random() * consonants.length)];
    }
    await fallLetter(randomIndex, newLetter);
    // console.log("Delaying for " + getDelayTime() + "ms");

  }
  async function addLetterControl() {
    if (status === "ACTIVE" && !lock) {
      setLock(true);
      console.log("Delaying for " + getDelayTime() + "ms");
      await addLetter();
      await delay(getDelayTime());
      setLock(false);
    }
  }

  addLetterControl().then(r=>r);

  const renderLetterCards = ({ item }: any) => (
    <LetterCard letter={item} onCardPress={() => onLetterPress(item)} />);

  return (
    <View style={styles.container}>
      <FlatList data={letterCards}
                renderItem={renderLetterCards}
                numColumns={8}>
      </FlatList>
    </View>
  );

};

export default LetterCardList;
