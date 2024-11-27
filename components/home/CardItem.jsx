import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { windowWidth, windowHeight } from '../../utils/Dimensions';
import Colors from '../../constants/Colors';

const CardItem = ({ item }) => {
  const navigation = useNavigation();

  if (!item) {
    return <Text>Loading...</Text>;
  }

  const handlePress = () => {
    navigation.navigate('Member', { memberId: item.id });
  };

  return (
    <View style={styles.feedItemContainer}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.feedItem}>
          <View style={styles.textContainer}>
            <Text style={styles.valueText}>{item.name}</Text>
            <Text style={styles.titleText}>CPF: {item.cpf} </Text>
            <Text style={styles.titleText}>E-mail: {item.email} </Text>
            <Text style={styles.titleText}>Telefone: {item.phone} </Text>
          </View>
        </View>
      </TouchableOpacity>
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