import React, { useState, useEffect } from 'react';
import { 
  ScrollView, 
  Text, View,
  StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';
import PaymentViewList from '../../components/payment/PaymentViewList';
import PlanViewList from '../../components/plan/PlanViewList';
import { dummyPaymentData } from '../../data/PaymentData';
import { dummyPlanData } from '../../data/PlanData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MemberViewItem from '@/components/member/MemberViewItem';
import { windowHeight, windowWidth } from '@/utils/Dimensions';

const MemberScreen = ({ route }) => {
  const { memberId } = route.params;
  const [memberData, setMemberData] = useState(null);
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
  
        const response = await fetch(`https://www.rodrigozambon.com.br/devfitness/api/members/${memberId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('API Response:', data); // Log the entire response
          setMemberData(data.member); // Adjust this line if the structure is different
        } else {
          console.error('Falha ao recuperar os dados do membro:', response.status);
        }
      } catch (error) {
        console.error('Erro ao consultar os dados do membro:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchMemberData();
  }, [memberId]);
  
  useEffect(() => {
    console.log('Updated memberData:', memberData);
  }, [memberData]);

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
        <Text style={styles.headerText}>{memberData.name}</Text>
      </View>

      {console.log('antes de chamar', memberData)}
      <MemberViewItem item={memberData} />
      <PaymentViewList data={dummyPaymentData} />
      <PlanViewList data={dummyPlanData} />
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