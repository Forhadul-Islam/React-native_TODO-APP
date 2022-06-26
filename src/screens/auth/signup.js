import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import SafeAreaView from "../../util/safeAreaView";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { App, Auth, DB } from "../../util/firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const auth = Auth;
const db = DB;

const genderOptions = ["male", "female"];

export default function Signup({ navigation }) {
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function signupHandler(email, password) {
    setLoading(true);
    setError(null);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      setLoading(false)
      await addDoc(collection(db, "users"), {
        name, age,gender, uid: user.user.uid
      })
    } catch (error) {
      setLoading(false);
      const errorMessage = error.message;
      setError(errorMessage);
    }
      
       
     
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Create account</Text>
        <Input
          style={{ marginTop: 15 }}
          placeholder="Email address"
          onTextChange={(text) => setEmail(text)}
        />
        <Input
          style={{ marginTop: 15 }}
          placeholder="Password"
          secureTextEntry={true}
          onTextChange={(text) => {
            setPassword(text);
          }}
        />
        <Input
          style={{ marginTop: 15 }}
          placeholder="Name"
          onTextChange={(text) => setName(text)}
        />
        <Input
          style={{ marginTop: 15 }}
          placeholder="Age"
          onTextChange={(text) => setAge(text)}
        />
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 25,
        }}
      >
        Select gender
      </Text>
      <View style={styles.container}>
        {genderOptions.map((option) => {
          let selected = option === gender;
          return (
            <Pressable
              key={option}
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
        <Button
          title={`Sign up`}
          loading={loading}
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => signupHandler(email, password)}
        />
        {error && (
          <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>
        )}
      </View>
      <View
        style={{
          alignItems: "flex-end",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Text styel={{ color: "grey", fontSize: 16 }}>
          Already have an account?{" "}
        </Text>
        <Pressable
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "#2C8A99", fontWeight: "bold", fontSize: 16 }}>
            Log In
          </Text>
        </Pressable>
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
