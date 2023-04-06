import React from "react";
import styles from "./GameScreen.style";
import { Text, View } from "react-native";
import LetterCard from "../LetterCard/LetterCard";

const GameScreen = () => {

  return (
    <View style={styles.container}>
      <LetterCard letter={{key:1,value:"A",isClicked:false}}/>
    </View>
  );
}

export default GameScreen;
