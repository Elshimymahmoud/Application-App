import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { signUp } from "../../Firebase/auth";
import ProfileComponent from "./profile";
import { useRouter } from "expo-router";

const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHoveringPressable, setIsHoveringPressable] = useState(false);

  const validateConfirmPassword = () => {
    return password === confirmPassword;
  };
  const handleSignUp = async () => {
    if (validateConfirmPassword()) {
      try {
        await signUp(email, password);
        router.push("/(tabs)/Home");
      } catch (error) {
        console.error(error);
      }
    } else {
    }
  };

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
      <TextInput
        placeholder="Confirm your password"
        style={styles.textInput}
        value={confirmPassword}
        onChangeText={(e) => setConfirmPassword(e)}
        secureTextEntry={true}
        onBlur={validateConfirmPassword}
        onFocus={() => console.log("focused")}
      />

      <View style={{ alignItems: "center" }}>
        <Pressable
          style={{
            ...styles.btn,
            backgroundColor: isHoveringPressable ? "lime" : "cyan",
          }}
          onPress={async () => {
            if (validateConfirmPassword()) {
              await signUp(email, password);
            }
          }}
          onHoverIn={() => {
            setIsHoveringPressable(true);
            console.log("inside pressable");
          }}
          onHoverOut={() => {
            setIsHoveringPressable(false);
            console.log("outside pressable");
          }}
        >
          <Text>Sign up</Text>
        </Pressable>
      </View>
      <ProfileComponent email={email} />
    </View>
  );
};

export default SignUpScreen;

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
