import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./LetterCard.style";
import { FC } from "react";

interface ILetterCardProps {
  letter: any;
  onCardPress?: () => void;
}
const LetterCard:FC<ILetterCardProps> = ({letter,onCardPress}) => {


    if (letter.isClicked) {
      return (
        <TouchableWithoutFeedback onPress={onCardPress}>
          <View style={styles.letterContainerClicked}>
            <Text style={styles.text}>{letter.value}</Text>
          </View>
        </TouchableWithoutFeedback>);
    }else {
      return (
      letter.value !== "" ?
        <TouchableWithoutFeedback onPress={onCardPress}>
          <View style={styles.letterContainer}>
            <Text style={styles.text}>{letter.key+letter.value}</Text>
          </View>
        </TouchableWithoutFeedback>
        :
        <View style={styles.emptyContainer}></View>
      );
    }
};

export default LetterCard;
