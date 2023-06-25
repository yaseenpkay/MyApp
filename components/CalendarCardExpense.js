import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const CalendarCardExpense = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={require("../assets/down.png")} style={styles.image} />
      </View>
      <View style={styles.centerSection}>
        <Text style={styles.centertext}>{item.description}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.righttext}>- {item.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#121112",
    borderRadius: 8,
    marginBottom: 8,
    width: 290,
    height: 60,
  },

  leftSection: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    right: 10,
    resizeMode: "contain",
  },
  centerSection: {
    flex: 2,
    marginLeft: 16,
  },
  rightSection: {
    flex: 2,
    alignItems: "flex-end",
    fontFamily: "Lexend_SemiBold",
  },
  centertext: {
    fontSize: 14,
    fontFamily: "Lexend_Medium",
    //fontWeight: 'bold',
    color: "white",
    opacity: 0.8,
  },
  righttext: {
    color: "red",
    fontSize: 20,
    fontFamily: "Lexend_Medium",
    opacity: 0.5,
  },

  datetext: {
    color: "#B891D9",
    fontSize: 10,
    fontFamily: "Lexend_Regular",
    opacity: 0.6,
  },
});

export default CalendarCardExpense;
