import Log from './screens/Log' 

import Route from './Route'
import Overview from './screens/Overview' 
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './Route';
import Signup from './screens/Signup';

import { AuthContext } from './Context';



export default function App() {
  const [userToken, setUserToken] = useState(null);
  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setUserToken('asdf');
      },
      signUp: () => {
        setUserToken('asdf');
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);
  return (
    <AuthContext.Provider value={authContext}>
      <Signup />
    </AuthContext.Provider>
  )
  ;
}
