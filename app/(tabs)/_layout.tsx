import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Tabs } from "expo-router";
import color from "../../constant/color";

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
        tabBarActiveTintColor: color.white,
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color="black" />
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
