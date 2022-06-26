import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import Input from "../../components/common/input";
import RadioButton from "../../components/common/radioButton";
import Button from "../../components/common/button";
import { DB } from "../../util/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function Create({ navigation, user, route }) {
  const [color, setColor] = useState("skyblue");
  const [colorList] = useState(["purple", "cyan", "skyblue", "pink"]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const item = route.params.item;
  const createTodo = async () => {
    setLoading(true);
    try {
      await addDoc(collection(DB, "notes"), {
        title,
        description,
        color,
        uid: user.uid,
      });
      navigation.navigate("Home");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
      <Input placeholder="Title" onTextChange={(text) => setTitle(text)} value={item.title} />
      <Input
        placeholder="Description"
        multiline={true}
        onTextChange={(text) => setDescription(text)}
        value={item.description}
      />
      <Text style={{ fontSize: 16, marginVertical: 15 }}>
        Select your color
      </Text>
      <RadioButton state={color} setOption={setColor} options={colorList} />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Submit"
          onPress={createTodo}
          style={{
            width: 300,
            alignSelf: "center",
            marginTop: 50,
            paddingTop: 5,
          }}
        />
      )}
    </View>
  );
}
