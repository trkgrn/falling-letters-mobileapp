import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

const deviceSize = Dimensions.get("window");


const baseContainer =StyleSheet.create({
  container:{
    marginTop: deviceSize.height / 150,
    marginLeft: deviceSize.width / 80,
    width: deviceSize.width / 10,
    height: deviceSize.width / 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
  }
});


const baseStyle=StyleSheet.create({
  container:{
    ...baseContainer.container
  },
  vowelContainer:{
    ...baseContainer.container,
    borderRadius: 20,
  },
  consonantContainer:{
    ...baseContainer.container,
    borderRadius: 10
  }
});


export default StyleSheet.create({
  vowelContainer: {
    ...baseStyle.vowelContainer,
    backgroundColor: Colors.ligthBlue
  },
  vowelContainerClicked: {
    backgroundColor: Colors.clicked,
    borderWidth: 2,
    ...baseStyle.vowelContainer
  },
  consonantContainer: {
    ...baseStyle.consonantContainer,
    backgroundColor: Colors.cream
  },
  consonantContainerClicked: {
    backgroundColor: Colors.clicked,
    borderWidth: 2,
    ...baseStyle.consonantContainer,
  },
  emptyContainer: {
    backgroundColor: "transparent",
    ...baseStyle.container
  },
  text: {
    color: 'black',
    fontSize: deviceSize.height / 35,
    fontWeight: "bold"
  }

});
