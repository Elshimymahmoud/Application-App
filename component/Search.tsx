import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Search = ({
  value,
  onChangeText,
  onPressSearch,
}: {
  onChangeText: (e: string) => void;
  value: string;
  onPressSearch: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{ padding: 8 }}
        placeholder="Search for chat"
        placeholderTextColor={"#d3d3d3"}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity onPress={onPressSearch}>
        <AntDesign name="search1" style={{ fontSize: 20, marginLeft: 8 }} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#d3d3d3",
    borderRadius: 16,
    marginBottom: 8,
    width: 250,
  },
});
