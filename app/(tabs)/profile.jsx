import React from "react";
import { View, Text, StyleSheet, Image ,TouchableOpacity} from "react-native";

import ProfilePhoto from "../../assets/images/559530-200.png";

const ProfileComponent= ({
  email,
  imageUri,
   linkUrl: string,
   
}) => {
  const handleLinkPress = () => {
    Linking.openURL(linkUrl);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLinkPress}>
        <Image style={styles.image} source={ProfilePhoto} />
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <Text style={styles.text}>Email: hkop9530@gmail.com</Text>
      <Text style={styles.text}>Adress: cairo Un Facaluty of science</Text>
      <Text style={styles.text}>phone number: 011158455524</Text>

      <Text style={styles.text}>Welcome to your profile!</Text>
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
 
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 0,
    position:'relative',
    top:100,
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
