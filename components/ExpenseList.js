import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../firebaseConfig";
//import { ProgressBar } from "react-native-progress"; // Import the ProgressBar component

const db = getFirestore(app);

const ExpenseList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");

        const querySnapshot = await getDocs(collection(db, "expenses"));
        const data = querySnapshot.docs.map((doc) => doc.data());

        console.log("Fetched data:", data);

        const categoryTotalExpenses = data.reduce((totals, expense) => {
          const category = expense.category;
          const amount = parseFloat(expense.amount);
          totals[category] = (totals[category] || 0) + amount;
          return totals;
        }, {});

        console.log("Category total expenses:", categoryTotalExpenses);

        const validChartData = Object.keys(categoryTotalExpenses).map(
          (category) => ({
            name: category,
            amount: categoryTotalExpenses[category],
          })
        );

        console.log("Valid chart data:", validChartData);

        const totalExpenseAmount = Object.values(categoryTotalExpenses).reduce(
          (total, amount) => total + amount,
          0
        );

        console.log("Total expense amount:", totalExpenseAmount);

        setCategoryData(validChartData);
        setTotalExpense(totalExpenseAmount);
        setIsLoading(false); // Data fetching is complete
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    // Display loading indicator while fetching data
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#1AFF92" />
      </View>
    );
  }

  console.log("Category data:", categoryData);
  console.log("Total expense:", totalExpense);

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 3, right: 15 }}>
                <Text
                  style={{
                    color: categoryColors[item.name], // Use the color from the mapping,ontSize: 16,
                    fontFamily: "Lexend_SemiBold",
                    fontSize: 20,
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <View style={{ top: 3, left: 15 }}>
                {/* <Text style={styles.categoryPer}>
                  {((item.amount / totalExpense) * 100).toFixed(0)}%
                </Text> */}
                <Text style={styles.categoryAmount}>
                  {"$"}
                  {item.amount.toFixed(0)} / {"$"}
                  {totalExpense.toFixed(0)}
                </Text>
              </View>
            </View>

            <View style={{}}>
              {/* <Text style={styles.categoryAmount}>
                {"$"}
                {item.amount.toFixed(0)} / {"$"}
                {totalExpense.toFixed(0)}
              </Text> */}
            </View>
            <View style={styles.progressBarContainer}>
              <View
                style={{
                  width: (item.amount / totalExpense) * 300, // Adjust width as needed
                  height: 20,
                  borderRadius: 15,
                  backgroundColor: categoryColors[item.name], // Use the color from the mapping
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: 300, // Width of the progress bar container
    height: 20, // Height of the progress bar container
    backgroundColor: "black", // Background color of the progress bar container
    borderRadius: 15,
    opacity: 0.7,
    top: 3,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121112",
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 15,
    width: 330,
    paddingBottom: 25,
  },
  loadingContainer: {
    flex: 1,
  },
  categoryPer: {
    fontFamily: "Lexend_SemiBold",
    fontSize: 25,
    flex: 1,
  },
  title: {
    color: "#E0AAFF",
    fontFamily: "Lexend_Medium",
    fontSize: 20,
    marginVertical: 15,
    flex: 1,
  },
  categoryItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    height: 60,
    fontFamily: "",
    width: 300,
    marginBottom: 10,
    flex: 1,
  },
  categoryName: {
    fontSize: 16,
    fontFamily: "Lexend_SemiBold",
    flex: 1,
  },
  categoryAmount: {
    fontFamily: "Lexend_SemiBold",
    fontSize: 16,
    flex: 1,
    color: "white",
  },
});

export default ExpenseList;
