import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList} from 'react-native'
import React from 'react'
//import { useState } from 'react';
import { useFonts } from 'expo-font';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TransactionCard from '../components/TransactionCard';
import transactionlist from '../mockdata/transactionlist';
import CalendarView from '../components/CalendarView';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width, height } = Dimensions.get('window');
const imageSize = Math.min(width, height) * 0.84;


const Overview = () => {

  const [loaded] = useFonts({
    Lexend_ExtraBold: require('../assets/fonts/Lexend-ExtraBold.ttf'),
    Lexend_SemiBold: require('../assets/fonts/Lexend-SemiBold.ttf'),
    Lexend_Regular: require('../assets/fonts/Lexend-Regular.ttf'),
    Lexend_Medium: require('../assets/fonts/Lexend-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }



  
  return (
    
    <SafeAreaView style={{backgroundColor:'black', flex:1 }}>

    <Text style={{ color: '#E0AAFF', fontFamily:'Lexend_Medium',fontSize: 20, bottom: 0, left: 30}}>Calendar View</Text>
    
  


    <CalendarView/>
    
  

    </SafeAreaView>

  )
}

export default Overview

const styles = StyleSheet.create({

  infoSection:{
    resizeMode:'contain',
   
    
  },
  
  infoContainer:{
    alignItems: 'center',
  },

  topBar:{
    height:hp('10%'),
    
  },

  infoOverlay:{
    position:'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: 'white',
  },
  overlayText:{
    top:100,
    fontFamily:'Lexend_Regular',
     color: 'white',
     opacity:.7,
     fontSize:15,
  },

  balanceText:{
    color:'white',
    fontSize:36,
    top:118,
    position:'relative',
    fontFamily:'Lexend_ExtraBold'
  },

  insideText:{
    fontSize:15,
    color:'white',
    top:150,
    alignContent:'center'
  },
insideTextbox:{
  borderWidth:0
}


})