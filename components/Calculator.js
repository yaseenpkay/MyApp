import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Calculator = () => {
  const [input, setInput] = useState(""); // User input string
  const [result, setResult] = useState(""); // Result string

  const handlePress = (text) => {
    if (text === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (text === "C") {
      setInput("");
      setResult("");
    } else if (text === "del") {
      // Remove the last character from the input string
      setInput(input.slice(0, -1));
    } else {
      setInput(input + text);
    }
  };

  const renderButtons = () => {
    const buttons = [
      ["7", "8", "9", "/"],
      ["4", "5", "6", "*"],
      ["1", "2", "3", "-"],
      [".", "0", "=", "+"],
      ["(", ")", "C", "del"],
    ];

    return buttons.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((buttonText) => (
          <TouchableOpacity
            key={buttonText}
            style={styles.button}
            onPress={() => handlePress(buttonText)}
          >
            <Text style={styles.buttonText}>
              {buttonText === "*" ? "×" : buttonText}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result} </Text>
      <Text style={styles.inputText}>{input}</Text>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    justifyContent: "flex-end",
    backgroundColor: "#222",
    padding: 16,
    width: 320,
    alignSelf: "center",
    marginTop: 60,
  },
  resultText: {
    fontSize: 48,
    color: "white",
    textAlign: "right",
    fontFamily: "Lexend_SemiBold", // Apply the "Lexend" font here
    backgroundColor: "black",

    borderRadius: 10,
  },
  inputText: {
    fontSize: 24,
    color: "white",
    textAlign: "right",
    marginBottom: 20,
    marginRight: 15,
    fontFamily: "Lexend_SemiBold", // Apply the "Lexend" font here
  },
  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  button: {
    width: 65,
    height: 65,
    borderRadius: 20,
    backgroundColor: "#444",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  buttonText: {
    fontSize: 28,
    color: "white",
    fontFamily: "Lexend_SemiBold", // Apply the "Lexend" font here
  },
});

export default Calculator;
