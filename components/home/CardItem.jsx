import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import Colors from '../../constants/Colors';
import { Link } from "expo-router";

const CardItem = ({ item }) => {
  if (!item) {
    return <Text>Loading...</Text>;
  }

  console.log("Rendering item with id:", item.id);

  return (
    <View style={styles.feedItemContainer}>
      <Link href={'/member'}>
        <View style={styles.feedItem}>
          <View style={styles.textContainer}>
            <Text style={styles.valueText}>{item.name}</Text>
            <Text style={styles.titleText}>CPF: {item.cpf} </Text>
            <Text style={styles.titleText}>E-mail: {item.email} </Text>
            <Text style={styles.titleText}>Telefone: {item.phone} </Text>
          </View>
        </View>      
      </Link>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  feedItemContainer: {
    width: windowWidth -20,
    margin: 10
  },
  feedItem: {
    width: '100%',
    height: windowHeight*0.15,
    borderRadius: windowHeight*0.02,
    backgroundColor:Colors.data,
    borderColor:Colors.black,
    borderWidth:'1%'
  },  
  titleText:{
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5,
    fontFamily:'outfit-bold',
  },
  valueText:{
    fontSize: 22,
    color: Colors.white,
    marginBottom: 10,
    fontFamily:'outfit-bold',
  },
  textContainer:{
    paddingLeft: 20,
    paddingTop:10
  }
});