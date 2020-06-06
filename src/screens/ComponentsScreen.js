import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

  const name = 'Anthony'

  return (
  <View>
    <Text style={styles.textStyle}>Getting started with React Native!</Text>
    <Text style={styles.textStyling}>My full name is {name}</Text>
  </View>
  )

};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyling: {
    fontSize: 20,
  },
});

export default ComponentsScreen;

