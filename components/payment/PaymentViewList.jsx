import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import PaymentViewItem from "./PaymentViewItem";
import Colors from './../../constants/Colors';
import { windowHeight, windowWidth } from './../../utils/Dimensions';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PaymentViewList = ({ data, member }) => {
  const navigation = useNavigation();
  const [payments, setPayments] = useState(data);

  const handlePress = () => {
    navigation.navigate("PaymentCreate", { memberId: member.id });
  };

  // Função para recarregar a lista após exclusão de um item
  const handleDeleteSuccess = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        console.error('Nenhum token foi encontrado');
        return;
      }

      const response = await fetch(`https://www.rodrigozambon.com.br/devfitness/api/payments/${member.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPayments(data);  // Atualiza o estado com os dados mais recentes
      } else {
        console.error('Falha ao recuperar os pagamentos');
      }
    } catch (error) {
      console.error('Erro ao carregar pagamentos', error);
    }
  };

  if (payments && payments.length) {
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
            <TouchableOpacity onPress={handlePress}>
              <Image
                source={require('./../../assets/icons/add_icon.png')}
                resizeMode="cover"
                style={styles.newItemIcon}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={payments}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => {
              return <PaymentViewItem item={item} onDeleteSuccess={handleDeleteSuccess} />;
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
        <TouchableOpacity onPress={handlePress}>
          <Image
            source={require('./../../assets/icons/add_icon.png')}
            resizeMode="cover"
            style={styles.newItemIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.emptyText, { marginTop: 12 }]}>
        Nenhum Pagamento registrado para esse aluno.
      </Text>
      <Text style={[styles.emptyText, { marginBottom: 12 }]}>
        Clique no ícone de + para criar um novo pagamento.
      </Text>
    </View>
  );
};

export default PaymentViewList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: windowHeight * 0.02,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
  },
  feedContentContainer: {
    paddingBottom: 5,
    flexDirection: 'column-reverse',
  },
  sectionHeader: {
    flexDirection: 'row',
  },
  headerIcon: {
    width: 45,
    height: 45,
  },
  titleText: {
    fontSize: 16,
    color: Colors.greenBg,
    paddingTop: 12,
    marginHorizontal: 10,
    fontFamily: 'outfit-bold',
  },
  newItemIcon: {
    width: 35,
    height: 35,
    marginLeft: windowWidth * 0.42,
    marginTop: windowHeight * 0.01,
  },
  emptyText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: 'outfit-bold',
    marginLeft: 10,
  },
});
