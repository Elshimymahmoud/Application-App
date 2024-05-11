import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { signIn } from "../../Firebase/auth";
import { Link } from "expo-router";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
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
        <Link href="/signIn" asChild>
          <Pressable
            style={styles.btn}
            onPress={async () => {
              await signIn(email, password);
            }}
          >
            <Text>Sign in</Text>
          </Pressable>
        </Link>

        <Link href="/signUp" asChild>
          <Pressable
            style={styles.btn}
            onPress={() => {
              navigate("/signUp");
            }}
          >
            <Text>Sign up</Text>
          </Pressable>
        </Link>
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
});
