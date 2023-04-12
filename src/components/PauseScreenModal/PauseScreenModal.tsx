import Modal from 'react-native-modal';
import React, { FC } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./PauseScreenModal.style";

interface IPauseScreenModalProps {
  isPaused: boolean;
  resumeGame: () => void;
  exitGame: () => void;
  lastWords: string[];
}

const PauseScreenModal:FC<IPauseScreenModalProps> = ({isPaused,resumeGame,exitGame,lastWords}) => {


  return (
    <Modal isVisible={isPaused} style={styles.modalContainer} onBackdropPress={resumeGame} >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>P A U S E</Text>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={resumeGame}>
            <View style={styles.resumeButton}>
              <Text style={styles.buttonPlaceHolder}>Resume</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={exitGame}>
            <View style={styles.exitButton}>
              <Text style={styles.buttonPlaceHolder}>Exit</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Text style={styles.lastWordsTitle}>- Last Words -</Text>
        <View style={styles.lastWordsContainer}>
          {
            // last 5 item
            lastWords.slice(Math.max(lastWords.length - 5, 0)).map((word, index) => (
              <Text key={index} style={styles.lastWordsText}>{word}</Text>
            ))
          }
        </View>


      </View>
    </Modal>
  );
};

export default PauseScreenModal;
