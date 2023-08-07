import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Test = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
/* import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
} from "react-native";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  doc,
  where,
  query,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import "firebase/firestore";

const app = initializeApp(firebaseConfig);

const db = firestore(app);

const DebtTrackingScreen = () => {
  const [personName, setPersonName] = useState("");
  const [debts, setDebts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [giveAmount, setGiveAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");

  useEffect(() => {
    fetchDebts();
  }, []);

  const fetchDebts = async () => {
    try {
      console.log("Fetching debts...");
      const querySnapshot = await getDocs(collection(db, "debt"));
      console.log("Query snapshot:", querySnapshot);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      console.log("Fetched debts:", data);
      setDebts(data);
    } catch (error) {
      console.error("Error fetching debts:", error);
    }
  };

  const handleAddDebt = async () => {
    try {
      if (personName) {
        const docRef = await addDoc(collection(db, "debt"), {
          name: personName,
        });
        console.log("Debt added with ID: ", docRef.id);
        setPersonName("");
        fetchDebts();
      }
    } catch (error) {
      console.error("Error adding debt: ", error);
    }
  };

  const handleModalSubmit = async () => {
    try {
      if (selectedPerson && (giveAmount || receiveAmount)) {
        const debtRef = doc(db, "debt", selectedPerson);
        await updateDoc(debtRef, {
          give: firebase.firestore.FieldValue.increment(
            Number(giveAmount) || 0
          ),
          receive: firebase.firestore.FieldValue.increment(
            Number(receiveAmount) || 0
          ),
        });
        console.log("Debt updated: ", selectedPerson);
        setGiveAmount("");
        setReceiveAmount("");
        setSelectedPerson("");
        setModalVisible(false);
        fetchDebts();
      }
    } catch (error) {
      console.error("Error updating debt: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Debt Tracking</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter person's name"
        value={personName}
        onChangeText={(text) => setPersonName(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddDebt}>
        <Text style={styles.buttonText}>Add Debt</Text>
      </TouchableOpacity>
      <FlatList
        data={debts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.debtItem}
            onPress={() => {
              setSelectedPerson(item.id);
              setModalVisible(true);
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Update Debt</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Enter amount to give"
            value={giveAmount}
            onChangeText={(text) => setGiveAmount(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.modalInput}
            placeholder="Enter amount to receive"
            value={receiveAmount}
            onChangeText={(text) => setReceiveAmount(text)}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.modalButton}
            onPress={handleModalSubmit}
          >
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(false);
              setSelectedPerson("");
              setGiveAmount("");
              setReceiveAmount("");
            }}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  debtItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingVertical: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalInput: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 16,
  },
});

export default DebtTrackingScreen;
 */
