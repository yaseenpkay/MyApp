import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const TransactionCard = ({item}) => {
    console.log(item)
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={require('../assets/Up.png')}
          style={styles.image}
        /> 
      </View>
      <View style={styles.centerSection}>
        <Text style={styles.centertext}>desc</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.righttext}>100</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#332F36',
    borderRadius: 8,
    marginBottom: 8,
    width: 297,
    height:70
  },

  leftSection: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    right:10,
    resizeMode: 'contain',
  },
  centerSection: {
    flex: 3,
    marginLeft: 16,
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  centertext: {
    fontSize: 16,
    fontFamily:'Lexend_Regular',
    //fontWeight: 'bold',
    color:'#B891D9'

  },
  righttext:{
    color:'white',
    fontSize:20,
  }
});

export default TransactionCard;
