import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

const CategorySelect = () => {
  const [inputValue, setInputValue] = useState("");

  const handlePress = (value) => {
    setInputValue(value);
  };

  const data = [
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" },
    { id: "3", label: "Option 3" },
    { id: "4", label: "Option 4" },
    { id: "5", label: "Option 5" },
    { id: "6", label: "Option 6" },
    { id: "7", label: "Option 7" },
    { id: "8", label: "Option 8" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => handlePress(item.label)}
    >
      <Text style={styles.buttonText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter text..."
      />
      <FlatList
        data={data}
        numColumns={4}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    marginBottom: 16,
    color: "white",
  },
  touchableOpacity: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
    margin: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  gridContainer: {
    width: "100%",
  },
});

export default CategorySelect;
