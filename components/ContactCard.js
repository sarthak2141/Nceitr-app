import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ContactCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} 
        style={styles.logo}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>
          Ground Floor, Street No. 9, Blk - C, Janta Vihar, Village Mukandpur,
          North West Delhi, India - 110042
        </Text>
        <View style={styles.contactContainer}>
          <Icon name="call" size={20} color="#fff" />
          <Text style={styles.contactText}>1800 8890 842</Text>
        </View>
        <View style={styles.contactContainer}>
          <Icon name="mail" size={20} color="#fff" />
          <Text style={styles.contactText}>ncetirindia@gmail.com | info@ncetir.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#001F3F',
    padding: 30,
   
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 23,
    marginLeft:11
  },
  infoContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    color: '#fff',
    marginLeft: 10,
  },
});

export default ContactCard;
