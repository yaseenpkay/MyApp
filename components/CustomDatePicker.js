// CustomDatePicker component
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const CustomDatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(new Date(date));
      onDateChange(new Date(date));
    }
    setShowPicker(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.dateButton}>Select Date</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateButton: {
    color: "gray",
    fontFamily: "Lexend_Regular",
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#121112",
    width: 290,
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
});

export default CustomDatePicker;
