import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease, amount }) => {
  return (
    <View>
      <Text>
        {color} {amount}
      </Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => {
          onDecrease();
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${
            color === "red" ? (amount > 256 ? 256 : amount) : 125
          }, ${color === "green" ? (amount > 256 ? 256 : amount) : 125}, ${
            color === "blue" ? (amount > 256 ? 256 : amount) : 125
          })`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
