import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

const screenWidth = Dimensions.get("window").width;

const Home = ({navigation}) => {


  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View style={{backgroundColor: "#001118", flex: 1}}>
        <StatusBar style='light'/>
        <Image source={require("../img/pictures/home.png")} style={styles.image}/>
        <Text style={styles.text}>Rent a House for you.</Text>
        <View style={styles.container}>
          <Text style={styles.reservation}>Reservation Now</Text>
          <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => navigation.navigate("Main")}>
            <Text style={styles.buttonText}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

export default Home

const styles = StyleSheet.create({
  image: {
    width: 414,
    height: 515,
    marginTop: 151
  },
  text: {
    fontSize: 40,
    fontFamily: "Poppins_700Bold",
    color: "#FFFFFF",
    position: "absolute",
    marginLeft: 43,
    marginTop: 140
  }, 
  container: {
    backgroundColor: "#FFFFFF",
    height: 236,
    width: screenWidth,
    position: "absolute",
    marginTop: 600, 
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70
  }, 
  reservation: {
    marginTop: 25, 
    fontFamily: "Poppins_400Regular", 
    fontSize: 15, 
    textAlign: "center"
  }, 
  button: {
    backgroundColor: "#04242F",
    alignSelf: "center",
    height: 60,
    width: 220,
    marginTop: 10, 
    borderRadius: 50,
    justifyContent: "center"
  },
  buttonText: {
    color: "#DFDFDF",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
  }
})