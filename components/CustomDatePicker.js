import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    const selectedDateString = date.dateString;
    console.log("Selected Date:", selectedDateString);
    setSelectedDate(selectedDateString);
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
      {/* Display transactions for the selected date */}
      {/* Replace this with your own logic to fetch and display transactions */}
    </View>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  container: {
    /* height: 400, // Adjust the height as needed
    width: 500, // Adjust the width as needed */
    justifyContent: "center",
    alignItems: "center",
  },
  cal: {
    borderRadius: 20,
    width: 350,
    height: 380,
    marginTop: 20,
  },
});
