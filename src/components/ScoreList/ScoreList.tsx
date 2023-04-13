import { FlatList, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import { IStackScreenProps } from "../../props/StackScreenProp";
import React from "react";
import styles from "./ScoreList.style";
import { useSelector } from "react-redux";


const ScoreList:React.FunctionComponent<IStackScreenProps> = (props) => {
  const [navigation, route, nameProp] = [props.navigation, props.route, props.nameProp];
  const state = useSelector((state: any) => state);
  const gameResults = [...state.gameResults]
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, 10);


  function onPress(result: any) {
    navigation.navigate("WordList", { gameResult: result });
  }


  const renderGameResults = ({ item,index }: any) => (
    <TouchableWithoutFeedback onPress={()=> onPress(item)}>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{ item.score}</Text>
      </View>
    </TouchableWithoutFeedback>

    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TOP 10</Text>
      <SafeAreaView>
        <FlatList
          data={gameResults}
          renderItem={renderGameResults}
        ></FlatList>
      </SafeAreaView>
    </View>
  );
}

export default ScoreList;
