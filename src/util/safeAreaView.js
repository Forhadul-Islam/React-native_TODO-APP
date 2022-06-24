import { SafeAreaView as RNSafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'
import React, { Children } from 'react'

export default function SafeAreaView({children}) {
  return (
    <RNSafeAreaView style={styles.AndroidSafeArea}>
      {children}
    </RNSafeAreaView>
  )
}


const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
})