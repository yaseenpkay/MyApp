import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const TransactionCard2 = ({ item }) => {
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
  },
  righttext: {
    color: "red",
    fontSize: 20,
    fontFamily: "Lexend_SemiBold",
  },
});

export default TransactionCard2;
