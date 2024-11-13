import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import Colors from '../../constants/Colors';

const CarouselItem = ({item}) =>{
  return(
    <View style={[styles.container, {backgroundColor:item.backgroundColor}]}>
      <Image style={[styles.card, {color:item.color}]} source={item.url}/>
      <View style={styles.textContainer}>
        <Text style={styles.valueText}>{item.value}</Text>
        <Text style={styles.titleText}>{item.title} </Text>
      </View>
    </View> 
  )
}

export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    width: windowWidth -20,
    height: windowHeight/4,
    margin: 10,
    shadowColor: Colors.black,
    shadowOffset: {width:0.5, height:5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 14,
    marginTop: 40
  },
  textContainer:{
    position: 'absolute',
    bottom: 10,
    margin: 5,
    left: 5,
  },
  titleText:{
    fontSize: 22,
    color: Colors.white,
    shadowColor: Colors.shadow,
    shadowOffset: {width:0.5, height:5},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 5,
    fontFamily:'outfit-bold',
  },
  valueText:{
    fontSize: 52,
    shadowColor: Colors.shadow,
    shadowOffset: {width:0.5, height:5},
    shadowOpacity: 1,
    shadowRadius: 3,
    color: Colors.white,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 15,
    fontFamily:'outfit-bold',
  },
  card:{
    width:90,
    height: 90,
    marginLeft: '70%',
    marginTop: '15%',
    shadowColor: Colors.shadow,
    shadowOffset: {width:0.5, height:5},
    shadowOpacity: 1,
    shadowRadius: 3,
    color: Colors.darkBlue
  }
});