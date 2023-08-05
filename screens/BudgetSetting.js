import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
/* import { TouchableOpacity } from "react-native-gesture-handler"; */
import { SafeAreaView } from "react-native-safe-area-context";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import app from "../firebaseConfig";

const BudgetScreen = () => {
  const [budgetName, setBudgetName] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [budgetCategory, setBudgetCategory] = useState("");
  const [budgetDate, setBudgetDate] = useState("");

  const handlePress = (value) => {
    setBudgetCategory(value);
  };

  const db = getFirestore(app);

  const writeBudget = async () => {
    if (!budgetAmount || !budgetName || !budgetCategory || !budgetDate) {
      setErrorMessage("Please enter both amount and description");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "budget"), {
        amount: budgetAmount,
        name: budgetName,
        category: budgetCategory,
        date: budgetDate,
      });
      console.log("Document written with ID: ", docRef.id);

      // Clear out the input fields
      setBudgetAmount("");
      setBudgetCategory("");
      setBudgetName("");
      setBudgetDate("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bigText}>Budget Setting</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.normalText}>Budget Name:</Text>
        <TextInput
          style={styles.input}
          value={budgetName}
          onChangeText={setBudgetName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.normalText}>Budget Amount:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={budgetAmount}
          onChangeText={setBudgetAmount}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.normalText}>Category:</Text>
        <TextInput
          style={styles.input}
          value={budgetCategory}
          onChangeText={setBudgetCategory}
        />
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => handlePress("Food")}
            >
              <Text style={styles.buttonText}>Food</Text>
            </TouchableOpacity>
            {/* Content for first column of first row */}
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => handlePress("Groceries")}
            >
              <Text style={styles.buttonText}>Groceries</Text>
            </TouchableOpacity>
            {/* Content for second column of first row */}
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => handlePress("Entertainment")}
            >
              <Text style={styles.buttonText}>Entertainment</Text>
            </TouchableOpacity>
            {/* Content for third column of first row */}
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => handlePress("Transportation")}
            >
              <Text style={styles.buttonText}>Transportation</Text>
            </TouchableOpacity>
            {/* Content for fourth column of first row */}
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            {/* Content for first column of second row */}
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => handlePress("Shopping")}
            >
              <Text style={styles.buttonText}>Shopping</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            {/* Content for second column of second row */}
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => handlePress("Fuel")}
            >
              <Text style={styles.buttonText}>Fuel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            {/* Content for third column of second row */}
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => handlePress("Bills")}
            >
              <Text style={styles.buttonText}>Bills</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            {/* Content for fourth column of second row */}
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => handlePress("Other")}
            >
              <Text style={styles.buttonText}>Other</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Date"
        placeholderTextColor={"#121112"}
        value={budgetDate}
        onChangeText={setBudgetDate}
      />

      <TouchableOpacity style={styles.button} onPress={writeBudget}>
        <Image source={require("../assets/addbuttonbig.png")} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* padding: 20, */
    /* alignItems: "center",
    justifyContent: "center", */
    backgroundColor: "black",
  },
  bigText: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Lexend_SemiBold",
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 30,
  },
  inputContainer: {
    marginBottom: 10,
  },

  normalText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Lexend_Medium",
    marginLeft: 35,
  },
  input: {
    top: 10,
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    width: 300,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    left: 30,
    color: "gray",
    fontSize: 20,
    fontFamily: "Lexend_Regular",
  },
  button: {
    marginTop: 5,
    marginLeft: 30,
    marginBottom: 10,
  },
  /* categoryContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 8,
  }, */
  row: {
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 22,
  },
  column: {
    flex: 1,
    height: 30, // Adjust the height as needed
    backgroundColor: "black",
    margin: 4, // Adjust the margin as needed
  },
  buttonText: {
    color: "gray",
    fontFamily: "Lexend_Medium",
    fontSize: 8,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#121112",
    width: 71,
    height: 30,
    borderRadius: 15,
  },
});

export default BudgetScreen;
