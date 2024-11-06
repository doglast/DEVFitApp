import React from 'react';
import { ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import Carousel from '../../components/Carousel';
import { dummyCarouselData } from '../../data/CarouselData';

const HomepageScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor:Colors.white,
        height:'100%'
      }}
    >
      <Carousel data = {dummyCarouselData}/>
    </ScrollView>
  )
}

export default HomepageScreen