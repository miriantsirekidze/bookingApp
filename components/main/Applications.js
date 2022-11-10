import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const Applications = (props) => {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.imageContainer} activeOpacity={0.8}>
            <Image source={props.image} style={styles.image}/>
          </TouchableOpacity>
          <View style={{flexDirection: "row", marginLeft: 15.5, marginTop: 2}}>
            <Text style={styles.name}>Wooden Hut</Text>
            <Text style={styles.price}>Rp. 249.000 / Night</Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <Image source={require("../../img/icons/map.png")} style={styles.map}/>
            <Text style={styles.location}>Merbabu, Central Java</Text>
          </View>
          <View style={{flexDirection: "row", marginTop: 3, marginLeft: 15}}>
            <View style={{flexDirection: "row"}}>
              <Image style={styles.icon} source={require("../../img/icons/bell.png")}/>
              <Text style={styles.iconText}>All Inclusive</Text>
            </View>
            <View style={{flexDirection: "row", marginLeft: 10}}>
              <Image style={styles.icon} source={require("../../img/icons/freewifi.png")}/>
              <Text style={styles.iconText}>Free Wifi</Text>
            </View>
            <View style={{flexDirection: "row", marginLeft: 10}}>
              <Image style={styles.icon} source={require("../../img/icons/consultation.png")}/>
              <Text style={styles.iconText}>Free Consultation</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Applications

const styles = StyleSheet.create({
  container: {
    width: 331, 
    height: 322, 
    backgroundColor: "#FFFFFF", 
    borderRadius: 20,
    marginLeft: 15,
    marginBottom: 15
  },
  imageContainer: {
    marginTop: 11,
    marginLeft: 15.5
  },
  image: {
    width: 300,
    height: 235,
    borderRadius: 20,
  },
  name: {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
    color: "#0D2D3A",
  },
  price: {
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
    color: "#1E1E1E",
    marginTop: 2.5,
    marginLeft: 90
  },
  map: {
    width: 15,
    height: 15, 
    marginLeft: 15,
    bottom: 5
  }, 
  location: {
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
    color: "#0983B5",
    bottom: 6,
    marginLeft: 3
  },
  icon: {
    width: 15,
    height: 15,
  },
  iconText: {
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    marginLeft: 5,
  }
})