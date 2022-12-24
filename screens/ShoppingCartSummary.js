import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ShoppingCartSummary = ({ items }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    items.forEach(item => {
      newTotal += item.price * item.quantity;
    });
    setTotal(newTotal);
  }, [items]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} x {item.quantity}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: {total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: 'gray',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ShoppingCartSummary;

/* 
This shopping cart summary component takes a list of items as a prop, and displays them in a FlatList component. The FlatList component uses the data prop to specify the data to be rendered, the keyExtractor prop to specify a unique key for each item, and the renderItem prop to specify a function that returns a component to be rendered for each item. In this example, the function returns a View component with a Text component for the name and price of the item.

The component also calculates the total price of all the items using the useEffect hook and the useState hook. The useEffect hook is used to perform an action when the items prop changes, and the useState hook is used to store the total price in a state variable.

You can customize the appearance of the summary by using the styles object to define the layout and styling of the components. In this example, the container style is used to set the padding of the container, the item style is used to set the layout of the item components, and the name, price, and total styles are used to set the font size and color of the text.

*/