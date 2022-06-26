import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input({
  placeholder,
  onTextChange,
  secureTextEntry,
  style,
  multiline,
  value
}) {
  const customStyles = StyleSheet.compose(style);
  return (
    <TextInput
      style={[styles.input, customStyles]}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onChangeText={onTextChange}
      multiline = {multiline}
      defaultValue={value && value}

    />
  );
}

const styles = StyleSheet.create({
  input: {
    // marginHorizontal: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 25,
    fontSize: 18,
  },
});
