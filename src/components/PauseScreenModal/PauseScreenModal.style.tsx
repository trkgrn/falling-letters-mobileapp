import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

const deviceSize=Dimensions.get('window');

const baseStyle = StyleSheet.create({
  button:{
    backgroundColor:Colors.white,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    width:deviceSize.width/3,
    height:deviceSize.height/15,
    padding: 10,
    margin:10
  }
});
export default StyleSheet.create({
  modalContainer:{
    justifyContent:'flex-end',
    margin:0
  },
  innerContainer:{
    backgroundColor:Colors.ligthBlue,
    height:deviceSize.height,
    padding:10,
  },
  title:{
    color:Colors.dark,
    textAlign:'center',
    fontSize:40,
    fontFamily: Fonts.nunitoRegular,
    marginTop:30
  },
  input:{
    borderWidth:1,
    borderRadius:10,
    borderColor:'black',
    marginTop:30,
    color:'black'
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:30
  },
  resumeButton:{
    ...baseStyle.button,
    backgroundColor:Colors.resume,
  },
  exitButton:{
    ...baseStyle.button,
    backgroundColor: Colors.exit,
  },
  buttonPlaceHolder:{
    color:Colors.white,
    fontSize:20,
    fontWeight:'bold',
  },
  lastWordsTitle:{
    color: 'black',
    fontSize:25,
    textAlign:'center',
    marginTop:30,
    fontFamily: 'LexendTera-Light'
  },
  lastWordsContainer:{
    flexDirection:'column',
    marginTop:30,
    justifyContent:'center',
  },
  lastWordsText:{
    color: Colors.dark,
    fontSize:20,
    textAlign:'center',
    marginTop:10,
    fontFamily: 'LexendTera-ExtraLight'
  }

})
