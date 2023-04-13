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
    fontSize: 40,
    marginTop: 20,
    textAlign: "center",
    color: Colors.dark,
    fontFamily:Fonts.nunitoRegular,


  },
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginTop:5,
    //marginBottom:5,
    backgroundColor:Colors.darkBlue,
    borderRadius:15,
    margin:5,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  word: {
    fontSize: 16,
    fontWeight: "bold",
    color:Colors.dark,
  },
  meanings: {
    margin : 5,
    color:Colors.white,
  }
});
