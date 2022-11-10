import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const Category = () => {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View>
        <Text style={styles.category}>Category</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 15}}>
          <View style={{marginLeft: 15, marginTop: 5, flexDirection: "row"}}>
            <TouchableOpacity style={styles.house}>
              <Text style={styles.houseText}>House</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.villa}>
              <Text style={styles.villaText}>Villa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.apartments}>
              <Text style={styles.apartmentsText}>Apartments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.penthouse}>
              <Text style={styles.penthouseText}>Penthouse</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Category

const styles = StyleSheet.create({
  category: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    color: "#0D2D3A",
    marginTop: 10,
    marginLeft: 15,
  },
  houseText: {
    fontSize: 12, 
    fontFamily: "Poppins_600SemiBold", 
    textAlign: "center",
    color: "#FFFFFF"
  },
  villaText: {
    fontSize: 12, 
    fontFamily: "Poppins_600SemiBold", 
    textAlign: "center",
    color: "#000000"
  },
  house: {
    width: 80, 
    height: 40, 
    borderRadius: 15, 
    backgroundColor: "#283048", 
    justifyContent: "center"
  },
  villa: {
    width: 80, 
    height: 40, 
    borderRadius: 15, 
    backgroundColor: "#FFFFFF", 
    justifyContent: "center",
    borderColor: "#283048",
    borderWidth: 1.8,
    marginLeft: 5
  }, 
  apartments: {
    width: 110,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#FFFFFF", 
    justifyContent: "center",
    borderColor: "#283048",
    borderWidth: 1.8,
    marginLeft: 5
  },
  apartmentsText: {
    fontSize: 12, 
    fontFamily: "Poppins_600SemiBold", 
    textAlign: "center",
    color: "#000000"
  },
  penthouse: {
    width: 110,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#FFFFFF", 
    justifyContent: "center",
    borderColor: "#283048",
    borderWidth: 1.8,
    marginLeft: 5,
    marginRight: 15
  },
  penthouseText: {
    fontSize: 12, 
    fontFamily: "Poppins_600SemiBold", 
    textAlign: "center",
    color: "#000000"
  }
})