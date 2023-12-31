import Add from "./Add"; // Replace 'Add' with the actual path to your 'Add' component file
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TransactionCard from "../components/TransactionCard";
import TransactionCard2 from "../components/TransactionCard2";

import app from "../firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getFirestore,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";

//import transactionlist from '../mockdata/transactionlist';

const { width, height } = Dimensions.get("window");
const imageSize = Math.min(width, height) * 0.84;

const Overview = () => {
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const deleteTransaction2 = async (transactionId) => {
    console.log("Deleting transaction:", transactionId);

    try {
      // Delete the transaction from the database
      await deleteDoc(doc(db, "expenses", transactionId));
      console.log("Transaction deleted from the database");

      // Remove the deleted transaction from the state
      setExpenseList((prevList) =>
        prevList.filter((item) => item.id !== transactionId)
      );
      console.log("Transaction removed from state");
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const deleteTransaction = async (transactionId) => {
    console.log("Deleting transaction:", transactionId);

    try {
      // Delete the transaction from the database
      await deleteDoc(doc(db, "income", transactionId));
      console.log("Transaction deleted from the database");

      // Remove the deleted transaction from the state
      setIncomeList((prevList) =>
        prevList.filter((item) => item.id !== transactionId)
      );
      console.log("Transaction removed from state");
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  /* const handleTransactionDelete = async (itemId) => {
    try {
      // Implement the deletion logic here
      // For example, delete the item from the database using the itemId

      // Call a function to remove the item from the database
      // For example:
      // await deleteTransactionFromDatabase(itemId);

      // After successful deletion, update the local state
      // Remove the deleted item from the expenseList or incomeList state
      setExpenseList((prevList) =>
        prevList.filter((item) => item.id !== itemId)
      );
      setIncomeList((prevList) =>
        prevList.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  }; */

  const db = getFirestore(app);

  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  /* 
  useEffect(() => {
    const calculateTotalIncome = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "income"));
        let totalIncome = 0;
        const incomeData = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const amount = data.amount; // Assuming the amount field exists in the documents
          const description = data.description;
          const date = data.date;
          //const category = data.category;

          const incomeObject = {
            amount: Number(amount),
            description: description,
            date: date,
            // Add other fields from the document as needed
          };

          incomeData.push(incomeObject);
          console.log(incomeObject);

          totalIncome += Number(amount);
        });

        setIncomeList(incomeData);

        // console.log(totalIncome);
        setTotalIncome(totalIncome);
      } catch (error) {
        console.error("Error calculating total income:", error);
      }
    };

    const calculateTotalExpense = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "expenses"));
        let totalExpense = 0;
        const expenseData = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const amount = data.amount; // Assuming the amount field exists in the documents
          const description = data.description;
          const date = data.date;
          const category = data.category;

          const expenseObject = {
            amount: Number(amount),
            description: description,
            date: date,
            category: category,
            // Add other fields from the document as needed
          };

          expenseData.push(expenseObject);
          console.log("expsense object is");
          console.log(expenseObject);

          totalExpense += Number(amount);
        });
        setExpenseList(expenseData);

        console.log(totalExpense);
        setTotalExpense(totalExpense);
      } catch (error) {
        console.error("Error calculating total income:", error);
      }
    };

    calculateTotalIncome();
    calculateTotalExpense();
  }, []); // Run the effect only once, on component mount

  const updateOverview = (newBalance, newExpenses, newIncome) => {
    setBalance(newBalance);
    setExpenses(newExpenses);
    setIncome(newIncome);
  }; */

  /* useEffect(() => {
    const unsubscribeIncome = onSnapshot(
      collection(db, "income"),
      (snapshot) => {
        const updatedIncome = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIncomeList(updatedIncome);

        let totalIncome = 0;
        updatedIncome.forEach((income) => {
          totalIncome += Number(income.amount);
        });
        setTotalIncome(totalIncome);
      }
    );

    const unsubscribeExpense = onSnapshot(
      collection(db, "expenses"),
      (snapshot) => {
        const updatedExpenses = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExpenseList(updatedExpenses);

        let totalExpense = 0;
        updatedExpenses.forEach((expense) => {
          totalExpense += Number(expense.amount);
        });
        setTotalExpense(totalExpense);
      }
    );

    return () => {
      unsubscribeIncome();
      unsubscribeExpense();
    };
  }, []); */

  useEffect(() => {
    const unsubscribeIncome = onSnapshot(
      collection(db, "income"),
      (snapshot) => {
        const updatedIncome = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort the income list by date in descending order
        updatedIncome.sort((a, b) => new Date(b.date) - new Date(a.date));

        setIncomeList(updatedIncome);

        let totalIncome = 0;
        updatedIncome.forEach((income) => {
          totalIncome += Number(income.amount);
        });
        setTotalIncome(totalIncome);
      }
    );

    const unsubscribeExpense = onSnapshot(
      collection(db, "expenses"),
      (snapshot) => {
        const updatedExpenses = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort the expense list by date in descending order
        updatedExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));

        setExpenseList(updatedExpenses);

        let totalExpense = 0;
        updatedExpenses.forEach((expense) => {
          totalExpense += Number(expense.amount);
        });
        setTotalExpense(totalExpense);
      }
    );

    return () => {
      unsubscribeIncome();
      unsubscribeExpense();
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
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView>
        <View style={styles.topBar}>
          <Image style={styles.topImg} source={require("../assets/pfp.png")} />
          <Text style={styles.topText}>Hello there!!</Text>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={[
              styles.infoSection,
              { width: imageSize, height: imageSize },
            ]}
            source={require("../assets/Over_Rectangle.png")}
          />

          <View style={styles.infoOverlay}>
            <View>
              <Text style={styles.overlayText}>Total Balance</Text>
              <Text style={styles.balanceText}>
                <Text></Text>
                {totalIncome - totalExpense}
              </Text>

              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.insideTextbox}>
                  <Text
                    style={{
                      right: 40,
                      fontSize: 12,
                      color: "white",
                      top: 120,
                      fontFamily: "Lexend_Regular",
                    }}
                  >
                    Income
                  </Text>
                  <Image
                    style={{ top: 105, right: 90 }}
                    source={require("../assets/Up.png")}
                  />
                  <Text
                    style={{
                      right: 40,
                      fontSize: 18,
                      color: "white",
                      top: 80,
                      fontFamily: "Lexend_SemiBold",
                    }}
                  >
                    {totalIncome}
                    {/* total income */}
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      left: 70,
                      fontSize: 12,
                      color: "white",
                      top: 120,
                      fontFamily: "Lexend_Regular",
                    }}
                  >
                    Expense
                  </Text>
                  <Image
                    style={{ top: 105, left: 20 }}
                    source={require("../assets/down.png")}
                  />
                  <Text
                    style={{
                      left: 70,
                      fontSize: 18,
                      color: "white",
                      top: 80,
                      fontFamily: "Lexend_SemiBold",
                    }}
                  >
                    {totalExpense}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: "#E0AAFF",
            fontFamily: "Lexend_Medium",
            fontSize: 20,
            bottom: 20,
            left: 30,
          }}
        >
          Recent Transactions
        </Text>
        <View style={styles.list}>
          {/* <Button onPress={readData} title="read data" /> */}
          <FlatList
            data={expenseList}
            renderItem={({ item }) => (
              <TransactionCard2
                item={item}
                onDeleteExpense={deleteTransaction2}
              />
            )}
            keyExtractor={(item) => item.id}
          />
          <FlatList
            data={incomeList}
            renderItem={({ item }) => (
              <TransactionCard item={item} onDeleteIncome={deleteTransaction} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Overview;

const styles = StyleSheet.create({
  infoSection: {
    resizeMode: "contain",
  },

  infoContainer: {
    alignItems: "center",
  },

  topBar: {
    height: hp("10%"),
    flexDirection: "row",
    alignItems: "center",
    left: 30,
    marginTop: 20,
  },

  infoOverlay: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    textShadowColor: "white",
  },

  overlayText: {
    top: 90,
    fontFamily: "Lexend_Regular",
    color: "white",
    opacity: 0.7,
    fontSize: 15,
  },

  balanceText: {
    color: "white",
    fontSize: 36,
    top: 100,
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
  topText: {
    color: "#E0AAFF",
    fontFamily: "Lexend_Medium",
    fontSize: 20,
    opacity: 0.8,
    marginLeft: 5,
  },
  topImg: {
    width: 60,
    height: 60,
  },

  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
