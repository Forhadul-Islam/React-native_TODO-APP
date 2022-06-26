import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaView from "../../util/safeAreaView";
import { Octicons } from "@expo/vector-icons";
import { collection, query, getDocs, where } from "firebase/firestore";
import { DB } from "../../util/firebaseConfig";
import NoteItem from "../../components/noteItem";

export default function Home({ navigation, user }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const list = [];
    async function fetchData() {
      try {
        const q = await query(
          collection(DB, "notes"),
          where("uid", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setNotes(list);
      } catch (err) {
        console.log(err);
      }
    }
    setNotes(list);
    setLoading(false);
    return fetchData;
  }, []);
  console.log(notes);
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#073B71" }}>
          Your Notes
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Create");
          }}
        >
          <Octicons name="diff-added" size={35} color="#DCA410" />
        </TouchableOpacity>
      </View>
      {loading ? (
        <View
          style={{ flex: 1, height: 500, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color="blue" size="large" />
        </View>
      ) : (
        notes?.map((note) => (
          <NoteItem key={note.id} navigation={navigation} item={note} />
        ))
      )}
      {/* <View style={styles.item}>
        <View style={styles.item_content}>
          <Text style={styles.item_title}>Title</Text>
          <Text style={styles.item_description}>Description</Text>
        </View>
        <View style={styles.item_action}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Update")}
          >
            <Text style={styles.button_text}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#900C3F",
    padding: 10,
    borderRadius: 8,
    height: 500,
  },
  item_title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
  },
  item_description: {
    color: "white",
    fontSize: 16,
  },
  item_action: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 5,
    flexDirection: "row",
  },
  button: {
    height: 30,
    width: 80,
    marginHorizontal: 8,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 2,
  },
  button_text: {
    fontWeight: "800",
  },
});
