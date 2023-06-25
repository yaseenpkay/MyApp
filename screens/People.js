import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
/* import { TouchableOpacity } from "react-native-gesture-handler"; */
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={styles.container}>
      <Text style={styles.bigText}>Budget Setting</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.normalText}>Budget Name:</Text>
        <TextInput
          style={styles.input}
          value={budgetName}
          onChangeText={setBudgetName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.normalText}>Budget Amount:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={budgetAmount}
          onChangeText={setBudgetAmount}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSaveBudget}>
        <Image source={require("../assets/addbuttonbig.png")} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* padding: 20, */
    /* alignItems: "center",
    justifyContent: "center", */
    backgroundColor: "black",
  },
  bigText: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Lexend_SemiBold",
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 30,
  },
  inputContainer: {
    marginBottom: 10,
  },

  normalText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Lexend_Medium",
    marginLeft: 35,
  },
  input: {
    top: 10,
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    width: 300,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    left: 30,
    color: "gray",
    fontSize: 20,
    fontFamily: "Lexend_Regular",
  },
  button: {
    marginTop: 5,
    marginLeft: 30,
    marginBottom: 10,
  },
});

export default BudgetScreen;
