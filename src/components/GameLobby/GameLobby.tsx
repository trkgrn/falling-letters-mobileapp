import { IStackScreenProps } from "../../props/StackScreenProp";
import React from "react";
import { Button, View } from "react-native";
import styles from "./GameLobby.style";

const GameLobby: React.FunctionComponent<IStackScreenProps> = (props) => {
  const [navigation, route, nameProp] = [props.navigation, props.route, props.nameProp];

  return (
    <View style={styles.container}>
      <Button title={"Start Game"} onPress={() => {
        navigation.navigate("GameScreen");
      }} />
    </View>
  );
}

export default GameLobby;