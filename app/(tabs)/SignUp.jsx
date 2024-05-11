import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { signUp } from "../../Firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHoveringPressable, setIsHoveringPressable] = useState(false);

  const handleSignUp = async () => {
    if (validateConfirmPassword()) {
      try {
        await signUp(email, password);
        navigation.navigate("NextScreen");
      } catch (error) {
        console.error(error);
      }
    } else {
    }
  };
  const validateConfirmPassword = () => {
    return password === confirmPassword;
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
