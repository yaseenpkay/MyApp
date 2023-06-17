import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ExpensesScreen = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [balance, setBalance] = useState('');

  const calculateBalance = () => {
    const incomeValue = parseFloat(income);
    const expensesValue = parseFloat(expenses);
    const balanceValue = incomeValue - expensesValue;
    setBalance(balanceValue.toFixed(2).toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Income:</Text>
      <TextInput
        style={styles.input}
        value={income}
        onChangeText={text => setIncome(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Expenses:</Text>
      <TextInput
        style={styles.input}
        value={expenses}
        onChangeText={text => setExpenses(text)}
        keyboardType="numeric"
      />

      <Button title="Calculate Balance" onPress={calculateBalance} />

      <Text style={styles.label}>Balance:</Text>
      <Text style={styles.balance}>{balance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default ExpensesScreen;
