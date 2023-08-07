import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import app from "../firebaseConfig";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

const BudgetCard = ({ budget, onDeleteBudget }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const unsubscribeExpenses = onSnapshot(
      query(
        collection(db, "expenses"),
        where("category", "==", budget.category),
        where("date", ">=", budget.date)
      ),
      (snapshot) => {
        let total = 0;
        snapshot.forEach((doc) => {
          const expenseData = doc.data();
          total += parseFloat(expenseData.amount);
        });
        setTotalExpenses(total);
      }
    );

    return () => {
      unsubscribeExpenses();
    };
  }, [budget.category, budget.date]);
  //const [totalExpenses, setTotalExpenses] = useState(0);

  /* useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "expenses"), where("budgetId", "==", budget.id)),
      (snapshot) => {
        let total = 0;
        snapshot.forEach((doc) => {
          const expenseData = doc.data();
          total += expenseData.amount;
        });
        setTotalExpenses(total);
      }
    ); */

  /* return () => {
      unsubscribe();
    };
  }, [budget.id]);
  console.log("budget id", budget.id); */

  const percentage = (totalExpenses / budget.amount) * 100;
  let message = `You have used ${percentage.toFixed(0)}% of your budget`;

  let textColor = "#FFFFFF"; // Default color (white)

  if (percentage < 50) {
    message += "  You are doing well!";
    textColor = "#00FF00"; // Green color
  } else if (percentage >= 100) {
    message += "  You have exceeded the budget!";
    textColor = "#FF0000"; // Red color
  } else if (percentage >= 70) {
    message += "  You are near to reaching the limit! Spend wisely";
    textColor = "#FF3D00"; // Red color
  } else {
    message += "  You are near to reaching the limit! Spend wisely ";
    textColor = "#FFFF00"; // Yellow color
  }

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
  console.log("Item category:", budget.category);

  const categoryImage = categoryIcons[budget.category] || defaultImage;

  const categoryColors = {
    Food: "#f94144",
    Groceries: "#f8961e",
    Entertainment: "#f9c74f",
    Transportation: "#43aa8b",
    Shopping: "#277da1",
    Fuel: "#E74C3C",
    Bills: "#27AE60",
    Other: "#7F8C8D",
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.budgetContainer}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text
            style={{
              color: categoryColors[budget.category], // Use the color from the mapping,ontSize: 16,
              opacity: 0.9,
              fontSize: 19,
              fontFamily: "Lexend_Medium",
              marginTop: 10,
              marginLeft: 15,
              bottom: 3,
              width: 285,
            }}
          >
            {budget.name}
          </Text>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => onDeleteBudget(budget.id)} // Pass budget id to onDeleteBudget
          >
            <Image
              source={require("../assets/Cancel.png")}
              style={{
                width: 25,
                height: 25,
                top: 7,
                position: "relative",
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: categoryColors[budget.category], // Use the color from the mapping,ontSize: 16,
            opacity: 0.9,
            fontSize: 11,
            fontFamily: "Lexend_Medium",
            marginTop: 0,
            marginLeft: 12,
            bottom: 3,
          }}
        >
          {" "}
          {budget.category}-{budget.date}
        </Text>
        <View style={styles.info}>
          <Text style={styles.text}>
            {totalExpenses}/{budget.amount}
          </Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View
            style={{
              maxWidth: 300,
              width: (totalExpenses / budget.amount) * 300, // Adjust width as needed
              height: 10,
              borderRadius: 15,
              backgroundColor: textColor, // Use the color from the mapping
            }}
          />
        </View>
        <View style={styles.infoText}>
          <Text style={styles.text}>
            <Text style={styles.text}>{message}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BudgetCard;

const styles = StyleSheet.create({
  progressBarContainer: {
    width: 300, // Width of the progress bar container
    height: 10, // Height of the progress bar container
    backgroundColor: "black", // Background color of the progress bar container
    borderRadius: 15,
    opacity: 0.7,
    bottom: 2,
    top: 1,
    marginLeft: 15,
  },

  budgetContainer: {
    flex: 1,
    backgroundColor: "#121112",
    width: 330,
    height: 220,
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: "center",
  },
  info: {
    backgroundColor: "#332F36",
    width: "90%",
    fontSize: 26,
    fontFamily: "Lexend_SemiBold",
    color: "white",
    borderRadius: 10,
    margin: 3,
    marginLeft: 15,

    textAlignVertical: "center",
    textAlign: "center",
    flex: 1,
  },
  infoText: {
    backgroundColor: "#332F36",
    width: "90%",
    fontSize: 26,
    fontFamily: "Lexend_SemiBold",
    color: "white",
    marginLeft: 15,
    borderRadius: 10,
    textAlignVertical: "center",
    textAlign: "justify",
    flex: 2,
    marginBottom: 15,
    marginTop: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: "Lexend_SemiBold",
    color: "white",
    textAlignVertical: "center",
    textAlign: "center",
    flex: 1,
  },
  /* closeButton: {
    //position: "absolute",
    top: 5,
    right: 25,
  }, */
  closeButtonText: {
    color: "white",
    fontSize: 26,
    fontFamily: "Lexend_SemiBold",
    bottom: 2,
    //backgroundColor: "",
  },
});
