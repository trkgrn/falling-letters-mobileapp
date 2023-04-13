import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";


const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    fontFamily: Fonts.defaultFont,
    marginTop: 20,
    color: Colors.dark
  },
  scoreContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: deviceSize.height * 0.05,
    width: deviceSize.width * 0.8,
    backgroundColor: Colors.grey,
    marginTop: 10,
    borderRadius: 10,
  },
  score: {
    fontSize: 23,
    fontFamily: Fonts.defaultFont
  }
});
