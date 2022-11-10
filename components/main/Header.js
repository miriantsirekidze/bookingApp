import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Container from './Container';

const Header = () => {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    <AppLoading/>
  }else{
    return (
      <View style={{marginTop: 50, flexDirection: "row", marginLeft: 15}}>
        <View style={styles.searchBarContainer}>
          <Image source={require("../../img/icons/search.png")} style={styles.searchIcon}/>
          <TextInput
            style={styles.searchBar}
            placeholder="Search Now"
            placeholderTextColor={"#0D2D3A"}
          />
        </View>
        <TouchableOpacity style={styles.filterContainer}>
          <Image source={require("../../img/icons/filter.png")} style={styles.filter}/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Header

const styles = StyleSheet.create({
  searchBarContainer: {
    height: 50.49,
    width: 270,
    backgroundColor: "#E2E7E7",
    borderRadius: 12.62,
    justifyContent: "center"
  }, 
  searchIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
    color: "#0D2D3A",
    position: "absolute"
  },
  searchBar: {
    position: "absolute",
    marginLeft: 50,
    fontFamily: "Poppins_400Regular",
    width: 200, 
  },
  filterContainer: {
    width: 50.49,
    height: 50.49,
    borderRadius: 12.62,
    borderWidth: 1,
    borderColor: "#1D4D4F", 
    backgroundColor: "#F8F8F8",
    justifyContent: "center", 
    alignItems: "center", 
    marginLeft: 10
  },
  filter: {
    width: 25.24,
    height: 25.24, 
  }
})