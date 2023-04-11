import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: Colors.lightGrey
  },
  navContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scoreContainer: {
  },
  score: {
    color: Colors.grey,
    fontSize: 40,
    fontFamily: Fonts.defaultFont
  },
  letterListContainer: {
    backgroundColor: Colors.darkGrey,
    height: deviceSize.height / 1.65,
    flexDirection: "row",
    marginTop: 25
  },
  resultContainer: {
    backgroundColor: Colors.grey,
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,

  },
  resultText: {
    color: 'black',
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: Fonts.defaultFont
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  pauseAndPlayButton: {
    backgroundColor: Colors.grey,
    width: 40,
    height: 40,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  }
});
