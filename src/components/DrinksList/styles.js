const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  list:{
    flexDirection:'row',
    alignItems:'center',
    padding:24,
  },
  touch:{
    borderWidth:1,
    borderRadius:10,
    width:350,
    marginLeft:30,
    marginBottom:20,
    marginTop:20
  },
  image:{
    height:'100%',
    width:'100%',
    borderRadius:25,
    backgroundColor:'#eee'
  },
  areaImage:{
    height:50,
    width:50,
  },
  text:{
    fontSize:25,
    paddingLeft:20,
    width:250
  }
})

export default styles;