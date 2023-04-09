import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
  score: {
    color: Colors.defaultDark,
    fontSize: 25,
    fontFamily: Fonts.defaultFont
  },
  letterListContainer: {
    backgroundColor: Colors.defaultGreen,
    height: deviceSize.height / 1.65,
    flexDirection: "row"
  },
  resultContainer: {
    backgroundColor: Colors.defaultText,
    alignItems: "center",
    margin: 5
  },
  resultText: {
    color: Colors.defaultDark,
    fontSize: 25,
    fontFamily: Fonts.defaultFont
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
