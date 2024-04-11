import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const logo = require('@assets/desginCanva/logo.png'); // Make sure to replace with your actual logo path

export function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#e7f5ff',
    paddingLeft: 10, // Spacing from the left edge
    marginTop:40
  },
  logo: {
    width: 100, // Adjust based on your logo's size
    height: 100, // Adjust based on your logo's size
  },
});
