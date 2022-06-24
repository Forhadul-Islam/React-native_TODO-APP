import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input({placeholder, onTextChange, secureTextEntry, style}) {
    const customStyles = StyleSheet.compose(style)
  return (
    <TextInput
    style={[styles.input, customStyles]}
    secureTextEntry={secureTextEntry}
    placeholder= {placeholder}
    onTextChange={onTextChange}
  />
  )
}


const styles = StyleSheet.create({
    input: {
        // marginHorizontal: 20,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 25,
        fontSize: 18,
      },
})