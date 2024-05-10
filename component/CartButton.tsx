import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CartItem {
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

interface Props {
  item: CartItem;
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

const AddToCartButton: React.FC<Props> = ({ item, cart, setCart }) => {
  const [qnty, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItem = { ...item, qnty };
    setCart([...cart, cartItem]);
  };

  return (
    <TouchableOpacity onPress={handleAddToCart}>
      <View>
        <Text>Add to hhhhhhhhhhhhhhhhhhhhhh Cart</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddToCartButton;
