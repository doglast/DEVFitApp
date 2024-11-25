import { View, Text, Image, Pressable, TextInput, StyleSheet, Platform } from 'react-native';
import React from 'react';
import Colors from './../../constants/Colors';
import { Link } from "expo-router";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/images/dev-fitness-icon.png')}
        style={styles.icon}
      />
      <View style={styles.page}>
        <Text style={styles.textTitle}>
          Gerencie o fluxo de pagamento dos seus alunos de qualquer lugar!
        </Text> 

        <Text style={[styles.textLabel, {marginTop:40}]}>Email</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>
        <Text style={[styles.textLabel, {marginTop:30}]}>Senha</Text>
        <View style={styles.action}>
          <TextInput
            style={[styles.textInput, {color:Colors.black}]}
            autoCapitalize='none'
          />
        </View>       
        
        <Pressable style={styles.pressable}>
          <Link style={styles.link} href={'/homepage'}>
            <Text style={styles.textSign}>Entrar</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  )
}

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