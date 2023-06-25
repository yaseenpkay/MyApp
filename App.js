import {View, Text, StyleSheet} from 'react-native';
import {useMemo, useState} from 'react';
import Routes from './Routes';
import {AuthContext} from './Context';

const App = () => {
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
      <View style={styles.container}>
        <Routes userToken={userToken} />
      </View>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
