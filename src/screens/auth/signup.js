import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import SafeAreaView from "../../util/safeAreaView";
import Input from "../../components/common/input";
import Button from "../../components/common/button";

const genderOptions = ["male", "female"];

export default function Signup({navigation}) {
  const [gender, setGender] = useState(null);
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Create account</Text>
        <Input style={{ marginTop: 15 }} placeholder="Email address" />
        <Input
          style={{ marginTop: 15 }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Input style={{ marginTop: 15 }} placeholder="Name" />
        <Input style={{ marginTop: 15 }} placeholder="Age" />
      </View>
      <View style={styles.container}>
        {genderOptions.map((option) => {
          let selected = option === gender;
          return (
            <Pressable
              style={styles.select}
              onPress={() => {
                setGender(option);
              }}
            >
              <View
                style={[
                  styles.outerCircle,
                  selected && styles.selectedOuterCircleStyle,
                ]}
              >
                <View
                  style={[
                    styles.innerCircle,
                    selected && styles.selectedInnerCircleStyle,
                  ]}
                />
              </View>
              <Text style={styles.select_text}>{option}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={{ alignItems: "center", marginTop: 100 }}>
        <Button title="Sing up" />
      </View>
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
        <Text styel={{ color: "grey" , fontSize: 16 }}>
          Already have an account?{" "}
          <Pressable
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() => {
              navigation.navigate("Signin");
            }}
          >
            <Text style={{ color: "#2C8A99", fontWeight: "bold", fontSize: 16 }}>Log In</Text>
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
