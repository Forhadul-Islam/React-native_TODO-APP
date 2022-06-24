import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SafeAreaView from "../../util/safeAreaView";
import Button from "../../components/common/button";
import Input from "../../components/common/input";

export default function Signin({navigation}) {
  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={require("../../../assets/image1.png")}
      />
      <Text
        style={{ textAlign: "center", marginBottom: 20, color: "#504745" }}
      >{`[We never let you to forget a single task]`}</Text>
      <View style={{marginHorizontal: 20}}>
        <Input placeholder="Emial Address" />
        <Input
          secureTextEntry
          placeholder="Password"
        />
      </View>
      <View style={styles.foot}>
        <Button
          title="Log In"
          style={{
            marginBottom: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Text styel={{ color: "grey" }}>
          Don't have an account?{" "}
          <Pressable style={{justifyContent: "center", alignItems: 'center'}} onPress={()=>{navigation.navigate("Signup")}}>
          <Text style={{ color: "#2C8A99", fontWeight: "bold" }}>Sign up</Text>
          </Pressable>
        </Text>
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
