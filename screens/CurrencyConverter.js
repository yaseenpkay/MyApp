import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch("https://api.exchangeratesapi.io/latest");
      const data = await response.json();
      setExchangeRates(data.rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  const handleConvert = () => {
    if (amount && exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const convertedValue =
        (parseFloat(amount) / exchangeRates[fromCurrency]) *
        exchangeRates[toCurrency];
      setConvertedAmount(convertedValue.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="From Currency"
        value={fromCurrency}
        onChangeText={(text) => setFromCurrency(text.toUpperCase())}
      />
      <TextInput
        style={styles.input}
        placeholder="To Currency"
        value={toCurrency}
        onChangeText={(text) => setToCurrency(text.toUpperCase())}
      />
      <TouchableOpacity style={styles.convertButton} onPress={handleConvert}>
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>
      {convertedAmount !== "" && (
        <Text style={styles.result}>
          Converted Amount: {convertedAmount} {toCurrency}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  convertButton: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default CurrencyConverter;
