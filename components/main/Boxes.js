import { View, Text } from 'react-native'
import React from 'react'
import Container from './Container'

const Boxes = () => {
  return (
    <View style={{flexDirection: "row"}}>
      <Container image={require("../../img/icons/nearby.png")} text={"Near By"}/>
      <Container image={require("../../img/icons/book.png")} text={"Book Room"}/>
      <Container image={require("../../img/icons/event.png")} text={"Add Event"}/>
    </View>
  )
}

export default Boxes