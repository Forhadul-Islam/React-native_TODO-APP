import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import SafeAreaView from "../../util/safeAreaView";
import Button from "../../components/common/button";
import Input from "../../components/common/input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../util/firebaseConfig";

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(Auth, email, password);
      setLoading(false)
    } catch (err) {
      setLoading(false);
      const errorMessage = err.message;
      setError(errorMessage);
    }
  };

  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={require("../../../assets/image1.png")}
      />
      <Text
        style={{ textAlign: "center", marginBottom: 25, color: "#504745" }}
      >{`[We never let you to forget a single task]`}</Text>
      <View style={{ marginHorizontal: 20 }}>
        <Input onPress={(text)=>setEmail(text)} placeholder="Emial Address" />
        <Input onPress={(text)=>setPassword(text)} secureTextEntry placeholder="Password" />
      </View>
      <View style={styles.foot}>
        <Button
          title="Log In"
          onPress={()=>{loginHandler(email, password)}}
          style={{
            marginBottom: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        {error && <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>}
        <View style={{ flexDirection: "row" }}>
          <Text styel={{ color: "grey" }}>Don't have an account? </Text>
          <Pressable
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text
              style={{ color: "#2C8A99", fontWeight: "bold", fontSize: 15 }}
            >
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 400,
    alignSelf: "center",
    resizeMode: "center",
  },
  input: {
    marginHorizontal: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 25,
    fontSize: 18,
  },
  foot: {
    justifyContent: "flex-end",
    marginBottom: 20,
    alignItems: "center",
    marginTop: 120,
  },
  button: {
    backgroundColor: "orange",
    height: 40,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginBottom: 80,
  },
  button_text: {
    alignSelf: "center",
    fontWeight: "900",
    fontSize: 19,
    color: "black",
  },
});
