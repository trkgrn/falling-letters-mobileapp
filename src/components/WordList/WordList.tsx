import { FlatList, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import styles from "./WordList.style";
import { IStackScreenProps } from "../../props/StackScreenProp";


const WordList: React.FunctionComponent<IStackScreenProps> = (props) => {
  const [navigation, route, nameProp] = [props.navigation, props.route, props.nameProp];
  const gameResultObj: any = route.params;
  const gameResult = gameResultObj.gameResult;


  const renderItem = ({ item }: any) => (
    <TouchableWithoutFeedback>
      <View style={styles.itemWrapperStyle}>
        <View style={styles.contentWrapperStyle}>
          <Text style={styles.word}>{`${item.word}`}</Text>
          {
            item.meanings.map((meaning: any, index: number) => {
              return (
                <Text key={index} style={styles.meanings}>{ (index+1)+ ". "+meaning}</Text>
              );
            })
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.title}>WORDS</Text>
      <FlatList
        data={gameResult.words}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );

};

export default WordList;
