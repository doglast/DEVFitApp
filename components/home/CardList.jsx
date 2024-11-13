import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CardItem from "./CardItem";

const CardList = ({data}) =>{
  if(data && data.length){
    return(
      <View >
        <FlatList                
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem = {({item}) => {
            return <CardItem item = {item}/>
          }}
          contentContainerStyle={styles.feedContentContainer}
        />       
      </View> 
    )
  }
}

export default CardList;

const styles = StyleSheet.create({
  feedContentContainer: {
    paddingBottom: 30,
    flexDirection: 'column-reverse',
  }
})