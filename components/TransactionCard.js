import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const TransactionCard = ({item}) => {
    console.log(item)
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {/* <Image
          source={require('../assets/itemicon.png')}
          style={styles.image}
        /> */}
      </View>
      <View style={styles.centerSection}>
        <Text style={styles.text}>desc</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.text}>100</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
  },
  leftSection: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
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
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionCard;
