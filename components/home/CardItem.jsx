import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import { Link } from "expo-router";
import Colors from '../../constants/Colors';

const CardItem = ({ item }) => {
  if (!item) {
    return <Text>Loading...</Text>;
  }

  console.log("Rendering item with id:", item.id);

  return (
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItem}>
        <View style={styles.textContainer}>
          <Text style={styles.valueText}>{item.name}</Text>
          <Text style={styles.titleText}>CPF: {item.cpf} </Text>
          <Text style={styles.titleText}>E-mail: {item.email} </Text>
          <Text style={styles.titleText}>Telefone: {item.phone} </Text>
        </View>
      </View>
      <View style={styles.feedItemFooter}>
        {/* Botão tela de Membro */}
        <TouchableOpacity
          style={[
            styles.footerItem,
            {
              backgroundColor: Colors.primary,
              borderBottomLeftRadius: windowHeight * 0.02,
            },
          ]}
        >
          <Link style={styles.link} href={'/member'}>
            <Image
              source={require('./../../assets/icons/user_icon.png')}
              resizeMode="cover"
              style={{ width: 35, height: 35 }}
            />
          </Link>
        </TouchableOpacity>
        {/* Botão tela de Planos */}
        <TouchableOpacity
          style={[
            styles.footerItem,
            { backgroundColor: Colors.warning },
          ]}
        >
          <Image
            source={require('./../../assets/icons/plans_icon.png')}
            resizeMode="cover"
            style={styles.postButtonIcon}
          />
        </TouchableOpacity>

        {/* Botão tela de Pagamentos */}
        <TouchableOpacity
          style={[
            styles.footerItem,
            {
              backgroundColor: Colors.cash,
              borderBottomRightRadius: windowHeight * 0.02,
            },
          ]}
        >
          <Image
            source={require('./../../assets/icons/cash_icon.png')}
            resizeMode="cover"
            style={styles.postButtonIcon}
          />
        </TouchableOpacity>
      </View>
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
    borderTopRightRadius: windowHeight*0.02,
    borderTopLeftRadius: windowHeight*0.02,
    backgroundColor:Colors.white,
    borderColor:Colors.black,
    borderWidth:'1%'
  },
  feedItemFooter:{
    flexDirection:'row'
  },
  footerItem:{
    bottom: 0,
    height: windowHeight*0.07,
    width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postButtonIcon: {
    width:45,
    height: 45
  },
  titleText:{
    fontSize: 16,
    color: Colors.black,
    marginBottom: 5,
    fontFamily:'outfit-bold',
  },
  valueText:{
    fontSize: 22,
    color: Colors.black,
    marginBottom: 10,
    fontFamily:'outfit-bold',
  },
  textContainer:{
    paddingLeft: 20,
    paddingTop:10
  }
});