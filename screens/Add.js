import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity,
  Linking,
  Modal,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import app from "../firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";
import CustomDatePicker from "../components/CustomDatePicker";

//import { Linking } from "expo";

const Add = ({ updateOverview }) => {
  // const [income, setIncome] = useState(0);
  // const [expenses, setExpenses] = useState(0);
  // const [balance, setBalance] = useState(0);
  // const [incomeamount, setIAmount] = useState("");
  // const [expenseamount, setEAmount] = useState("");

  /* const [expenseCategory, setExpenseCategory] = useState("");
  const [incomeCategory, setIncomeCategory] = useState(""); */

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");

  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeDescription, setIncomeDescription] = useState("");

  const [expenseCategory, setExpenseCategory] = useState("");
  const [incomeCategory, setIncomeCategory] = useState("");

  const handlePress = (value) => {
    setExpenseCategory(value);
  };

  const handlePressi = (value) => {
    setIncomeCategory(value);
  };

  const redirectToWebsite = async () => {
    const url = "https://pay.google.com/about/"; // Replace with your desired website URL

    // Check if the device supports deep linking
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Open the website URL
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  };

  const redirectToApp = async () => {
    const appPackageName = "com.phonepe.app";

    // Check if the other app is installed on the device
    const isAppInstalled = await Linking.canOpenURL(appPackageName);

    if (isAppInstalled) {
      // Open the other app
      await Linking.openURL(appPackageName);
    } else {
      console.log("The other app is not installed.");
    }
  };

  const [expensedate, setExpenseDate] = useState("");
  const [incomedate, setIncomeDate] = useState("");

  /* const handleDateChange = (date) => {
    // Do something with the selected date
    console.log(date);
  }; */

  const db = getFirestore(app);

  const writeExpense = async () => {
    if (
      !expenseAmount ||
      !expenseDescription ||
      !expensedate ||
      !expenseCategory
    ) {
      setErrorMessage("Please enter both amount and description");
      return;
    }

    const todayTimestamp = Date.now();
    const expenseDateObj = new Date(expensedate);

    if (isNaN(expenseDateObj)) {
      setErrorMessage("Invalid date format");
      return;
    }

    const expenseDateTimestamp = expenseDateObj.getTime();

    if (expenseDateTimestamp > todayTimestamp) {
      setErrorMessage("Expense date cannot be in the future");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "expenses"), {
        amount: expenseAmount,
        description: expenseDescription,
        category: expenseCategory,
        date: expensedate,
      });
      console.log("Document written with ID: ", docRef.id);

      // Clear out the input fields
      setExpenseAmount("");
      setExpenseDescription("");
      setExpenseCategory("");
      setExpenseDate("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const writeIncome = async () => {
    if (!incomeAmount || !incomeDescription || !incomedate || !incomeCategory) {
      setErrorMessage("Please enter both amount and description");
      return;
    }

    const todayTimestamp = Date.now();
    const incomeDateObj = new Date(incomedate);

    if (isNaN(incomeDateObj)) {
      setErrorMessage("Invalid date format");
      return;
    }

    const incomeDateTimestamp = incomeDateObj.getTime();

    if (incomeDateTimestamp > todayTimestamp) {
      setErrorMessage("Income date cannot be in the future");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "income"), {
        amount: incomeAmount,
        description: incomeDescription,
        date: incomedate,
        category: incomeCategory,
      });
      console.log("Document written with ID: ", docRef.id);

      // Clear out the input fields
      setIncomeAmount("");
      setIncomeDescription("");
      setIncomeDate("");
      setIncomeCategory("");
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
            value={expenseCategory}
            placeholderTextColor={"#121112"}
            onChangeText={setExpenseCategory}
            placeholder="Choose Category"
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

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Date"
            placeholderTextColor={"#121112"}
            value={expensedate}
            onChangeText={setExpenseDate}
            /* onFocus={toggleDatePicker} */
          >
            {/* {selectedDate}
            {expensedate && <Text>{expensedate}</Text>} */}
          </TextInput>

          <TouchableOpacity
            style={styles.button}
            onPress={() => writeExpense()}
          >
            <Image source={require("../assets/addbuttonbig.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={redirectToWebsite}>
            <Image source={require("../assets/paybtn.png")} />
          </TouchableOpacity>

          {/* <Button title="Go to Other App" onPress={redirectToWebsite} /> */}
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
          {/* <Text style={styles.normalText}>Category</Text> */}

          <TextInput
            style={styles.input}
            value={incomeCategory}
            placeholderTextColor={"#121112"}
            onChangeText={setIncomeCategory}
            placeholder="Choose Category"
          />

          <View style={styles.categoryContainer}>
            <View style={styles.row}>
              <View style={styles.column}>
                <TouchableOpacity
                  style={styles.touchableOpacity}
                  onPress={() => handlePressi("Salary")}
                >
                  <Text style={styles.buttonText}>Salary</Text>
                </TouchableOpacity>
                {/* Content for first column of first row */}
              </View>
              <View style={styles.column}>
                <TouchableOpacity
                  style={styles.touchableOpacity}
                  onPress={() => handlePressi("Gift")}
                >
                  <Text style={styles.buttonText}>Gift</Text>
                </TouchableOpacity>
                {/* Content for second column of first row */}
              </View>
              <View style={styles.column}>
                <TouchableOpacity
                  style={styles.touchableOpacity}
                  onPress={() => handlePressi("Business")}
                >
                  <Text style={styles.buttonText}>Business</Text>
                </TouchableOpacity>
                {/* Content for third column of first row */}
              </View>
              <View style={styles.column}>
                <TouchableOpacity
                  style={styles.touchableOpacity}
                  onPress={() => handlePressi("Other")}
                >
                  <Text style={styles.buttonText}>Other</Text>
                </TouchableOpacity>
                {/* Content for fourth column of first row */}
              </View>
            </View>
          </View>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Date"
            placeholderTextColor={"#121112"}
            value={incomedate}
            onChangeText={setIncomeDate}
          />

          {/*  <CustomDatePicker onDateChange={handleDateChange} /> */}

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

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
    width: 330,
    height: "80%",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  closeButtonText: {
    fontSize: 24,
    color: "#E0AAFF",
    fontFamily: "Lexend_ExtraBold",
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

  button: {
    marginTop: 10,
    marginLeft: 35,
    marginBottom: 10,
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
