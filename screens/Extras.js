import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calculator } from 'react-native-calculator';


const Extras = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderOptionContent = () => {
    switch (selectedOption) {
      case 'budget-setting':
        return (
          <View>
            <Text>Budget Setting Option Selected</Text>
            {/* Add budget setting functionality here */}
          </View>
        );
      case 'report-generation':
        return (
          <View>
            <Text>Report Generation Option Selected</Text>
            {/* Add report generation functionality here */}
          </View>
        );
      case 'Calculator':
        return (
          <View>
            <Text>Calculator Option Selected</Text>
             <Calculator style={{width:100,height:200}}/>
          </View>
        );
      case 'currency-conversion':
        return (
          <View>
            <Text>Currency Conversion Option Selected</Text>
            {/* Add currency conversion functionality here */}
          </View>
        );
      case 'logout':
        return (
          <View>
            <Text>Logout Option Selected</Text>
            {/* Add logout functionality here */}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('budget-setting')}>
          <View style={styles.optionContainer}>
            <Image source={require('../assets/Up.png')} style={styles.optionImage} />
            <Text style={styles.optionText}>Budget Setting</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('report-generation')}>
          <View style={styles.optionContainer}>
            <Image source={require('../assets/Up.png')} style={styles.optionImage} />
            <Text style={styles.optionText}>Report Generation</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('calculator')}>
          <View style={styles.optionContainer}>
            <Image source={require('../assets/Up.png')} style={styles.optionImage} />
            <Text style={styles.optionText}>Calculator</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('currency-conversion')}>
          <View style={styles.optionContainer}>
            <Image source={require('../assets/Up.png')} style={styles.optionImage} />
            <Text style={styles.optionText}>Currency Conversion</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('logout')}>
          <View style={styles.optionContainer}>
            <Image source={require('../assets/Up.png')} style={styles.optionImage} />
            <Text style={styles.optionText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalOpen} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Selected Option: {selectedOption}</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>

      <Calculator/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  option: {
    flex: 0.5,
    alignItems: 'center',
  },
  optionContainer: {
    width: 170,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#332F36',
    borderRadius: 10,
    opacity: 0.7,
  },
  optionImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 20,
    fontFamily: 'Lexend_Medium',
    textAlign: 'center',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height:'80%',
    width:'80%'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    maxHeight: '80%',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default Extras;
