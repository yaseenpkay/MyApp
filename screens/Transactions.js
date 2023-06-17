import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';

const Overview = () => {
  return (
    <ScrollView style={{ backgroundColor: '#10002B', flex: 1 }}>
      <View style={styles.container}>
        <Text>Overview</Text>

        <Image
          style={styles.overRect}
          resizeMode="contain"
          source={require('../assets/OverRectangle.png')}
        />
      </View>
    </ScrollView>
  );
};

export default Overview;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overRect: {
    width: windowWidth * 0.8, // Adjust the width as needed
    aspectRatio: 1, // Maintain the original aspect ratio of the image
  },
});
