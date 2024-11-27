import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../constants/Colors';
import Carousel from '../../components/home/Carousel';
import CardList from '../../components/home/CardList';
import { dummyCarouselData } from '../../data/CarouselData';

const HomepageScreen = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          console.error('Nenhum token foi encontrado');
          return;
        }

        const response = await fetch('https://www.rodrigozambon.com.br/devfitness/api/members', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();

          setCardData(data.members.data);
        } else {
          console.error('Falha ao recuperar os membros:', response.status);
        }
      } catch (error) {
        console.error('Erro identifica durante consulta dos membros:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: Colors.primaryBg,
        height: '100%',
      }}
    >
      <Carousel data={dummyCarouselData} />
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <CardList data={cardData} />
      )}
    </ScrollView>
  );
};

export default HomepageScreen;