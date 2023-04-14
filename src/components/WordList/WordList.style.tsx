import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";


const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ligthBlue,
  },
  title: {
    fontSize: deviceSize.height * 0.055,
    margin: deviceSize.height * 0.035,
    textAlign: "center",
    color: Colors.dark,
    fontFamily:Fonts.nunitoRegular,
  },
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: deviceSize.width * 0.04,
    paddingVertical: deviceSize.height * 0.015,
    backgroundColor:Colors.darkBlue,
    borderRadius:15,
    margin: deviceSize.height * 0.007,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  word: {
    fontSize: deviceSize.height * 0.022,
    fontWeight: "bold",
    color:Colors.dark,
  },
  meanings: {
    margin : deviceSize.height * 0.007,
    color:Colors.white,
  }
});
