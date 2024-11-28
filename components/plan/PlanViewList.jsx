import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import PlanViewItem from "./PlanViewItem";
import Colors from '../../constants/Colors';
import { windowHeight } from '../../utils/Dimensions';

const PlanViewList = ({ data }) => {
  if (data && data.length) {
    return (
      <View >
        <View style={styles.listContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.titleText} >Planos</Text>
            <Image
              source={require('./../../assets/icons/plans_icon.png')}
              resizeMode="cover"
              style={styles.postButtonIcon}
              />
          </View>
          <FlatList
            data={data}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => {
              return <PlanViewItem item={item} />;
            }}
            contentContainerStyle={styles.feedContentContainer}
            />
        </View>
      </View>
    );
  }
  return null; // Return null if there's no data to render
};

export default PlanViewList;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column'
  },
  listContainer: {
    flex:1,
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: windowHeight * 0.02,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1
  },
  feedContentContainer: {
    paddingBottom: 5,
  },
  sectionHeader:{
    flexDirection:'row',
  },
  postButtonIcon: {
    width:50,
    height: 50
  },
  titleText: {
    fontSize: 16,
    color: Colors.gold,
    paddingTop: 12,
    marginHorizontal:10,
    fontFamily: 'outfit-bold',
  }
});