// app/_layout.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './landing/index';
import LoginScreen from './login/index';
import HomepageScreen from './homepage/index';
import MemberScreen from './member/index';
import PaymentCreateScreen from './payment/create';
import PaymentEditScreen from './payment/edit';
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function RootLayout() {

  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf')
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen 
          name="LandingPage" 
          component={LandingScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="HomePage" 
          component={HomepageScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Member" 
          component={MemberScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="PaymentCreate" 
          component={PaymentCreateScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="PaymentEdit" 
          component={PaymentEditScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}