import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const place4 = require("../assets/Up.png");

const Overview = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [transactionName, setTransactionName] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const handleAddIncome = () => {
    const amount = parseInt(inputText);
    const transaction = { type: "income", amount, name: transactionName };
    setTransactions([...transactions, transaction]);
    setInputText("");
    setTransactionName("");
    setModalVisible(false);
  };

  const handleAddExpense = () => {
    const amount = parseInt(inputText);
    const transaction = { type: "expense", amount, name: transactionName };
    setTransactions([...transactions, transaction]);
    setInputText("");
    setTransactionName("");
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.incomeBox}>
        <Text style={styles.balanceText}>Your Balance</Text>
        <Text style={styles.balanceAmount}>
          {transactions.reduce((total, transaction) => {
            if (transaction.type === "income") {
              return total + transaction.amount;
            } else {
              return total - transaction.amount;
            }
          }, 0)}
        </Text>
      </View>

      <View style={styles.transactionList}>
        {transactions.map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <Text
              style={
                transaction.type === "income"
                  ? styles.incomeText
                  : styles.expenseText
              }
            >
              {transaction.name} - {transaction.type === "income" ? "+" : "-"}{" "}
              {transaction.amount}
            </Text>
          </View>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setTransactionName(text)}
              value={transactionName}
              placeholder="Enter transaction name"
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setInputText(text)}
              value={inputText}
              placeholder="Enter amount"
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleAddIncome}>
              <View style={styles.addButton}>
                <Text style={styles.buttonText}>Add Income</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddExpense}>
              <View style={styles.addButton}>
                <Text style={styles.buttonText}>Add Expense</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleButtonPress}
      >
        <Image source={place4} style={styles.post} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10002B",
    padding: 16,
  },
  incomeBox: {
    backgroundColor: "#310048",
    height: 200,
    width: 340,
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 100,
  },
  balanceText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  balanceAmount: {
    color: "white",
    fontSize: 24,
  },
  transactionList: {
    marginBottom: 20,
  },
  transactionItem: {
    backgroundColor: "#310048",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  incomeText: {
    color: "green",
    fontSize: 20,
  },
  expenseText: {
    color: "red",
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: "black",
    height: 40,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignSelf: "center",
    marginBottom: 100, // Adjust this value to add some spacing below the button
  },
  post: {
    width: 30,
    height: 30,
    marginBottom: 100, // Adjust this value to add some spacing below the button
  },
});

export default Overview;
