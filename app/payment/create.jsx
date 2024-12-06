import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity,
  FlatList, Modal, TouchableWithoutFeedback, Platform } from 'react-native';
import React, { useCallback, useState, useEffect } from 'react';
import Colors from '../../constants/Colors';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PaymentCreateScreen =  ({ route }) => {
  
  const { memberId, paymentId } = route.params;
  const navigation = useNavigation();
  const [statusExpanded, setStatusExpanded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Selecione o status do pagamento');

  const [methodExpanded, setMethodExpanded] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('Selecione o método de pagamento');
  const [dateInput, setDateInput] = useState('AAAA-MM-DD');
  const [paymentDetails, setPaymentDetails] = useState(null);

  const paymentMethods = [
    { id: 'boleto', payment_method: 'Boleto' },
    { id: 'credit_card', payment_method: 'Crédito' },
    { id: 'pix', payment_method: 'Pix' },
    { id: 'debit', payment_method: 'Débito' },
  ];

  const getPaymentMethodName = (id) => {
    const method = paymentMethods.find((item) => item.id === id);
    return method ? method.payment_method : 'Selecione o método de pagamento';
  };

  const toggleStatusExpanded = useCallback(() => setStatusExpanded(!statusExpanded), [statusExpanded]);

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setStatusExpanded(false);

    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      status: status,
    }));
  };

  const toggleMethodExpanded = useCallback(() => setMethodExpanded(!methodExpanded), [methodExpanded]);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setMethodExpanded(false);

    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      payment_method: method,
    }));
  };

  const   handleSavePress = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        console.error('Nenhum token foi encontrado');
        return;
      }

      const response = await fetch(`https://www.rodrigozambon.com.br/devfitness/api/payments/${paymentId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails), // Include the payment details in the request body
      });

      if (response.ok) {
        console.log('Plano salvo com sucesso');
        navigation.navigate('Member', { memberId: memberId });
      } else {
        console.error('Falha ao salvar o plano:', response.status);
      }
    } catch (error) {
      console.error('Erro ao salvar o plano:', error);
    }
  };

  const [top, setTop] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Member', { memberId: memberId })}
        >
            <Image
              style={styles.icon} 
              source={require('../../assets/icons/left_arrow_icon.png')}
            />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pagamento</Text>
      </View>
      <View style={styles.page}>
        <Text style={[styles.textLabel, { marginTop: 40 }]}>Data pagamento</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            keyboardType='default'
            placeholderTextColor={Colors.black}
            value={dateInput}
            onChangeText={(text) => {
              setDateInput(text);
              setPaymentDetails((prevDetails) => ({
                ...prevDetails,
                date: text,
              }));
            }}
          />
        </View>

        <View 
          onLayout={event=>{
            const layout = event.nativeEvent.layout;
            const topOffset = layout.y;
            const heightOfComponent = layout.height;

            const finalHeight = topOffset + heightOfComponent + (Platform.OS === 'android' ? -32 : 3);

            setTop(finalHeight);
          }}
        >
          <Text style={[styles.textLabel, { marginTop: 12 }]}>Status pagamento</Text>
          <TouchableOpacity
            style={styles.select}
            activeOpacity={0.8}
            onPress={toggleStatusExpanded}
          >
            <Text style={styles.textSelect}>{selectedStatus === '1' ? 'Pago' : 'Pendente'}</Text>
          </TouchableOpacity>
          {
            statusExpanded ? (
              <Modal visible={statusExpanded} transparent>
                <TouchableWithoutFeedback onPress={() => setStatusExpanded(false)}>
                  <View style={styles.backdrop}>
                    <View style={[styles.options, {top}]}>
                      <FlatList
                        keyExtractor={(item) => item.id}
                        data={[
                          { id: '1', status: 'Pago' },
                          { id: '2', status: 'Pendete' }
                        ]}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            style={styles.optionItem}
                            onPress={() => handleStatusSelect(item.id)}
                          >
                            <Text>{item.status}</Text>
                          </TouchableOpacity>
                        )}
                      />
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            ) : null
          }
        </View>

        <View>
          <Text style={[styles.textLabel, { marginTop: 12 }]}>Método de pagamento</Text>
          <TouchableOpacity
            style={styles.select}
            activeOpacity={0.8}
            onPress={toggleMethodExpanded}
          >
            <Text style={styles.textSelect}>{getPaymentMethodName(selectedMethod)}</Text>
          </TouchableOpacity>
          {
            methodExpanded ? (
              <View style={styles.options}>
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={paymentMethods}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() => handleMethodSelect(item.id)}
                    >
                      <Text>{item.payment_method}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            ) : null
          }
        </View>

        <TouchableOpacity style={styles.pressable} onPress={handleSavePress}
        >
          <Text style={styles.textSign}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greenBg,
  },
  header: {
    height: windowHeight*0.1,
    backgroundColor: Colors.cash,
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
    marginLeft:windowWidth*0.25,
    fontFamily: 'outfit-bold',
  },
  page: {
    padding: 20,
  },
  textLabel: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'outfit-bold',
  },
  action: {
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
    fontFamily: 'outfit-medium',
  },
  pressable: {
    marginTop: windowHeight*0.18,
    backgroundColor: Colors.cash,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    alignContent: 'center'
  },
  textSelect: {
    fontSize: 16,
    fontFamily: 'outfit-medium',
    color: Colors.black
  },
  textSign: {
    fontSize: 16,
    fontFamily: 'outfit-medium',
    color: Colors.white
  },
  select:{
    height: windowHeight*0.055,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    width:'100%',
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor:Colors.black,
    alignItems: 'center',
    marginTop: 10
  },
  options:{
    position: 'absolute',
    top: windowHeight*0.09,
    backgroundColor: Colors.white,
    width: '100%',
    borderRadius:5
  },
  optionItem:{
    padding: 10,
     borderBottomWidth: 1,
     borderColor: Colors.lightGray,
  },
  backdrop:{
    padding: 20,
    justifyContent: 'center',
    alignItems:'center',
    flex: 1
  }
});

export default PaymentCreateScreen;