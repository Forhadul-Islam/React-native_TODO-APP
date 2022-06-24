import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({title, onPress, style}) {
  const buttonStyles = StyleSheet.compose(style)
  return (
    <TouchableOpacity style={[styles.button, buttonStyles]}>
          <Text style={styles.button_text}>{title}</Text>
        </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button:{
        backgroundColor: 'orange',
        height: 40,
        width: 150,
        borderRadius: 40,
      },
      button_text: {
        alignSelf: 'center',
        fontWeight: '900',
        fontSize: 19,
        color: 'black'
      }
})