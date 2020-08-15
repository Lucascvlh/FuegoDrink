const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  details:{
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    
  },
  name:{
    fontSize:40,
    fontWeight:'bold',
    borderWidth:1,
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    borderRadius:10
  },
  type:{
    fontSize:25,
    marginTop:10,
    fontWeight:'bold',
    marginTop:50
  },
  typeAlcohlic:{
    fontWeight:'normal',
  },
  glass:{
    fontSize:25,
    marginTop:10,
    fontWeight:'bold'
  },
  typeGlass:{
    fontWeight:'normal',
  },
  ingredient:{
    fontSize:30,
    marginTop:10,
    marginTop:50,
    fontWeight:'bold'
  },
  ingredientItem:{
    fontSize:25,
    marginTop:10
  },
  instruction:{
    fontSize:25,
    marginTop:10,
    marginTop:30,
    fontWeight:'bold', 
  },
  instructionPrepare:{
    fontSize:25,
    marginTop:10,
    fontWeight:'normal',
  }
})

export default styles;