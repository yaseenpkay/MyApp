import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Calendar } from "react-native-calendars";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import app from "../firebaseConfig";
import CalendarCard from "./CalendarCardExpense";
import CalendarCardExpense from "./CalendarCardExpense";
import CalendarCardIncome from "./CalendarCardIncome";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredExpense, setFilteredExpense] = useState([]);
  const [filteredIncome, setFilteredIncome] = useState([]);

  const db = getFirestore(app);

  const handleDateSelect = async (date) => {
    const selectedDateString = date.dateString;
    console.log("Selected Date:", selectedDateString);
    setSelectedDate(selectedDateString);
    setModalVisible(true); // Open the modal

    try {
      const expensesRef = collection(db, "expenses");
      const dateQuery = query(
        expensesRef,
        where("date", "==", selectedDateString)
      );
      const querySnapshot = await getDocs(dateQuery);
      const fetchedExpense = [];

      querySnapshot.forEach((doc) => {
        const expense = doc.data();
        fetchedExpense.push(expense);
      });

      setFilteredExpense(fetchedExpense);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }

    try {
      const incomeRef = collection(db, "income");
      const dateQuery = query(
        incomeRef,
        where("date", "==", selectedDateString)
      );
      const querySnapshot = await getDocs(dateQuery);
      const fetchedIncome = [];

      querySnapshot.forEach((doc) => {
        const income = doc.data();
        fetchedIncome.push(income);
      });

      setFilteredIncome(fetchedIncome);
    } catch (error) {
      console.error("Error fetching incomes:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.cal}
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: "blue",
          },
        }}
        theme={{
          backgroundColor: "#332F36",
          calendarBackground: "#332F36",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#332F36",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#B25C78",
          dayTextColor: "white",
          textDisabledColor: "black",
          dotColor: "#332F36",
          selectedDotColor: "#ffffff",
          arrowColor: "#B891D9",
          monthTextColor: "#B891D9",
          indicatorColor: "#B891D9",
          textDayFontFamily: "Lexend_Regular",
          textMonthFontFamily: "Lexend_Medium",
          textDayHeaderFontFamily: "Lexend_Regular",
          textDayFontSize: 15,
          textMonthFontSize: 15,
          textDayHeaderFontSize: 12,
        }}
      />
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>x</Text>
            </TouchableOpacity>
            <Text style={styles.modalDate}>Date: {selectedDate}</Text>

            <Text style={styles.modalText}>Expenses</Text>

            <FlatList
              data={filteredExpense}
              renderItem={({ item }) => <CalendarCardExpense item={item} />}
              keyExtractor={(item) => item.id}
            />
            <Text style={styles.modalText}>Income</Text>

            <FlatList
              data={filteredIncome}
              renderItem={({ item }) => <CalendarCardIncome item={item} />}
              keyExtractor={(item) => item.id}
            />

            {/* Add your additional content here */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  cal: {
    borderRadius: 20,
    width: 350,
    height: 380,
    marginTop: 20,
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
  modalDate: {
    fontFamily: "Lexend_SemiBold",
    fontSize: 18,
    marginBottom: 1,
    color: "white",
    opacity: 0.8,
  },
  modalText: {
    fontFamily: "Lexend_Medium",
    fontSize: 16,
    marginBottom: 10,
    color: "white",
    opacity: 0.8,
    marginTop: 10,
  },
});
