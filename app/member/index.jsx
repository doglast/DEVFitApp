import React, { useState, useEffect } from 'react';
import { 
  ScrollView, 
  Text, View,
  StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../constants/Colors';
import { windowHeight, windowWidth } from '@/utils/Dimensions';
import MemberViewItem from '@/components/member/MemberViewItem';
import PaymentViewList from '../../components/payment/PaymentViewList';
import PlanViewList from '../../components/plan/PlanViewList';

const MemberScreen = ({ route }) => {
  const { memberId } = route.params;
  const [memberData, setMemberData] = useState(null);
  const [paymentData, setPaymentData] = useState(null); 
  const [planData, setPlanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {

    const fetchMemberData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          console.error('Nenhum token foi encontrado');
          return;
        }

        const memberResponse = 
          await fetch(`https://www.rodrigozambon.com.br/devfitness/api/members/${memberId}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
        });

        if (memberResponse.ok) {
          const memberData = await memberResponse.json();
          setMemberData(memberData.member);
        } else {
          console.error('Falha ao recuperar os dados do membro:', memberResponse.status);
        }
      } catch (error) {
        console.error('Erro ao consultar os dados:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchPaymentData = async () => {
      try {
        
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          console.error('Nenhum token foi encontrado');
          return;
        }

        const paymentResponse = 
          await fetch(`https://www.rodrigozambon.com.br/devfitness/api/payments/${memberId}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
        });

        if (paymentResponse.ok) {
          const paymentData = await paymentResponse.json();
          setPaymentData(paymentData);
        } else {
          console.error('Falha ao recuperar os dados de pagamento:', paymentResponse.status);
        }
      } catch (error) {
        console.error('Erro ao consultar os dados:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchPlanData = async () => {
      try {
        
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          console.error('Nenhum token foi encontrado');
          return;
        }

        const planResponse = 
          await fetch(`https://www.rodrigozambon.com.br/devfitness/api/plans/${memberId}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
        });

        if (planResponse.ok) {
          const planData = await planResponse.json();
          setPlanData(planData);
        } else {
          console.error('Falha ao recuperar os dados dos planos:', planResponse.status);
        }
      } catch (error) {
        console.error('Erro ao consultar os dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMemberData();
    fetchPaymentData();
    fetchPlanData();
  }, [memberId]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/left_arrow_icon.png')}
          />
        </TouchableOpacity>
      </View>

      <MemberViewItem item={memberData} />
      <PaymentViewList data={paymentData} /> 
      <PlanViewList data={planData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBg,
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
  },
});

export default MemberScreen;