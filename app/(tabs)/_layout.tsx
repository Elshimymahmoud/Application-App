import { View, Text } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import color from "../../constans/color";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: color.bgColor,
          borderTopWidth: 0,
          padding: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.black,
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color="#ff7f36" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
