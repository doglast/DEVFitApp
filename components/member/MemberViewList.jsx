import React from "react";
import { View, FlatList } from "react-native";
import MemberViewItem from "./MemberViewItem";

const MemberViewList = ({ data }) => {
  if (data && data.length) {
    return (
      <View >
        <FlatList
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => {
            return <MemberViewItem item={item} />;
          }}
          />
      </View>
    );
  }
  return null; // Return null if there's no data to render
};

export default MemberViewList;