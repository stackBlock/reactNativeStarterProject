## **_FlatList_** - require 2 props:

1. data
2. renderItem

- example:

```javascript
return (
  <FlatList
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    keyExtractor={(friend) => friend.name}
    data={friends}
    renderItem={({ item }) => {
      return (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      );
    }}
  />
);
```

## **_Button_** - require 1 prop (usually has more):

1. title

- example:

```javascript
<Button
  onPress={() => {
    console.log("Button Pressed");
  }}
  title="Go to components demo"
/>
```

## **_TouchableOpacity_** - require no props (usually has props)

- example:

```javascript
<TouchableOpacity
  onPress={() => {
    props.navigation.navigate("List");
  }}
>
  <Text>Go to List Demo</Text>
</TouchableOpacity>
```

## **_Image_** - require 1 prop

1. source

- example:

```javascript
<Image source={require("./../../assets/beach.jpg")} />
```

## **_useReducer_** - basic implementation

1. import reducer

```javascript
import React, { useReducer } from "react";
```

2. create state

```javascript
const [state, dispatch] = useReducer(reducer, { counter: 0 });
```

3. create reducer

```javascript
const reducer = (state, action) => {
  // state === {counter: number}
  // action === { (type: 'increment' || 'decrement'), (payload: 1)}
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
```

4. create use functions

```javascript
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
```

When you call dispatch, you are changing the two values in the action variable of the reducer function.

- reducer function must always return the state.
- reducer function can not directly change the state (ex. counter = counter +1)

## **_TextInput_** - need style to see anything - no required props. Example below includes state (useState)

- example

```javascript
const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
        <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(e) => {
          setName(e);
        }}
      />
      <Text>Name: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
```


