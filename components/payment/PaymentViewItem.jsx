import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from './../../utils/Dimensions';
import Colors from './../../constants/Colors';
import { Link } from "expo-router";

const PaymentViewItem = ({ item }) => {
  return(            
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItem}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            Pagamento referente à: {item.date} 
          </Text>
          <Text style={styles.titleText}>
            Método de pagamento: {item.payment_method} 
          </Text>
          <Text 
            style={item.status === "1" ? styles.pagoText : styles.pendenteText}
          >
            {item.status === "1" ? ' Pago' : ' Pendente'}
          </Text>
        </View>
        <View style={styles.feedItemFooter}>
        {/* Botão tela de Membro */}
        <TouchableOpacity
          style={[
            styles.footerItem,
            {
              backgroundColor: Colors.gold,
              borderBottomLeftRadius: windowHeight * 0.02,
            },
          ]}
        >
          <Link style={styles.link} href={'/payment/edit'}>
            <Image
              source={require('./../../assets/icons/edit_icon.png')}
              resizeMode="cover"
              style={styles.postButtonIcon}
            />
          </Link>
        </TouchableOpacity>

        {/* Botão tela de Pagamentos */}
        <TouchableOpacity
          style={[
            styles.footerItem,
            {
              backgroundColor: Colors.danger,
              borderBottomRightRadius: windowHeight * 0.02,
            },
          ]}
        >
          <Image
            source={require('./../../assets/icons/delete_icon.png')}
            resizeMode="cover"
            style={styles.postButtonIcon}
          />
        </TouchableOpacity>
      </View>
      </View>                                
    </View>
  )
};


const styles = StyleSheet.create({
  feedItemContainer: {
    width: windowWidth -30,
    marginHorizontal:4,
    marginVertical:2,
    marginBottom:windowHeight*0.04,
  },
  feedItem: {
    width: '100%',
    height: windowHeight*0.11,
    borderTopRightRadius: windowHeight*0.02,
    borderTopLeftRadius: windowHeight*0.02,
    backgroundColor:Colors.white,
    borderColor:Colors.black,
    borderWidth:'1%'
  },
  titleText:{
    fontSize: 16,
    color: Colors.black,
    marginBottom: 5,
    fontFamily:'outfit-bold',
  },
  pagoText:{
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5,
    fontFamily:'outfit-bold',
    backgroundColor:Colors.cash,
    width:45
  },
  pendenteText:{
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5,
    fontFamily:'outfit-bold',
    backgroundColor:Colors.danger,
    width:75
  },
  textContainer:{
    paddingLeft: 20,
    paddingTop:10
  },
  feedItemFooter:{
    flexDirection:'row'
  },
  footerItem:{
    bottom: 0,
    height: windowHeight*0.04,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postButtonIcon: {
    width:32,
    height: 32
  }
});

export default PaymentViewItem;