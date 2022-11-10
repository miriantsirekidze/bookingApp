import { View, Text } from 'react-native'
import React from 'react'
import Applications from './Applications'

const Options = () => {
  return (
    <View>
      <Applications image={require("../../img/pictures/woodenhut.png")}/>
      <Applications image={require("../../img/pictures/secondwoodenhut.png")}/>
    </View>
  )
}

export default Options