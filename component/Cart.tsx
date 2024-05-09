import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import destinationsData from "@/data/destinations.json";

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: string;
  price: string;
  duration: string;
  location: string;
  category: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Destination[]>([]);

  const addToCart = (product: Destination) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: (cartItem. || 1) + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <View>
      <Text>Cart</Text>
      {destinationsData.map((product: Destination) => (
        <View key={product.id}>
          <Text>{product.name}</Text>
          <Button title="Add to Cart" onPress={() => addToCart(product)} />
        </View>
      ))}
      {cartItems.map((cartItem) => (
        <View key={cartItem.id}>
          <Text>
            {cartItem.name} ({cartItem.quantity})
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Cart;
