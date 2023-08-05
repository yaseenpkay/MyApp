import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Import icons from Expo

import Overview from "./screens/Overview";
import Transaction from "./screens/Transaction";
import Add from "./screens/Add";
import Extra from "./screens/Extra";
import BudgetSetting from "./screens/BudgetSetting";
import SignUp from "./screens/Signup";
import Test from "./screens/Test";
import Testt from "./screens/Testt";
import Calculator from "./screens/Calculator";
import CurrencyConverter from "./screens/CurrencyConverter";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="SignUp" component={SignUp} />
      {/* Add the screens with the appropriate components */}
      {/* <AuthStack.Screen name="BudgetSetting" component={BudgetSetting} /> */}
      {/* <AuthStack.Screen name="ReportGeneration" component={ReportGenerationScreen} />
      <AuthStack.Screen name="Calculator" component={CalculatorScreen} />
      <AuthStack.Screen name="CurrencyConversion" component={CurrencyConversionScreen} /> */}
    </AuthStack.Navigator>
  );
};

const ExtraStack = createStackNavigator();

const Tabs = createBottomTabNavigator();

const ExtraScreen = () => (
  <ExtraStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ExtraStack.Screen name="Extra" component={Extra} />
    <ExtraStack.Screen name="BudgetSetting" component={BudgetSetting} />
    <ExtraStack.Screen name="Calculator" component={Calculator} />
    <ExtraStack.Screen name="CurrencyConverter" component={CurrencyConverter} />
  </ExtraStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: "#C77DFF", // Set the active icon color to purple

      tabBarShowLabel: false, // Hide the titles
    }}
    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: "black",
      tabBarInactiveBackgroundColor: "black",
      //activeTintColor: "#C77DFF", // Set the active icon color to purple

      tabBarStyle: {
        height: 80, // Set the desired height of the tab bar
        borderTopWidth: 0, // Remove the top border
      },
    }}
  >
    <Tabs.Screen
      name="Overview"
      component={Overview}
      options={{
        tabBarLabel: "", // Remove the label

        tabBarIcon: ({ color, size }) => (
          <Ionicons name="copy" size={25} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Transaction"
      component={Transaction}
      options={{
        tabBarLabel: "", // Remove the label

        tabBarIcon: ({ color, size }) => (
          <Ionicons name="bar-chart" size={25} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Add"
      component={Add}
      options={{
        tabBarLabel: "", // Remove the label

        tabBarIcon: ({ color, size }) => (
          <Ionicons name="add-circle" size={55} color={"#FFE7AA"} />
        ),
      }}
    />
    {/* <Tabs.Screen
      name="BudgetSetting"
      component={BudgetSetting}
      options={{
        tabBarLabel: "", // Remove the label

        tabBarIcon: ({ color, size }) => (
          <Ionicons name="copy" size={25} color={color} />
        ),
      }}
    /> */}
    <Tabs.Screen
      name="Extra"
      component={ExtraScreen}
      options={{
        tabBarLabel: "", // Remove the label

        tabBarIcon: ({ color, size }) => (
          <Ionicons name="apps" size={25} color={color} />
        ),
      }}
    />
    <Tabs.Screen name="test" component={Test} />
  </Tabs.Navigator>
);

export default function Routes({ userToken }) {
  return (
    <NavigationContainer>
      {userToken ? <TabsScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
});
