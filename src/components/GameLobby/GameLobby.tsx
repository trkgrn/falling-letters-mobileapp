import { IStackScreenProps } from "../../props/StackScreenProp";
import React from "react";
import { View } from "react-native";
import styles from "./GameLobby.style";
import Button from "../Button/Button";

const GameLobby: React.FunctionComponent<IStackScreenProps> = (props) => {
  const [navigation, route, nameProp] = [props.navigation, props.route, props.nameProp];

  return (
    <View style={styles.container}>
      <Button title={"Start Game"} onPress={() => {
        navigation.navigate("GameScreen");
      }} />

      <Button title={"TOP 10"} onPress={() => {
        navigation.navigate("ScoreList");
      }} />

    </View>
  );
}

export default GameLobby;
