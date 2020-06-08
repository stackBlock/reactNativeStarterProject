import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
      case "decrement":
        return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
          // setCounter(counter + 1);
        }}
        title="Increase"
      />
      <Button
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
          // setCounter(counter - 1);
        }}
        title="Decrease"
      />
      <Text>Counter Screen: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
