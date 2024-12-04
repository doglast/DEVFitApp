import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { windowHeight, windowWidth } from './../../utils/Dimensions';
import Colors from './../../constants/Colors';

const PaymentViewItem = ({ item }) => {
  const navigation = useNavigation();

  const handleEditPress = () => {
    navigation.navigate('PaymentEdit', { paymentId: item.id });
  };

  const handleDeletePress = () => {
    Alert.alert(
      'Confirme escolha',
      'Tem certeza que quer apagar esse plano?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            try {
              const token = await AsyncStorage.getItem('userToken');
              if (!token) {
                console.error('Nenhum token foi encontrado');
                return;
              }

              const response = await fetch(`https://www.rodrigozambon.com.br/devfitness/api/plans/${item.id}`, {
                method: 'DELETE',
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              });

              if (response.ok) {
                console.log('Plano deletado com sucesso');
                // Optionally, refresh the list or update the state
              } else {
                console.error('Falha ao deletar o plano:', response.status);
              }
            } catch (error) {
              console.error('Erro a deletar o plano:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItem}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            Pagamento referente à: {item.date}
          </Text>
          <Text style={styles.titleText}>
            Método de pagamento: {item.payment_method}
          </Text>
          <Text style={item.status === "1" ? styles.pagoText : styles.pendenteText}>
            {item.status === "1" ? ' Pago' : ' Pendente'}
          </Text>
          <View style={styles.feedItemFooter}>
            <TouchableOpacity style={styles.footerItem} onPress={handleEditPress}>
              <Image
                source={require('./../../assets/icons/edit_icon.png')}
                resizeMode="cover"
                style={styles.postButtonIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem} onPress={handleDeletePress}>
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
  );
};

const styles = StyleSheet.create({
  feedItemContainer: {
    width: windowWidth - 30,
    marginHorizontal: windowHeight * 0.005,
    marginVertical: windowHeight * 0.01,
    marginBottom: windowHeight * 0.01,
  },
  feedItem: {
    width: '95%',
    marginLeft: windowHeight * 0.01,
    height: windowHeight * 0.15,
    borderRadius: windowHeight * 0.02,
    backgroundColor: Colors.white,
    borderLeftColor: Colors.black,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 5,
    fontFamily: 'outfit-bold',
  },
  pagoText: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5,
    fontFamily: 'outfit-bold',
    backgroundColor: Colors.cash,
    width: 45,
  },
  pendenteText: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5,
    fontFamily: 'outfit-bold',
    backgroundColor: Colors.danger,
    width: 75,
  },
  textContainer: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  feedItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerItem: {
    backgroundColor: Colors.white,
  },
  postButtonIcon: {
    width: 32,
    height: 32,
  },
});

export default PaymentViewItem;