// app/login/index.jsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, StyleSheet, Pressable, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Colors from './../../constants/Colors';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://www.rodrigozambon.com.br/devfitness/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        console.log('Login successful:', token);
        await AsyncStorage.setItem('userToken', token);

        // Navigate to the homepage
        navigation.navigate('HomePage');
      } else {
        Alert.alert('Erro ao entrar', 'E-mail ou senha inválida.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Um erro ocorreu durante o login.');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./../../assets/images/dev-fitness-icon.png')} 
        style={styles.icon} 
      />
      <View style={styles.page}>
        <Text style={styles.textTitle}>
          Gerencie o fluxo de pagamento dos seus alunos de qualquer lugar!
        </Text> 

        <Text style={[styles.textLabel, { marginTop: 40 }]}>Email</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
            placeholder='Enter your email'
          />
        </View>
        <Text style={[styles.textLabel, { marginTop: 30 }]}>Senha</Text>
        <View style={styles.action}>
          <TextInput
            style={[styles.textInput, { color: Colors.black }]}
            autoCapitalize='none'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholder='Enter your password'
          />
        </View>       

        <Pressable style={styles.pressable} onPress={handleLogin}>
          <Text style={styles.textSign}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.white,
    height:'100%'
  },
  icon:{
    width:'100%',
    height: '17%',
    marginTop:'10%'
  },
  page:{
    padding:20,
    display:'flex',
    alignItems:'center',
    marginTop: '10%'
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: Colors.primary,
    paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: Colors.black,
  },
  pressable: {
    padding: 14,
    marginTop: 50,
    backgroundColor: Colors.primary,
    width:'100%',
    borderRadius:14
  },
  textTitle:{
    fontFamily:'outfit-bold',
    fontSize:22,
    textAlign:'center'
  },
  textLabel: {
    fontFamily:'outfit-medium',
    fontSize: 18
  },
  textSign: {
    fontFamily:'outfit-bold',
    fontSize:22,
    textAlign:'center',
    color: '#ffffff'
  },
  link:{
    width:'100%'
  }
});