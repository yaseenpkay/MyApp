import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Overview from './screens/Overview';
import Transactions from './screens/Transactions';
import Add from './screens/Add';
import People from './screens/Verthe';
import Log from './screens/Log';
import Extras from './screens/Extras';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  style: {
    /* backgroundColor: 'white', // Background color of the tab bar
    borderTopWidth: 0, // Remove the top border */
  },
};


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false , tabBarActiveBackgroundColor:'black',tabBarInactiveBackgroundColor:'black',}} tabBarOptions={tabBarOptions}> 
        <Tab.Screen name="Overview" component={Overview} />
        <Tab.Screen name="Transactions" component={Transactions} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="People" component={People} /> 
        <Tab.Screen name="Extras" component={Extras} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}