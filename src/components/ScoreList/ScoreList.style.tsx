import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";


const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ligthBlue,
    alignItems: "center"
  },
  title: {
    fontSize: deviceSize.height * 0.055,
    fontFamily: Fonts.defaultFont,
    margin: deviceSize.height * 0.045,
    color: Colors.dark
  },
  scoreContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: deviceSize.height * 0.05,
    width: deviceSize.width * 0.8,
    backgroundColor: Colors.darkBlue,
    marginTop: deviceSize.height * 0.015,
    marginBottom: deviceSize.height * 0.003,
    borderRadius: 10,
  },
  score: {
    fontSize: deviceSize.height * 0.030,
    fontFamily: Fonts.defaultFont,
    color:Colors.white,
  }
});
