import { Pressable, Text} from "react-native";
import styles from "./Button.style";
import { FC } from "react";

interface IButtonProps {
  title: string;
  onPress?: () => void;
}

const Button:FC<IButtonProps> =  ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;
