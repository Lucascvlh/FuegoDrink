import React,{useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {ScrollView,View, Text} from 'react-native';

import api from '../../services/api';

import styles from './styles';


export default function IngredientList(){
  const {
    params: { detail }
  } = useRoute();

  const [data, setData] = useState([]);
  useEffect(() =>{
    async function getDrinks(){
      const params = detail.replace(' ','_')
      const res = await api.get(`/search.php?s=${params}`);
      setData(res.data.drinks)
    }
    getDrinks();
  }, [])

  return(
    <ScrollView style={styles.container}>
      {data.map((details) => (
        <View
          key={details.idDrink}
          style={styles.details}>
          <Text style={styles.name}>{details.strDrink}</Text>
          <Text style={styles.type}>Type: 
            <Text style={styles.typeAlcohlic}> {details.strAlcoholic}</Text>
          </Text>
          <Text style={styles.glass}>Type glass: 
            <Text style={styles.typeGlass}> {details.strGlass}</Text>
          </Text>
          <View style={styles.viewIngredient}>
            <Text style={styles.ingredient}>Ingredient</Text>
            <Text style={styles.ingredientItem}>{details.strIngredient1}</Text>
            <Text style={styles.ingredientItem}>{details.strIngredient2}</Text>
            <Text style={styles.ingredientItem}>{details.strIngredient3}</Text>
            <Text style={styles.ingredientItem}>{details.strIngredient4}</Text>
            <Text style={styles.ingredientItem}>{details.strIngredient5}</Text>
            <Text style={styles.ingredientItem}>{details.strIngredient6}</Text>
            <Text style={styles.ingredientItem}>{details.strIngredient7}</Text>
          </View>
          <View style={styles.viewInstruction}>
            <Text style={styles.instruction}>Preparation mode</Text>
            <Text style={styles.instructionPrepare}> {details.strInstructions}</Text>
          </View>
          
        </View>
      ))}
    </ScrollView>
  )
}