import Add from './Add'; // Replace 'Add' with the actual path to your 'Add' component file
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TransactionCard from '../components/TransactionCard';

//import transactionlist from '../mockdata/transactionlist';

const { width, height } = Dimensions.get('window');
const imageSize = Math.min(width, height) * 0.84;




const Overview = () => {

  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);

  const updateOverview = (newBalance, newExpenses, newIncome) => {
    setBalance(newBalance);
    setExpenses(newExpenses);
    setIncome(newIncome);
  };


  const [loaded] = useFonts({
    Lexend_ExtraBold: require('../assets/fonts/Lexend-ExtraBold.ttf'),
    Lexend_SemiBold: require('../assets/fonts/Lexend-SemiBold.ttf'),
    Lexend_Regular: require('../assets/fonts/Lexend-Regular.ttf'),
    Lexend_Medium: require('../assets/fonts/Lexend-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  /* const Add = ({ balance, expenses, income }) => {
    // ... your existing code ...
  
    return (
      // ... your existing JSX code ...
      <Overview balance={balance} expenses={expenses} income={income} />
    );
  }; */
  

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={styles.topBar}>
        <Image style={styles.topImg} source={require('../assets/pfp.png')}/><Text style={styles.topText}>Hello there!!</Text>

      </View>

      <View style={styles.infoContainer}>
        <Image style={[styles.infoSection, { width: imageSize, height: imageSize }]} source={require('../assets/Over_Rectangle.png')} />

        <View style={styles.infoOverlay}>
          <View>
            <Text style={styles.overlayText}>Total Balance</Text>
            <Text style={styles.balanceText}><Text></Text>{balance}</Text>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.insideTextbox}>
                <Text style={{ right: 50, fontSize: 12, color: 'white', top: 150, fontFamily:'Lexend_Regular'  }}>Income</Text>
                <Image style={{ top: 135, right: 100 }} source={require('../assets/Up.png')} />
                <Text style={{ right: 50, fontSize: 18, color: 'white', top: 109, fontFamily:'Lexend_SemiBold' }}>{income}</Text>
              </View>

              <View>
                <Text style={{ left: 70, fontSize: 12, color: 'white', top: 150, fontFamily:'Lexend_Regular'}}>Expense</Text>
                <Image style={{ top: 135, left: 20 }} source={require('../assets/down.png')} />
                <Text style={{ left: 70, fontSize: 18, color: 'white', top: 109 , fontFamily:'Lexend_SemiBold'}}>{expenses}</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={{ color: '#E0AAFF', fontFamily:'Lexend_Medium',fontSize: 20, bottom: 20, right: 70 }}>Recent Transactions</Text>
      </View>

      <TransactionCard />

    </SafeAreaView>
  );
};

export default Overview;

const styles = StyleSheet.create({
  infoSection: {
    resizeMode: 'contain',
  },

  infoContainer: {
    alignItems: 'center',
  },

  topBar: {
    height: hp('10%'),
    flexDirection:'row',
    alignItems:'center',
    left:30,
    marginTop:20
  },

  infoOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: 'white',
  },

  overlayText: {
    top: 100,
    fontFamily: 'Lexend_Regular',
    color: 'white',
    opacity: 0.7,
    fontSize: 15,
  },

  balanceText: {
    color: 'white',
    fontSize: 36,
    top: 118,
    position: 'relative',
    fontFamily: 'Lexend_ExtraBold',
  },

  insideText: {
    fontSize: 15,
    color: 'white',
    top: 150,
    alignContent: 'center',
  },
  insideTextbox: {
    borderWidth: 0,
  },
  topText:{
    color:'#E0AAFF',
    fontFamily:'Lexend_Medium',
    fontSize:20,
    opacity:.8,
    marginLeft:5,
  },
  topImg:{
    width:60,
    height:60,
  },
  
});
