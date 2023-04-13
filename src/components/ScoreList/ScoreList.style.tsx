import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";
import colors from "../../styles/Colors";


const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ligthBlue,
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
    backgroundColor: Colors.darkBlue,
    marginTop: 10,
    borderRadius: 10,
  },
  score: {
    fontSize: 23,
    fontFamily: Fonts.defaultFont,
    color:Colors.white,
  }
});
