import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import {
  collection,
  getDocs,
  getFirestore,
  where,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import app from "../firebaseConfig";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import CalendarView from "../components/CalendarView";
import BudgetCard from "../components/BudgetCard";
import ExpenseList from "../components/ExpenseList";

import { SafeAreaView } from "react-native-safe-area-context";
import { Swipeable } from "react-native-gesture-handler"; // Import Swipeable

import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const db = getFirestore(app);

const Transaction = (budget) => {
  const [budgets, setBudgets] = useState([]);

  console.log("transaction budget id", budget.id);

  const deleteBudget = async (budgetId) => {
    console.log("Deleting budget with ID:", budgetId);

    try {
      // Delete the budget from the database
      console.log("Attempting to delete budget from database...");
      await deleteDoc(doc(db, "budget", budgetId));
      console.log("Budget deleted from the database");

      // Remove the deleted budget from the state
      setBudgets((prevBudgets) =>
        prevBudgets.filter((budget) => budget.id !== budgetId)
      );
      console.log("Budget removed from state");
    } catch (error) {
      console.error("Error deleting budget:", error);
    }
  };

  useEffect(() => {
    const unsubscribeBudgets = onSnapshot(
      collection(db, "budget"),
      async (snapshot) => {
        const updatedBudgets = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const budget = doc.data();
            budget.id = doc.id; // Set the id field to the document ID

            // Calculate total expenses for each budget's category and date range
            const expensesQuerySnapshot = await getDocs(
              query(
                collection(db, "expenses"),
                where("category", "==", budget.category),
                where("date", ">=", budget.date)
              )
            );

            let totalExpenses = 0;
            expensesQuerySnapshot.forEach((doc) => {
              const expense = doc.data();
              totalExpenses += parseFloat(expense.amount);
            });

            return { ...budget, totalExpenses };
          })
        );

        setBudgets(updatedBudgets);
      }
    );

    return () => {
      unsubscribeBudgets();
    };
  }, []);

  const [loaded] = useFonts({
    Lexend_ExtraBold: require("../assets/fonts/Lexend-ExtraBold.ttf"),
    Lexend_SemiBold: require("../assets/fonts/Lexend-SemiBold.ttf"),
    Lexend_Regular: require("../assets/fonts/Lexend-Regular.ttf"),
    Lexend_Medium: require("../assets/fonts/Lexend-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={{ backgroundColor: "black", flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
        <Text style={styles.title}>Calendar View</Text>

        <CalendarView />

        <Text style={styles.title}>Expense Analytics</Text>

        <View style={{ alignSelf: "center" }}>
          <ExpenseList />
        </View>

        <View>
          <Text style={styles.title}>Budget Tracking</Text>
          {/* <View style={{ top: 15 }}>
            <FlatList
              data={budgets}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Swipeable
                  renderRightActions={(progress, dragX) => (
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => handleDeleteBudget(item)}
                    >
                      <Text style={styles.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                  )}
                >
                  <BudgetCard
                    budget={item}
                    totalExpenses={item.totalExpenses || 0}
                  />
                </Swipeable>
              )}
            />
          </View> */}

          <View style={{ top: 15 }}>
            <FlatList
              data={budgets}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <BudgetCard
                  budget={item}
                  onDeleteBudget={() => deleteBudget(budget.id)} // Pass an inline arrow function here
                  totalExpenses={item.totalExpenses || 0}
                />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: "red",
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Lexend_Medium",
  },
  title: {
    color: "#E0AAFF",
    fontFamily: "Lexend_Medium",
    fontSize: 20,
    bottom: 0,
    left: 30,
    marginTop: 15,
  },

  infoSection: {
    resizeMode: "contain",
  },

  infoContainer: {
    alignItems: "center",
  },

  topBar: {
    height: hp("10%"),
  },

  infoOverlay: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    textShadowColor: "white",
  },
  overlayText: {
    top: 100,
    fontFamily: "Lexend_Regular",
    color: "white",
    opacity: 0.7,
    fontSize: 15,
  },

  balanceText: {
    color: "white",
    fontSize: 36,
    top: 118,
    position: "relative",
    fontFamily: "Lexend_ExtraBold",
  },

  insideText: {
    fontSize: 15,
    color: "white",
    top: 150,
    alignContent: "center",
  },
  insideTextbox: {
    borderWidth: 0,
  },

  container: {
    flex: 1,
    backgroundColor: "black",
  },
  chartContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  chart: {
    flexDirection: "row",
    height: 200,
    width: "80%",
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
});
