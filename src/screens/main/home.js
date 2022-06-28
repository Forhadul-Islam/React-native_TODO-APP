import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaView from "../../util/safeAreaView";
import { Octicons } from "@expo/vector-icons";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { DB } from "../../util/firebaseConfig";
import NoteItem from "../../components/noteItem";

export default function Home({ navigation, user }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const q = query(collection(DB, 'notes'), where("uid", "==", user.uid));
    const notesListenerSubscription = onSnapshot(q, (querySnapthot)=>{
      const list = [];
      querySnapthot.forEach((doc)=>{
        list.push({...doc.data(), id: doc.id});
      })
      setNotes(list);
      setLoading(false);
    })

    return notesListenerSubscription;
  }, []);
  console.log({notes});

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
      <ScrollView>
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
      </ScrollView>
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

