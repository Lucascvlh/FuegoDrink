import React, { useState } from 'react'
import {ScrollView, View } from 'react-native'

import PageHeader from '../../components/PageHeader'
import api from '../../services/api';

import styles from './styles'
import DrinkList from '../../components/DrinksList'

export default function Drinks(){
  return(
    <View style={styles.container}>
      <PageHeader/>
      <ScrollView >
        <DrinkList/>
      </ScrollView>
    </View>
  )
}