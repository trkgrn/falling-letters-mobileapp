import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: Colors.ligthBlue
  },
  navContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
  },
  scoreContainer: {
  },
  score: {
    color: Colors.dark,
    fontSize: 41,
    fontFamily: Fonts.defaultFont,
  },
  letterListContainer: {
    backgroundColor: Colors.darkBlue,
    flexDirection: "row",
    marginTop: 25,
    paddingBottom: 10,
    paddingLeft: 8,
  },
  resultContainer: {
    backgroundColor: Colors.cream,
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
    alignItems: "center",
  },
  pauseAndPlayButton: {
    backgroundColor: Colors.cream,
    width: deviceSize.width / 10,
    height: deviceSize.width / 10,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",


  }
});
