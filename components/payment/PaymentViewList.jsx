import React from "react";
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import PaymentViewItem from "./PaymentViewItem";
import Colors from './../../constants/Colors';
import { windowHeight, windowWidth } from './../../utils/Dimensions';
import { useNavigation } from "@react-navigation/native";

const PaymentViewList = ({ data, member }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("PaymentCreate", { memberId: member.id });
  };

  if (data && data.length) {
    return (
      <View>
        <View style={styles.listContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.titleText}>Pagamentos</Text>
            <Image
              source={require('./../../assets/icons/cash_icon.png')}
              resizeMode="cover"
              style={styles.headerIcon}
            />
            <TouchableOpacity  onPress={handlePress}>
              <Image
                source={require('./../../assets/icons/add_icon.png')}
                resizeMode="cover"
                style={styles.newItemIcon}
              />
            </TouchableOpacity>
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
  
  // Display a message if there's no data
  return (
    <View style={styles.listContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.titleText}>Pagamentos</Text>
        <Image
          source={require('./../../assets/icons/cash_icon.png')}
          resizeMode="cover"
          style={styles.headerIcon}
        />
        <TouchableOpacity  onPress={handlePress}>
          <Image
            source={require('./../../assets/icons/add_icon.png')}
            resizeMode="cover"
            style={styles.newItemIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.emptyText,{marginTop:12}]}>
        Nenhum Pagamento registrado para esse aluno.
      </Text>
      <Text style={[styles.emptyText,{marginBottom:12}]}> 
        Clique no ícone de + para criar um novo pagamento.
      </Text>
    </View>
  );
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
  headerIcon: {
    width:45,
    height: 45
  },
  titleText: {
    fontSize: 16,
    color: Colors.greenBg,
    paddingTop: 12,
    marginHorizontal:10,
    fontFamily: 'outfit-bold',
  },
  newItemIcon: {
    width:35,
    height: 35,
    marginLeft: windowWidth * 0.42,
    marginTop:windowHeight * 0.01
  },
  emptyText:{
    fontSize: 14,
    color: Colors.black,
    fontFamily: 'outfit-bold',
    marginLeft:10,
  }
});