import React from 'react';
import { ScrollView, Text } from 'react-native';
import Colors from '../../constants/Colors';
import MemberViewList from '../../components/member/MemberViewList';
import PaymentViewList from '../../components/payment/PaymentViewList';
import PlanViewList from '../../components/plan/PlanViewList';
import { dummyPaymentData } from '../../data/PaymentData';
import { dummyPlanData } from '../../data/PlanData';
import { dummyMemberData } from '../../data/MemberData';

const MemberScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.primaryBg,
        height: '100%',
      }}
    >
      <MemberViewList data={dummyMemberData} />
      <PaymentViewList data={dummyPaymentData} />
      <PlanViewList data={dummyPlanData} />

    </ScrollView>
  );
};

export default MemberScreen;