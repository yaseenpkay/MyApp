import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { BarChart } from "react-native-svg-charts";
import firebase from "firebase/app";
import "firebase/firestore";

const BarChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchExpenseData();
  }, []);

  const fetchExpenseData = async () => {
    try {
      const snapshot = await db.collection("expenses").get();

      // Calculate the total expense amount
      let totalExpense = 0;
      snapshot.forEach((doc) => {
        const expense = doc.data();
        totalExpense += expense.amount;
      });

      // Calculate the percentage for each category
      const categoryData = [];
      snapshot.forEach((doc) => {
        const expense = doc.data();
        const percentage = (expense.amount / totalExpense) * 100;
        categoryData.push({ category: expense.category, percentage });
      });

      setData(categoryData);
    } catch (error) {
      console.log("Error fetching expense data: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        data={data}
        yAccessor={({ item }) => item.percentage}
        svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
        contentInset={{ top: 20, bottom: 20 }}
      />
    </View>
  );
};

export default BarChartComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    height: 200,
    width: "80%",
  },
});
