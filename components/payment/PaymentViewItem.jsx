import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from './../../utils/Dimensions';
import Colors from './../../constants/Colors';
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
          <View style={styles.feedItemFooter}>
            <TouchableOpacity style={styles.footerItem}>
              <Image
                source={require('./../../assets/icons/edit_icon.png')}
                resizeMode="cover"
                style={styles.postButtonIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
              <Image
                source={require('./../../assets/icons/delete_icon.png')}
                resizeMode="cover"
                style={styles.postButtonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>                                
    </View>
  )
};


const styles = StyleSheet.create({
  feedItemContainer: {
    width: windowWidth -30,
    marginHorizontal:windowHeight*0.005,
    marginVertical:windowHeight*0.01,
    marginBottom:windowHeight*0.01,
  },
  feedItem: {
    width: '95%',
    marginLeft:windowHeight*0.01 ,
    height: windowHeight*0.15,
    borderRadius: windowHeight*0.02,
    backgroundColor:Colors.white,
    borderLeftColor:Colors.black,
    borderWidth:1
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
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  footerItem:{
    backgroundColor: Colors.white
  },
  postButtonIcon: {
    width:32,
    height: 32
  }
});

export default PaymentViewItem;