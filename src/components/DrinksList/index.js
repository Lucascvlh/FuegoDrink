import React,{useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native'
import { View, Text, Image} from 'react-native';
import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api'

import styles from './styles'

export default function DrinkList(){
  const {
    params: { categorys },
  } = useRoute();

  const navigation = useNavigation();

  const [data, setData] = useState([]);
  useEffect(() =>{
    const params = categorys.replace(' ','_')
    async function getDrinks(){
      const res = await api.get(`/filter.php?c=${params}`);
      setData(res.data.drinks)
    }
    getDrinks();
  }, [])
  console.log(data)

  return(
    <View style={styles.container}>
      {data.map((drink) => (
        <RectButton
          key={drink.idDrink}
            onPress={() => {
              navigation.navigate('Details',{
                detail: drink.strDrink
              });
            }}
            style={styles.touch}>
            <View
            style={styles.list}> 
            <View style={styles.areaImage}>
              <Image 
              style={styles.image}
              source={{uri:drink.strDrinkThumb}}/>
            </View>
            <Text style={styles.text}>{drink.strDrink}</Text>
          </View>
        </RectButton>      
      ))}        
    </View>
  )
}