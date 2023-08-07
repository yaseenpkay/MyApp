import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const TransactionCard2 = ({ item, onDeleteExpense }) => {
  console.log(item);

  const categoryIcons = {
    Food: require("../assets/Pizza.png"),
    Transportation: require("../assets/Sedan.png"),
    Shopping: require("../assets/ShoppingBag.png"),
    Groceries: require("../assets/Buying.png"),
    Entertainment: require("../assets/VideoCamera.png"),
    Bills: require("../assets/Invoice.png"),
    Fuel: require("../assets/GasStation.png"),
    Other: require("../assets/More.png"),
  };

  const defaultImage = require("../assets/down.png");
  console.log("Item category:", item.category);

  const categoryImage = categoryIcons[item.category] || defaultImage;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => onDeleteExpense(item.id)}
      >
        <Image
          source={require("../assets/Cancel.png")}
          style={{
            width: 15,
            height: 15,
            top: 7,
            right: -3,
            position: "absolute",
          }}
        />
      </TouchableOpacity>
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
    width: 60,
    height: 60,
    right: 10,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: -4,
    right: 6,
    opacity: 0.2,
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
