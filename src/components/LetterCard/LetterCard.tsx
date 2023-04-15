import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./LetterCard.style";
import { FC } from "react";
import letters from "../../config/letters";
import { ILetterCardProps } from "../../props/LetterCardProp";


const LetterCard:FC<ILetterCardProps> = ({letter,onCardPress}) => {

  const vowels = letters.vowels
  const consonants = letters.consonants

  if (letter.value != "") {
    if (vowels.includes(letter.value)) {
      return (
        letter.isClicked ?
          <TouchableWithoutFeedback onPress={onCardPress}>
            <View style={styles.vowelContainerClicked}>
              <Text style={styles.text}>{letter.value}</Text>
            </View>
          </TouchableWithoutFeedback>
          :
          <TouchableWithoutFeedback onPress={onCardPress}>
            <View style={styles.vowelContainer}>
              <Text style={styles.text}>{letter.value}</Text>
            </View>
          </TouchableWithoutFeedback>
      );
    } else {
      return (
        letter.isClicked ?
          <TouchableWithoutFeedback onPress={onCardPress}>
            <View style={styles.consonantContainerClicked}>
              <Text style={styles.text}>{letter.value}</Text>
            </View>
          </TouchableWithoutFeedback>
          :
          <TouchableWithoutFeedback onPress={onCardPress}>
            <View style={styles.consonantContainer}>
              <Text style={styles.text}>{letter.value}</Text>
            </View>
          </TouchableWithoutFeedback>
      );
    }
  }
  else {
    return (
        <View style={styles.emptyContainer}></View>
    );
  }
}
export default LetterCard;
