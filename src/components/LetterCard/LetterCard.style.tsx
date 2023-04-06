import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

const deviceSize = Dimensions.get("window");


const baseStyle=StyleSheet.create({
  container:{
    marginTop: 5,
    marginLeft: 5,
    width: deviceSize.width / 10,
    height: deviceSize.width / 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderRadius: 20,
  }
});


export default StyleSheet.create({
  letterContainer: {
    backgroundColor: Colors.defaultTitle,
    ...baseStyle.container
  },
  letterContainerClicked: {
    backgroundColor: '#6ac4c7',
    borderWidth: 2,
    borderColor: Colors.defaultTitle,
    ...baseStyle.container
  },
  emptyContainer: {
    backgroundColor: "transparent",
    ...baseStyle.container
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: "bold"
  }

});
