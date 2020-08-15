import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#007FFF',
    justifyContent:'center',
    alignItems:'center'
  },
  name:{
    marginBottom:50
  },
  textName:{
    fontSize:35,
    color:'orange'
  },
  header:{
    marginBottom:50
  },
  text:{
    fontSize:20
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