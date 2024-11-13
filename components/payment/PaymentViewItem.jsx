import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

        </View>
      </View>                                
    </View>
  )
};


const styles = StyleSheet.create({
  feedItemContainer: {
    width: windowWidth -30,
    marginHorizontal:4,
    marginVertical:2
  },
  feedItem: {
    width: '100%',
    height: windowHeight*0.11,
    borderRadius: windowHeight*0.02,
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
  }
});

export default PaymentViewItem;