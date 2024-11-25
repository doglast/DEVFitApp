import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import PaymentViewItem from "./PaymentViewItem";
import Colors from './../../constants/Colors';
import { windowHeight } from './../../utils/Dimensions';

const PaymentViewList = ({ data }) => {
  if (data && data.length) {
    return (
      <View >
        <View style={styles.listContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.titleText} >Pagamentos</Text>
            <Image
              source={require('./../../assets/icons/cash_icon.png')}
              resizeMode="cover"
              style={styles.postButtonIcon}
              />
          </View>
          <FlatList
            data={data}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => {
              return <PaymentViewItem item={item} />;
            }}
            contentContainerStyle={styles.feedContentContainer}
            />
        </View>
      </View>
    );
  }
  return null; // Return null if there's no data to render
};

export default PaymentViewList;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column'
  },
  listContainer: {
    flex:1,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: windowHeight * 0.02,
    backgroundColor: Colors.greenBg,
    borderColor: Colors.black,
    borderWidth: '1%'
  },
  feedContentContainer: {
    paddingBottom: 5,
  },
  sectionHeader:{
    flexDirection:'row',
  },
  postButtonIcon: {
    width:45,
    height: 45
  },
  titleText: {
    fontSize: 16,
    color: Colors.white,
    paddingTop: 12,
    marginHorizontal:10,
    fontFamily: 'outfit-bold',
  }
});