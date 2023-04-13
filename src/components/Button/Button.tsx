import { Pressable, Text} from "react-native";
import styles from "./Button.style";
import { FC } from "react";

interface IButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

const Button:FC<IButtonProps> =  ({title,onPress,disabled}) => {
  return (
    <Pressable style={styles.container} onPress={onPress} disabled={disabled}>
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;
