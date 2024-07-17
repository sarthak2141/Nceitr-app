import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

const ChoseProgram = () => {
  return (
    
      <View style={styles.container}>
        <Text style={styles.header}>CHOOSE PROGRAM</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Program</Text>
          <TextInput style={styles.input} placeholder="-Program-" placeholderTextColor="#888" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Program Type</Text>
          <TextInput style={styles.input} placeholder="-Program Type-" placeholderTextColor="#888" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Qualification</Text>
          <TextInput style={styles.input} placeholder="-Qualification-" placeholderTextColor="#888" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Duration</Text>
          <TextInput style={styles.input} placeholder="-Duration-" placeholderTextColor="#888" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Course</Text>
          <TextInput style={styles.input} placeholder="-Course-" placeholderTextColor="#888" />
        </View>
        <View style={styles.submitContainer}>
            <TouchableOpacity style={{backgroundColor:"#00c6ff", paddingVertical:8,paddingHorizontal:27,borderRadius:20}}>
                <Text style={{fontSize:20,color:'white',fontWeight:"500"}} >
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
      </View>
   
  );
};

const styles = StyleSheet.create({
  
  container: {
    padding: 17,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginVertical:8 ,
    borderRadius: 10,
    bottom:32,
    
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFD700',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  submitContainer:{
    justifyContent:'center',
    alignItems:'center'

  }
});

export default ChoseProgram;