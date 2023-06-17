import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Overview from './screens/Overview';
import Transactions from './screens/Transactions';
import Add from './screens/Add';
import People from './screens/People';
import Extras from './screens/Extras';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}> 
        <Tab.Screen name="Overview" component={Overview} />
        <Tab.Screen name="Transactions" component={Transactions} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="People" component={People} />
        <Tab.Screen name="Extras" component={Extras} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
