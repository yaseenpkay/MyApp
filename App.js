import Log from './screens/Log' 

import Route from './Route'
import Overview from './screens/Overview' 
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './Route';
import Signup from './screens/Signup';

import { AuthContext } from './Context';



export default function App() {
  return (
    <Route/>
  )
  ;
}
