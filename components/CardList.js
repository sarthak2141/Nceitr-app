import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const cards = [
  {
    title: "Aeronautics",
    description: "Aeronautics",
    image: require('../assets/images/Aeronautics.png'),
  },
  {
    title: "Automobile",
    description: "Automobile",
    image: require('../assets/images/Automobile.png'),
  },
  {
    title: "Agriculture",
    description: "Department of Agriculture",
    image: require('../assets/images/Agriculture.png'),
  },
  {
    title: "Beauty",
    description: "Department of Wellness",
    image: require('../assets/images/Beauty.png'),
  },
  {
    title: "Banking",
    description: "Department of Banking",
    image: require('../assets/images/Banking.png'),
  },
];

const Card = ({ title, description, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{title}</Text>
   
    <TouchableOpacity style={styles.cardButton}>
      <Text style={styles.cardButtonText}>More Info.</Text>
    </TouchableOpacity>
  </View>
);

const CardList = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
    {cards.map((card, index) => (
      <Card key={index} title={card.title} description={card.description} image={card.image} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  card: {
    backgroundColor: '#a6c3ef',
    borderRadius: 10,
    overflow: 'hidden',
    width: 200,
    marginHorizontal: 10,
  },
  cardImage: {
    width: '100%',
    height: 130,
    paddingTop:15,
    paddingBottom:12,
    paddingHorizontal:10,
  },
  cardTitle: {
    color: '#ededed',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2,
  },
  cardDescription: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 2,
  },
  cardButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtonText: {
    color: '#ededed',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardList;
