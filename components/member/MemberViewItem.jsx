import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import Colors from '../../constants/Colors';
const MemberViewItem = ({ item }) => {

  function formatDate(isoDateString) {
    if (!isoDateString) return 'N/A';
    const date = new Date(isoDateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function convertBirthDate(dateString) {
    if (!dateString) return 'N/A';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  if (!item) {
    return (
      <View style={styles.feedItemContainer}>
        <View style={styles.feedItem}>
        <View style={styles.textContainer}>
          <Text style={styles.valueText}>Nenhum registro encontrado</Text>          
        </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItem}>
        <View style={styles.textContainer}>
          <Text style={styles.valueText}>{item.name || 'N/A'}</Text>
          <Text style={styles.titleText}>CPF: {item.cpf || 'N/A'}</Text>
          <Text style={styles.titleText}>E-mail: {item.email || 'N/A'}</Text>
          <Text style={styles.titleText}>Telefone: {item.phone || 'N/A'}</Text>
          <Text style={styles.titleText}>
            Data de Nascimento: {convertBirthDate(item.date_of_birth) || 'N/A'}
          </Text>
          <Text style={styles.titleText}>Gênero: {item.gender || 'N/A'}</Text>
          <Text style={styles.titleText}>
            Data de Criação: {formatDate(item.created_at) || 'N/A'}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  feedItemContainer: {
    width: windowWidth - 20,
    margin: 10
  },
  feedItem: {
    width: '100%',
    height: windowHeight * 0.24,
    borderRadius: windowHeight * 0.02,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1
  },
  titleText: {
    fontSize: 15,
    color: Colors.black,
    marginBottom: 5,
    fontFamily: 'outfit-bold',
  },
  valueText: {
    fontSize: 20,
    color: Colors.black,
    marginBottom: 10,
    fontFamily: 'outfit-bold',
  },
  textContainer: {
    paddingLeft: 12,
    paddingTop: 10
  }
});

export default MemberViewItem;