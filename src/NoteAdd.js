import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {firebase} from "../config"
import { Keyboard } from 'react-native';

const NoteAdd = () => {
  const [title,setTitle]=useState('');
  const [note,setNote]=useState("");

  const handleAdd=()=>{
    firebase.firestore()
    .collection('Notes')
    .add({
      title, note,
    })
    .then(()=>{
      setTitle('')
      setNote("")
      Keyboard.dismiss();// dismiss the keyboard
    })
    .catch((error)=>{
      alert(error)
    })
  }
  return (
    <View style={styles.container}>
      <TextInput
      placeholder="Title"
      value={title}
      onChangeText={(text)=>setTitle(text)}
      style={styles.inputTitle}
      />

<TextInput
      placeholder="Note "
      value={note}
      onChangeText={(text)=>setNote(text)}
      style={styles.inputNote}
      multiline={true}
      />

      <TouchableOpacity
      style={styles.button}
      onPress={handleAdd}
      >
        <Text style={styles.buttonText}>
          Add
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default NoteAdd

const styles=StyleSheet.create({
  container:{
    flex: 1,
  alignItems: 'center',
  backgroundColor: '#f4f4f4'
  },
  inputTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    width: '97%',
    borderBottomWidth: 1/2,
    borderLeftWidth: 1/2,
    padding: 10,
  },
  inputNote:{
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    height: 200,
    width: '97%',
    borderBottomWidth: 1/2,
    borderLeftWidth: 1/2,
    padding: 10,
  },
  button:{
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginTop: 20,
    height: 55,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
    shadowColor: 'blue'
  },
  buttonText:{
    color: 'white',
    fontSize:22,
    fontWeight: 'bold'
  }
})