import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import { DB } from '../util/firebaseConfig';

export default function NoteItem({navigation, item}) {
  const deleteNote = async(id) =>{
    try {
      await deleteDoc(doc(DB, "notes", id));
    } catch (err) {
      console.log(err.message);
    }
}
  return (
    <View style={[styles.item, {backgroundColor: item.color}]}>
        <View style={styles.item_content}>
          <Text style={styles.item_title}>{item.title}</Text>
          <Text style={styles.item_description}>{item.description}</Text>
        </View>
        <View style={styles.item_action}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Update", {item})}
          >
            <Text style={styles.button_text}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{deleteNote(item.id)}}>
            <Text style={styles.button_text}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}



const styles = StyleSheet.create({
    item: {
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: "#900C3F",
      padding: 10,
      borderRadius: 8,
      minHeight: 150
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
      borderColor: "white",
      borderWidth: 2,
    },
    button_text: {
      fontWeight: "800",
    },
  });
  