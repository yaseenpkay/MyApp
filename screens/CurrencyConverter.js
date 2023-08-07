import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const supportedCurrencies = ["USD", "EUR", "GBP", "JPY", "INR"];

const fixedExchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.72,
  JPY: 110.85,
  INR: 74.72,
};

const CurrencyConverter = () => {
  const [input, setInput] = useState("0");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [output, setOutput] = useState("0");

  useEffect(() => {
    convert();
  }, [input, to, from]);

  function convert() {
    const rate = fixedExchangeRates[to] / fixedExchangeRates[from];
    setOutput((parseFloat(input) * rate).toFixed(2) || "0.00");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bigText}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        value={input}
        onChangeText={(text) => setInput(text)}
        keyboardType="numeric"
      />
      <Text style={styles.normalText}>From:</Text>
      <View style={styles.row}>
        {supportedCurrencies.map((currency) => (
          <TouchableOpacity
            key={currency}
            style={[
              styles.currencyButton,
              { backgroundColor: from === currency ? "#007BFF" : "white" },
            ]}
            onPress={() => setFrom(currency)}
          >
            <Text
              style={[
                styles.currencyText,
                { color: from === currency ? "white" : "black" },
              ]}
            >
              {currency}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.normalText}>To:</Text>
      <View style={styles.row}>
        {supportedCurrencies.map((currency) => (
          <TouchableOpacity
            key={currency}
            style={[
              styles.currencyButton,
              { backgroundColor: to === currency ? "#007BFF" : "white" },
            ]}
            onPress={() => setTo(currency)}
          >
            <Text
              style={[
                styles.currencyText,
                { color: to === currency ? "white" : "black" },
              ]}
            >
              {currency}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.input}>
        Converted Amount: {output} {to}
      </Text>
      {/* <TouchableOpacity style={styles.convertButton} onPress={convert}>
        <Text style={styles.convertButtonText}>Convert</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  normalText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Lexend_Medium",
    marginLeft: 10,
  },
  bigText: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Lexend_SemiBold",
    marginBottom: 15,
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
    marginLeft: 10,
    color: "gray",
    fontSize: 20,
    fontFamily: "Lexend_Regular",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    top: 10,
    right: 6,
  },
  label: {
    marginRight: 8,
    color: "white",
  },
  currencyButton: {
    paddingVertical: 8,
    paddingHorizontal: 10.5,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 4,
    fontFamily: "Lexend_Regular",
    backgroundColor: "orange", // Change the button color here
  },
  currencyText: {
    fontSize: 15,
    fontFamily: "Lexend_Medium",
  },
  convertedAmount: {
    top: 10,
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    width: 300,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 9,
    marginBottom: 15,
    left: 30,
    color: "gray",
    fontSize: 20,
    fontFamily: "Lexend_Regular",
  },
  convertButton: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 1,

    backgroundColor: "#332F36", // Change the button color here
    borderRadius: 8,
    width: 300,
    left: 10,
  },
  convertButtonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Lexend_Regular",
    textAlign: "center",
  },
});

export default CurrencyConverter;
