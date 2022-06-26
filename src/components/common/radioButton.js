import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function RadioButton({ state, setOption, options }) {
  return (
    <>
      {options.map((option) => {
        let selected = option === state;
        return (
          <Pressable
            key={option}
            style={styles.select}
            onPress={() => {
              setOption(option);
            }}
          >
            <View
              style={[
                styles.outerCircle,
                selected &&
                  (styles.selectedOuterCircleStyle, { borderColor: state }),
              ]}
            >
              <View
                style={[
                  styles.innerCircle,
                  selected &&
                    (styles.selectedInnerCircleStyle,
                    { backgroundColor: state, borderColor: state }),
                ]}
              />
            </View>
            <Text style={styles.select_text}>{option}</Text>
          </Pressable>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
  },
  innerCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "black",
    alignSelf: "center",
  },
  selectedOuterCircleStyle: {
    borderColor: "orange",
  },
  selectedInnerCircleStyle: {
    backgroundColor: "orange",
    borderColor: "orange",
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  select_text: {
    marginLeft: 10,
    textTransform: "uppercase",
  },
});
