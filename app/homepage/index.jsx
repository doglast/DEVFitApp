import React from 'react';
import { ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import Carousel from '../../components/home/Carousel';
import CardList from '../../components/home/CardList';
import { dummyCarouselData } from '../../data/CarouselData';
import { dummyCardData } from '../../data/CardData';

const HomepageScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.primaryBg,
        height:'100%'
      }}
    >
      <Carousel data = {dummyCarouselData}/>
      <CardList data = {dummyCardData}/>
    </ScrollView>
  )
}

export default HomepageScreen