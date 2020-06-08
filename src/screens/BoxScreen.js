import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(250, 0, 0)`,
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(0, 250, 0)`,
          marginTop: 100,
          //alignSelf: "flex-end",
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(0, 0, 250)`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    //borderWidth: 3,
    //borderColor: "black",
    height: 200,
    flexDirection: "row",
    //alignItems: "center",
    justifyContent: "space-between",
  },
  textOne: {
    borderWidth: 3,
    borderColor: "red",
    //flex: 2,
  },
  textTwo: {
    borderWidth: 3,
    borderColor: "red",
    //flex: 1,
    //alignSelf: "center",
    //position: "absolute",
    //left: 10,
    //...StyleSheet.absoluteFillObject,
  },
  textThree: {
    borderWidth: 3,
    borderColor: "red",
    //flex: 2,
    //alignSelf: "flex-end",
  },
});

export default BoxScreen;
