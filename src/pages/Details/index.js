import React from 'react'
import {ScrollView, View } from 'react-native'

import PageHeader from '../../components/PageHeader'
import Details from '../../components/DetailsList'

import styles from './styles'

export default function Drinks(){
    return(
      <View style={styles.container}>
        <PageHeader/>
        <ScrollView >
          <Details/>
        </ScrollView>
      </View>
    )
}