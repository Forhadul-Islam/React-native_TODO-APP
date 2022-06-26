import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Button({title, onPress, style, loading}) {
  const buttonStyles = StyleSheet.compose(style)
  return (
    <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
          <Text style={styles.button_text}>{title} {" "} {loading && <ActivityIndicator color="#393935"/>}</Text>
        </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button:{
        backgroundColor: 'orange',
        height: 40,
        width: 180,
        borderRadius: 40,
        alignItems: 'center',
      },
      button_text: {
        fontWeight: '900',
        fontSize: 20,
        color: '#393935',
        alignItems: 'center',
        justifyContent: 'center'
      }
})