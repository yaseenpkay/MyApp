import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const TransactionCard2 = ({ item }) => {
  console.log(item);

  const categoryIcons = {
    Food: require("../assets/Pizza.png"),
    Transportation: require("../assets/Sedan.png"),
    Shopping: require("../assets/Shopping Bag.png"),
    Groceries: require("../assets/Buying.png"),
    Entertainment: require("../assets/Video Camera.png"),
    Bills: require("../assets/Invoice.png"),
    Fuel: require("../assets/Gas Station.png"),
    Other: require("../assets/More.png"),

    // Add more category-image associations as needed
  };

  const categoryImage = categoryIcons[item.category];

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={categoryImage} style={styles.image} />
      </View>
      <View style={styles.centerSection}>
        <Text style={styles.centertext}>{item.description}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.righttext}>- {item.amount}</Text>
        <Text style={styles.datetext}>{item.date}</Text>
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
    width: 330,
    height: 70,
  },

  leftSection: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
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
    fontSize: 16,
    fontFamily: "Lexend_SemiBold",
    //fontWeight: 'bold',
    color: "#B891D9",
    opacity: 0.8,
  },
  righttext: {
    color: "red",
    fontSize: 20,
    fontFamily: "Lexend_SemiBold",
    opacity: 0.5,
  },

  datetext: {
    color: "#B891D9",
    fontSize: 10,
    fontFamily: "Lexend_Regular",
    opacity: 0.6,
  },
});

export default TransactionCard2;
