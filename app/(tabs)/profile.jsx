import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ProfilePhoto from "../../assets/images/559530-200.png";
import { router } from "expo-router";
import { auth } from "@/Firebase/config";

const ProfileComponent = ({}) => {
  const email = auth.currentUser?.email;

  const handleLinkPress = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.image} source={ProfilePhoto} />
      </TouchableOpacity>
      <View style={styles.inContainer}>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>phone number: 011158455524</Text>
        <Text style={styles.text}>Welcome to your profile!</Text>
      </View>
    </View>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inContainer: {
    alignItems: "center",
    padding: 55,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 0,
    position: "relative",
    top: 100,
  },

  tableBorder: {
    borderWidth: 1,
    borderColor: "#ccc",
  },

  tableText: {
    padding: 10,
    fontSize: 16,
    color: "#333",
  },

  text: {
    fontSize: 18,
    marginBottom: 30,
  },
});
