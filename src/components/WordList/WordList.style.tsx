import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";


const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    textAlign: "center",
    color: Colors.dark

  },
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  word: {
    fontSize: 16,
    fontWeight: "bold",
  },
  meanings: {
    color: "#777",
    margin : 5,
  }
});
