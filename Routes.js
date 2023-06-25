import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Overview from "./screens/Overview";
import Transaction from "./screens/Transaction";
import Add from "./screens/Add";
import Extra from "./screens/Extra";
import People from "./screens/People";
import SignUp from "./screens/SignUp";
import Test from "./screens/Test";
import Testt from "./screens/Testt";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: "black",
      tabBarInactiveBackgroundColor: "black",
    }}
  >
    <Tabs.Screen name="Overview" component={Overview} />
    <Tabs.Screen name="Transaction" component={Transaction} />
    <Tabs.Screen name="Add" component={Add} />
    <Tabs.Screen name="People" component={People} />
    <Tabs.Screen name="Extra" component={Extra} />
    <Tabs.Screen name="Test" component={Test} />
    <Tabs.Screen name="Testt" component={Testt} />
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
