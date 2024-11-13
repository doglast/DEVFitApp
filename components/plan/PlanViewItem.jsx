import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import Colors from '../../constants/Colors';

const PlanViewItem =({item})=>{
  const planTypeColors = {
    silver: Colors.silver,
    gold: Colors.gold,
    black: Colors.black
  };

  const planColor = planTypeColors[item.plan_type] || Colors.gray;

  return (
    <View style={styles.feedItemContainer}>
      <View style={styles.feedItem}>
        <View style={styles.textContainer}>
          <Text style={[styles.planText, { backgroundColor: planColor }]}>
            {item.plan_type}
          </Text>
          <Text style={styles.titleText}>
            Inicio: {item.start_date}
          </Text>
          <Text style={styles.titleText}>
            Fim: {item.end_date}
          </Text>
          <Text
            style={item.status === "active" ? styles.ativoText : styles.inativoText}
          >
            {item.status === "active" ? ' Ativo' : ' Inativo'}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default PlanViewItem;

const styles = StyleSheet.create({
  feedItemContainer: {
    width: windowWidth - 30,
    marginHorizontal: 4,
    marginVertical: 2,
  },
  feedItem: {
    width: '100%',
    height: windowHeight * 0.14,
    borderRadius: windowHeight * 0.02,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: '1%',
  },
  textContainer: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  planText: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5,
    fontFamily: 'outfit-bold',
    paddingHorizontal: 5,
    borderRadius: 5,
    width: 50
  },
  titleText: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 5,
    fontFamily: 'outfit-bold',
  },
  ativoText: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5,
    fontFamily: 'outfit-bold',
    backgroundColor: Colors.cash,
    width: 45,
  },
  inativoText: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5,
    fontFamily: 'outfit-bold',
    backgroundColor: Colors.danger,
    width: 60,
  },
});