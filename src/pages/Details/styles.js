import React from 'react'
import { ScrollView, View } from 'react-native'

import PageHeader from '../../components/PageHeader'
import DrinkList from '../../components/DrinksList'

import styles from './styles'

export default function Drinks(){
    return(
      <View style={styles.container}>
        <PageHeader/>
        <ScrollView >
          <DrinkList/>
          <DrinkList/>
          <DrinkList/>
          <DrinkList/>
          <DrinkList/>
        </ScrollView>
      </View>
    )
}