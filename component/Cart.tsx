import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import destinationsData from "@/data/destinations.json";
import AddToCartButton from "./CartButton";

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  duration: string;
  location: string;
  qnty?: number;
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
            ? { ...cartItem, qnty: (cartItem.qnty || 1) + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qnty: 1 }]);
    }
  };

  return (
    <View>
      <Text>Cart</Text>
      {destinationsData.map((product: Destination) => (
        <View key={product.id}>
          <Text>{product.name}</Text>
          <AddToCartButton
            item={product}
            cart={cartItems}
            setCart={setCartItems}
          />
        </View>
      ))}
      {cartItems.map((cartItem: Destination) => (
        <View key={cartItem.id}>
          <Text>
            {cartItem.name} ({cartItem.qnty})
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Cart;
