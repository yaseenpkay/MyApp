import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../Context";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const Extras = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigation = useNavigation();

  const { signOut } = useContext(AuthContext);

  /* const handleOptionPress = (option) => {
    setSelectedOption(option);
    setModalOpen(true);
  }; */

  /*  const closeModal = () => {
    setModalOpen(false);
  }; */

  /* const handleOptionPress = (option) => {
    setSelectedOption(option); */

  /* switch (option) {
      case "budget-setting":
        navigation.navigate("BudgetSetting"); // Replace 'BudgetSetting' with the actual screen name
        break;
      case 'report-generation':
        navigation.navigate('ReportGeneration'); // Replace 'ReportGeneration' with the actual screen name
        break;
      case 'calculator':
        navigation.navigate('Calculator'); // Replace 'Calculator' with the actual screen name
        break;
      case 'currency-conversion':
        navigation.navigate('CurrencyConversion'); // Replace 'CurrencyConversion' with the actual screen name
        break;
      default:
        break;
    }
  }; */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("BudgetSetting")}
        >
          <View style={styles.optionContainer}>
            <Image
              source={require("../assets/Up.png")}
              style={styles.optionImage}
            />
            <Text style={styles.optionText}>Budget Setting</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("BudgetSetting")}
        >
          <View style={styles.optionContainer}>
            <Image
              source={require("../assets/Up.png")}
              style={styles.optionImage}
            />
            <Text style={styles.optionText}>Report Generation</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Calculator")}
        >
          <View style={styles.optionContainer}>
            <Image
              source={require("../assets/Up.png")}
              style={styles.optionImage}
            />
            <Text style={styles.optionText}>Calculator</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("CurrencyConverter")}
        >
          <View style={styles.optionContainer}>
            <Image
              source={require("../assets/Up.png")}
              style={styles.optionImage}
            />
            <Text style={styles.optionText}>Currency Conversion</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.option} onPress={() => signOut()}>
          <View style={styles.optionContainer}>
            <Image
              source={require("../assets/Up.png")}
              style={styles.optionImage}
            />
            <Text style={styles.optionText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* <Modal visible={isModalOpen} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Selected Option: {selectedOption}
            </Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  option: {
    flex: 0.5,
    alignItems: "center",
  },
  optionContainer: {
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#332F36",
    borderRadius: 10,
    opacity: 0.7,
  },
  optionImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 13,
    fontFamily: "Lexend_Medium",
    textAlign: "center",
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 300,
    width: 300,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
    height: 300,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: "center",
  },
});

export default Extras;
