import { View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/main/Header'
import { StatusBar } from 'expo-status-bar'
import Boxes from '../components/main/Boxes'
import Category from '../components/main/Category'
import Options from '../components/main/Options'

const Main = () => {
  return (
    <View style={{backgroundColor: "#F8F8F8", flex: 1}}>
      <StatusBar style='dark'/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header/>
        <Boxes/>
        <Category/>
        <Options/>
      </ScrollView>
    </View>
  )
}

export default Main