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
