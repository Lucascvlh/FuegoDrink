const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#DEDCDB',
  },
  list:{
    flexDirection:'row',
    alignItems:'center',
    padding:15,
    backgroundColor:'#FF5400',
  },
  touch:{
    borderWidth:2,
    borderRadius:10,
    width:350,
    marginLeft:30,
    marginTop:20,
    overflow:'hidden'
  },
  image:{
    height:'100%',
    width:'100%',
    borderWidth:1,
    borderRadius:15,
    backgroundColor:'#FFF',
  },
  areaImage:{
    height:70,
    width:70,
  },
  text:{
    fontSize:25,
    paddingLeft:20,
    width:250
  }
})

export default styles;