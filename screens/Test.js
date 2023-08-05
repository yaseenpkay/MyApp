/* import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../firebaseConfig";
import BudgetCard from "../components/BudgetCard"; // Assuming you have a BudgetCard component

const db = getFirestore(app);

const BudgetList = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        // Get the budget data from Firestore
        const budgetQuerySnapshot = await getDocs(collection(db, "budget"));

        // Map the documents to an array of budget objects
        const fetchedBudgets = budgetQuerySnapshot.docs.map((doc) =>
          doc.data()
        );

        // Set the fetched budgets in state
        setBudgets(fetchedBudgets);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBudgets();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BudgetCard budget={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    backgroundColor: "red",
  },
});

export default BudgetList;
 */
import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {
  collection,
  getDocs,
  getFirestore,
  where,
  query,
} from "firebase/firestore";
import app from "../firebaseConfig";
import BudgetCard from "../components/BudgetCard";

const db = getFirestore(app);

const BudgetList = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        // Get the budget data from Firestore
        const budgetQuerySnapshot = await getDocs(collection(db, "budget"));

        // Map the documents to an array of budget objects
        const fetchedBudgets = budgetQuerySnapshot.docs.map((doc) =>
          doc.data()
        );

        // Calculate total expenses for each budget's category and date range
        const budgetsWithTotalExpenses = await Promise.all(
          fetchedBudgets.map(async (budget) => {
            console.log("Fetching expenses for category:", budget.category);
            console.log("Budget date:", budget.date);

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
              totalExpenses += parseFloat(expense.amount); // Convert to number
            });

            console.log("Total Expenses:", totalExpenses);

            return { ...budget, totalExpenses };
          })
        );

        // Set the fetched budgets with total expenses in state
        setBudgets(budgetsWithTotalExpenses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBudgets();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BudgetCard budget={item} totalExpenses={item.totalExpenses || 0} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    backgroundColor: "red",
  },
});

export default BudgetList;
