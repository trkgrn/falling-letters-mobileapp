import React, { useState } from "react";
import styles from "./GameScreen.style";
import { Text, View } from "react-native";
import LetterCard from "../LetterCard/LetterCard";
import Button from "../Button/Button";

const GameScreen = () => {


  const [selectedLetter, setSelectedLetter] = useState<any[]>([]);
  const [score, setScore] = useState<number>(0);
  const [status, setStatus] = useState<string>("ACTIVE");

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score:{score} Status:{status}</Text>
      <View style={styles.letterListContainer}>

      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}></Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"OK"} ></Button>
        <Button title={"Reset"} ></Button>
      </View>
    </View>
  );
}

export default GameScreen;
