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

const TaxCalculatorScreen = () => {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState("");

  const calculateTax = () => {
    const taxableIncome = parseFloat(income);

    // Define your own tax slabs and calculations here
    const taxSlabs = [
      { min: 0, max: 250000, rate: 0 },
      { min: 250001, max: 500000, rate: 0.05 },
      { min: 500001, max: 1000000, rate: 0.2 },
      { min: 1000001, max: Infinity, rate: 0.3 },
    ];

    let calculatedTax = 0;

    for (const slab of taxSlabs) {
      if (taxableIncome > slab.min) {
        const slabMax = Math.min(taxableIncome, slab.max);
        const slabIncome = slabMax - slab.min;
        calculatedTax += slabIncome * slab.rate;
      }
    }

    setTax(calculatedTax.toFixed(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bigText}>Income Tax Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your annual income"
        keyboardType="numeric"
        value={income}
        onChangeText={(text) => setIncome(text)}
      />
      <TouchableOpacity style={styles.option} onPress={calculateTax}>
        <Text style={styles.optionText}>Calculate</Text>
      </TouchableOpacity>
      {tax !== "" && <Text style={styles.result}>Estimated Tax: ₹{tax}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  optionText: {
    fontSize: 24,
    fontFamily: "Lexend_Medium",
    textAlign: "center",
    color: "white",
    backgroundColor: "gray",
    height: 40,
    width: 300,
    borderRadius: 10,
    top: 8,
    left: 10,
  },
  bigText: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Lexend_SemiBold",
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 10,
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
    left: 10,
    color: "gray",
    fontSize: 20,
    fontFamily: "Lexend_Regular",
  },
  result: {
    top: 20,
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    width: 300,
    height: 60,
    borderRadius: 10,
    padding: 10,

    left: 10,
    color: "white",
    fontSize: 18,
    fontFamily: "Lexend_Regular",
  },
});

export default TaxCalculatorScreen;
