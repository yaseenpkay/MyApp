import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import CustomDatePicker from "../components/CustomDatePicker";
import app from "../firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";

const Add = ({ updateOverview }) => {
  // const [income, setIncome] = useState(0);
  // const [expenses, setExpenses] = useState(0);
  // const [balance, setBalance] = useState(0);
  // const [incomeamount, setIAmount] = useState("");
  // const [expenseamount, setEAmount] = useState("");

  /* const [expenseCategory, setExpenseCategory] = useState("");
  const [incomeCategory, setIncomeCategory] = useState(""); */

  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");

  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeDescription, setIncomeDescription] = useState("");

  const [inputValue, setInputValue] = useState("");

  const handlePress = (value) => {
    setInputValue(value);
  };

  const handleDateChange = (date) => {
    // Do something with the selected date
    console.log(date);
  };

  const db = getFirestore(app);

  const writeExpense = async () => {
    if (!expenseAmount || !expenseDescription) {
      setErrorMessage("Please enter both amount and description");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "expenses"), {
        amount: expenseAmount,
        description: expenseDescription,
        category: inputValue,
        //date: date,
      });
      console.log("Document written with ID: ", docRef.id);

      // Clear out the input fields
      setExpenseAmount("");
      setExpenseDescription("");
      setInputValue("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const writeIncome = async () => {
    if (!incomeAmount || !incomeDescription) {
      setErrorMessage("Please enter both amount and description");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "income"), {
        amount: incomeAmount,
        description: incomeDescription,
        category: incomeCategory,
      });
      console.log("Document written with ID: ", docRef.id);

      // Clear out the input fields
      setIncomeAmount("");
      setIncomeDescription("");
      //setErrorMessage("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
        <View styles={styles.functionBox}>
          <Text style={styles.bigText}> Add Expense </Text>
          <Text style={styles.normalText}>Amount</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder=""
            value={expenseAmount}
            onChangeText={setExpenseAmount}
            required
          />
          <Text style={styles.normalText}>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={expenseDescription}
            onChangeText={setExpenseDescription}
          />

          <Text style={styles.normalText}>Category</Text>

          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Enter text..."
          />

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

          <CustomDatePicker onDateChange={handleDateChange} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => writeExpense()}
          >
            <Image source={require("../assets/addbuttonbig.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => writeExpense()}
          >
            <Image source={require("../assets/paybtn.png")} />
          </TouchableOpacity>
        </View>

        <View styles={styles.functionBox}>
          <Text style={styles.bigText}> Add Income </Text>
          <Text style={styles.normalText}>Amount</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder=""
            value={incomeAmount}
            onChangeText={setIncomeAmount}
          />
          <Text style={styles.normalText}>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={incomeDescription}
            onChangeText={setIncomeDescription}
          />
          <Text style={styles.normalText}>Category</Text>

          <CustomDatePicker onDateChange={handleDateChange} />

          <TouchableOpacity style={styles.button} onPress={() => writeIncome()}>
            <Image source={require("../assets/addbuttonbig.png")} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Add;

const styles = StyleSheet.create({
  bigText: {
    color: "white",
    fontSize: 24,
    fontFamily: "Lexend_SemiBold",
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 30,
  },

  /* functionBox: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "white",
  }, */

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
    marginBottom: 30,
    left: 35,
    color: "gray",
    fontSize: 20,
    fontFamily: "Lexend_Regular",
  },

  /* picker: {
    justifyContent: "center",
    width: 300,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 10,
    left: 40,
    color: "gray",
    fontSize: 20,
    fontFamily: "Lexend_Regular",
  },

  pickerItem: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "black",
  }, */

  button: {
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 10,
  },
  /* pickerlist: {
    backgroundColor: "lightgray",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    width: 200,
    height: 40,
  },
 */
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

  categoryContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 8,
  },
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
  /* touchableOpacity: {
    width: 100,
    height: 30,
    margin: 4,
  }, */
});
