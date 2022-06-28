import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import Input from "../../components/common/input";
import RadioButton from "../../components/common/radioButton";
import Button from "../../components/common/button";
import { DB } from "../../util/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export default function Create({ navigation, user, route }) {
  const item = route.params.item;
  const [colorList] = useState(["purple", "cyan", "skyblue", "pink"]);
  const [color, setColor] = useState(item.color);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const updateTodo = async () => {
    setLoading(true);
    try {
      const updateRef = doc(DB, "notes", item.id);
      await updateDoc(updateRef, {
        title,
        description,
        color,
      });
      navigation.navigate("Home");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }
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
          onPress={updateTodo}
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
