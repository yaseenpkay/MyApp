import { StyleSheet, Text, View, Image, Dimensions, FlatList} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TransactionCard from '../components/TransactionCard';
import transactionlist from '../mockdata/transactionlist';


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
    
    <ScrollView style={{backgroundColor:'#10002B', flex:1 }}>

    {/* <TransactionCard /> */}
    <View style={styles.topBar}></View>


    <View style={styles.infoContainer}>
      

      <Image style={[styles.infoSection, { width: imageSize, height: imageSize }]}
                source={require('../assets/OverRectangle.png')}/>

      <View style={styles.infoOverlay}>
        <Text style={styles.overlayText}>Total Balance</Text>
      </View>

      

    </View>
    
    <FlatList 
    data={transactionlist}
    renderItem={({transaction}) => <TransactionCard transaction={transaction} /> }
    />
    <FlatList 
    data={transactionlist}
    renderItem={({transaction}) => <TransactionCard transaction={transaction} /> }
    />


    </ScrollView>

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
    fontFamily:'Lexend-Medium',
     color: 'white',
     opacity:.7,
     fontSize:15,
  }



})