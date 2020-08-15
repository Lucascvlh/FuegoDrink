import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

export default function PageHeader(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Fuego Drink 🔥</Text>
    </View>
  )
}