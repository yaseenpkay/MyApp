import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
/* import { PieChart } from "react-native-svg-charts";
 */ import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../firebaseConfig";

const db = getFirestore(app);

const ExpensePieChart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);

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

        const chartData = Object.keys(categoryTotalExpenses).map(
          (category) => ({
            name: category,
            amount: categoryTotalExpenses[category],
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          })
        );

        console.log("Chart data before filtering:", chartData);

        // Remove entries with NaN amounts
        const validChartData = chartData.filter((item) => !isNaN(item.amount));

        console.log("Chart data after filtering:", validChartData);

        setCategoryData(validChartData);
        setIsLoading(false); // Data fetching is complete
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  if (isLoading) {
    // Display loading indicator while fetching data
    console.log("Rendering loading indicator...");
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#1AFF92" />
      </View>
    );
  }

  console.log("Rendering pie chart...");
  // Data fetching is complete, render the pie chart
  console.log("Category data:", categoryData);

  return (
    <View style={styles.container}>
      <PieChart
        data={categoryData.map((item, index) => ({
          key: index.toString(),
          ...item,
        }))}
        width={100}
        height={100}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: {
    flex: 1,
  },
});

export default ExpensePieChart;
