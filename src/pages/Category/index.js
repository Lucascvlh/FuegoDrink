import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'
import {View, Text, TouchableOpacity} from 'react-native'

import api from '../../services/api'

import styles from './styles'

export default function Category (){
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  useEffect(() =>{
    async function getDrinks(){
      const res = await api.get('/list.php?c=list');
      setData(res.data.drinks)    
    }
    getDrinks();
  }, [])


  return(
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.textName}>Fuego Drink</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>Confira as categorias abaixo</Text>
      </View>
      {data.map((category) => (
        <TouchableOpacity 
          key={category.strCategory}
          onPress={() => {
            navigation.navigate('Drinks', {
              categorys: category.strCategory
            });
          }}
          style={styles.button}>
          <Text style={styles.textButton}>{category.strCategory}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}