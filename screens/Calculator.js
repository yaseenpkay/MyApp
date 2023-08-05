import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Calculator from "../components/Calculator";

const Calculators = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <Text style={styles.bigText}>Calculator</Text>

      <Calculator />
    </SafeAreaView>
  );
};

export default Calculators;

const styles = StyleSheet.create({
  bigText: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Lexend_SemiBold",
    marginLeft: 30,
    top: 10,
  },
});
