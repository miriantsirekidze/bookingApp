import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Shadow } from 'react-native-shadow-2';


const Container = (props) => {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View>
        <Shadow offset={[17, 18]} distance={4}>
          <TouchableOpacity style={styles.container}>
            <Image source={props.image} style={styles.image}/>
            <Text style={styles.text}>{props.text}</Text>
          </TouchableOpacity>
        </Shadow>
      </View>
    )
  }
}

export default Container

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: 100,
    height: 100,
    borderRadius: 16.83, 
    marginTop: 13,
    alignItems: "center",
    marginLeft: 15,
    elevation: 10
  },
  image: {
    width: 41, 
    height: 41,
    color: "#1D4D4F", 
    marginTop: 13
  },
  text: {
    textAlignVertical: "center",
    marginTop: 17,
    fontSize: 14, 
    color: "#1E1E1E",
    fontFamily: "Poppins_400Regular"
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  }
})