import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import Colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = () =>{
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/images/banner.png')}
        style={styles.banner}
      />
      <View style={styles.page}>
        <Text style={styles.textTitle}>
          Gerencie o fluxo de pagamento dos seus alunos de qualquer lugar!
        </Text>        
        <Pressable style={styles.pressable} onPress={handleNavigate}>
            <Text style={styles.textSign}>Avançar</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.white,
    height:'100%'
  },
  banner:{
    width:'100%',
    heigth:'75%'
  },
  page:{
    padding:20,
    display:'flex',
    alignItems:'center'
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