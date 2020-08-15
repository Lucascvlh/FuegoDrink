import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#DEDCDB',
    justifyContent:'center',
    alignItems:'center'
  },
  name:{
    marginBottom:10
  },
  textName:{
    fontSize:50,
    color:'#D6000C',
    fontWeight:'bold'
  },
  header:{
    marginBottom:10
  },
  text:{
    fontSize:20
  },
  emoji:{
    fontSize:30,
    marginLeft:60,
    marginTop:10
  },
  button:{
    width:300,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    borderWidth:1,
    marginBottom:20,
    backgroundColor:'white'
  },
  textButton:{ 
    fontSize:20,
  }
})

export default styles;