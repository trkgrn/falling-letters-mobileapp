import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    padding: deviceSize.width / 50,
    flex: 1,
    backgroundColor: Colors.ligthBlue
  },
  navContainer: {
    height: deviceSize.height / 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  faultContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: deviceSize.width / 3,
    height: deviceSize.width / 10
  },
  scoreContainer: {},
  score: {
    color: Colors.dark,
    fontSize: deviceSize.height / 19,
    fontFamily: Fonts.defaultFont
  },
  letterListContainer: {
    backgroundColor: Colors.darkBlue,
    flexDirection: "row",
    marginTop: deviceSize.height / 30,
    paddingBottom: deviceSize.height / 70,
    paddingTop: deviceSize.height / 70,
    paddingLeft: deviceSize.width / 45,
  },
  resultContainer: {
    backgroundColor: Colors.cream,
    alignItems: "center",
    marginTop: deviceSize.height / 30,
    borderRadius: 10,
    borderWidth: 2
  },
  resultText: {
    color: "black",
    fontSize: deviceSize.height / 30,
    fontWeight: "bold",
    fontFamily: Fonts.defaultFont
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceSize.height / 50
  },
  pauseAndPlayButton: {
    backgroundColor: Colors.cream,
    width: deviceSize.width / 10,
    height: deviceSize.width / 10,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center"
  }
});
