import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const BudgetScreen = () => {
  const [budgetName, setBudgetName] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");

  const handleSaveBudget = () => {
    // Handle saving the budget data
    console.log("Budget Name:", budgetName);
    console.log("Budget Amount:", budgetAmount);

    // Clear the input fields
    setBudgetName("");
    setBudgetAmount("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Budget Name:</Text>
        <TextInput
          style={styles.input}
          value={budgetName}
          onChangeText={setBudgetName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Budget Amount:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={budgetAmount}
          onChangeText={setBudgetAmount}
        />
      </View>
      <Button title="Save" onPress={handleSaveBudget} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default BudgetScreen;
