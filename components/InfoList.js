import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const buttons = [
  {
    title: "LATEST CIRCULAR",
    backgroundColor: '#a6c3ef',
    icon: "announcement", // Material Icons name
  },
  {
    title: "EXAMINATION",
    backgroundColor: '#a6c3ef',
    icon: "assignment", // Material Icons name
  },
  {
    title: "CURRICULUM",
    backgroundColor: '#a6c3ef',
    icon: "book", // Material Icons name
  },
  {
    title: "NOTICE",
    backgroundColor: '#a6c3ef',
    icon: "notifications", // Material Icons name
  },
];

const Button = ({ title, backgroundColor, icon }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor }]}>
    <Icon name={icon} size={34} color="#fff" style={styles.icon} />
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const InfoList = () => (
  <View style={{  marginVertical:10 }}>
    <View style={{ flexDirection: "row" }}>
      <Text style={{ fontSize: 22, fontWeight: "500", marginHorizontal: 6 }}>
        Latest Updates
      </Text>
      <Image source={require('../assets/images/updateImg.png')} style={{ width: 30, height: 34, marginTop: 4 }} />
    </View>
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <Button key={index} title={button.title} backgroundColor={button.backgroundColor} icon={button.icon} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20,
    bottom: 20
  },
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%', // Adjust as needed for grid layout
    height: 100, // Adjust as needed for grid layout
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 4,
  },
  icon: {
    marginBottom: 10,
  },
});

export default InfoList;
