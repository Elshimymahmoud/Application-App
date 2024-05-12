import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { login } from "../../Firebase/auth";
const SignInScreen = () => {
  const router = useRouter();
  const handelLogin = async () => {
    try {
      await login(email, password);
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your email"
        style={styles.textInput}
        value={email}
        onChangeText={(e) => setEmail(e)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Enter your password"
        style={styles.textInput}
        value={password}
        onChangeText={(e) => setPassword(e)}
        secureTextEntry={true}
      />
      <View style={{ alignItems: "center" }}>
        <Pressable style={styles.button} onPress={handelLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    marginVertical: 8,
  },
  btn: {
    padding: 8,
    borderRadius: 16,
    elevation: 5,
    backgroundColor: "cyan",
    marginVertical: 8,
    alignItems: "center",
  },
  button: {
    padding: 8,
    borderRadius: 16,
    elevation: 5,
    backgroundColor: "cyan",
    marginVertical: 8,
    alignItems: "center",
  },
});
