import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react';




const Add = ({ updateOverview }) => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);
  const [incomeamount, setIAmount] = useState('');
  const [expenseamount, setEAmount] = useState('');

  const addIncome = () => {
    const incomeAmount = parseFloat(incomeamount);
    setIncome(income + incomeAmount);
    setBalance(balance + incomeAmount);
    updateOverview(balance + incomeAmount, expenses, balance + incomeAmount);
  };

  const addExpense = () => {
    const expenseAmount = parseFloat(expenseamount);
    setExpenses(expenses + expenseAmount);
    setBalance(balance - expenseAmount);
    updateOverview(balance - expenseAmount, expenses + expenseAmount, balance - expenseAmount);
  };

/* 
  const [loaded] = useFonts({
    Lexend_ExtraBold: require('../assets/fonts/Lexend-ExtraBold.ttf'),
    Lexend_SemiBold: require('../assets/fonts/Lexend-SemiBold.ttf'),
    Lexend_Regular: require('../assets/fonts/Lexend-Regular.ttf'),
    Lexend_Medium: require('../assets/fonts/Lexend-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  } */

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
      <View styles={styles.functionBox}>
        <Text style={styles.bigText}> Add Expense </Text>
        <Text style={styles.normalText}>Amount</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder=""
        value={expenseamount}
        onChangeText={setEAmount}
       />
        <Text style={styles.normalText}>Description</Text>
        <TextInput
        style={styles.input}
        placeholder="Description"
        //value={number}
        //onChangeText={handleNumberChange}
       />

        <TouchableOpacity style={styles.button} onPress={() => addExpense(expenseamount)}>
          <Image source={require('../assets/addbuttonbig.png')} />
        </TouchableOpacity>

      </View>


      <View styles={styles.functionBox}>
        <Text style={styles.bigText}> Add Income </Text>
        <Text style={styles.normalText}>Amount</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder=""
        value={incomeamount}
        onChangeText={setIAmount}
       />
        <Text style={styles.normalText}>Description</Text>
        <TextInput
        style={styles.input}
        placeholder="Description"
        //value={number}
        //onChangeText={handleNumberChange}
       />

        <TouchableOpacity style={styles.button} onPress={() => addIncome(incomeamount)}>
          <Image source={require('../assets/addbuttonbig.png')} />
        </TouchableOpacity>

      </View>


    </SafeAreaView>
  )
}

export default Add

const styles = StyleSheet.create({
  bigText:{
    color:'white',
    fontSize:32,
    fontFamily:'Lexend_SemiBold',
    marginBottom:15,
    marginTop:10,
  },

  functionBox:{
    /* flex:1 ,
    backgroundColor:'white',
    borderWidth:5,
    borderColor:'white' */
  },

  normalText:{
    color:'white',
    fontSize:20,
    fontFamily:'Lexend_Medium',
    marginLeft:60
  },
  input:{
    top:10,
    justifyContent :'center',
    borderColor: 'gray',
    borderWidth: 1,
    width:300,
    height:60,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 30,
    left:60,
    color:'gray',
    fontSize:20,
    fontFamily:'Lexend_Regular'
  },

  button:{
    marginTop:10,
    marginLeft:60
  }
  
})