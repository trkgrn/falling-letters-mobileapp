import { Pressable, Text } from "react-native";
import styles from "./Button.style";
import { FC } from "react";
import { IButtonProps } from "../../props/ButtonProp";


const Button:FC<IButtonProps> =  ({title,onPress,disabled}) => {
  return (
    <Pressable style={styles.container} onPress={onPress} disabled={disabled}>
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;
