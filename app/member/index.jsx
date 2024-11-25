import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import Colors from '../../constants/Colors';
import MemberViewList from '../../components/member/MemberViewList';
import PaymentViewList from '../../components/payment/PaymentViewList';
import PlanViewList from '../../components/plan/PlanViewList';
import { dummyPaymentData } from '../../data/PaymentData';
import { dummyPlanData } from '../../data/PlanData';
import { dummyMemberData } from '../../data/MemberData';
import { Link } from 'expo-router';

const MemberScreen = () => {
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity>
          <Link style= {styles.icon} href={'/homepage'}>
            <Image
              source={require('../../assets/icons/left_arrow_icon.png')}
            />
          </Link>
        </TouchableOpacity>
        <Text style= {styles.headerText}>{dummyMemberData[0].name}</Text>
      </View>

      <MemberViewList data={dummyMemberData} />
      <PaymentViewList data={dummyPaymentData} />
      <PlanViewList data={dummyPlanData} />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.primaryBg,
    height: '100%',
  },
  header: {
    height: windowHeight*0.1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    flexDirection:'row'
  },
  icon: {
    marginTop: windowHeight*0.05,
    marginLeft:windowWidth*0.03,
    width: 35,
    height: 35,
  },
  headerText: {
    fontSize: 20,
    color: Colors.white,
    marginTop:windowHeight*0.05,
    marginLeft:windowWidth*0.2,
    fontFamily: 'outfit-bold',
  }
});

export default MemberScreen;