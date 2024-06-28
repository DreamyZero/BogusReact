import React, { useState } from 'react';
import { Text, SafeAreaView, Alert, TouchableOpacity, Image, Platform, TextInput, Modal, View } from 'react-native';
import * as Application from 'expo-application';
import { gStyles } from '../styles/style.js';

const Main = () => {
  const [userName, setUserName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  const onPressButton = () => {
    setModalVisible(true);
  };

  const handleSaveName = () => {
    setUserName(inputText);
    setModalVisible(false);
    setInputText('');
  };

  let androidVersion = 'Не Android устройство';
  if (Platform.OS === 'android') {
    androidVersion = Application.nativeBuildVersion || 'Неизвестная версия';
  }

  return (
    <SafeAreaView style={gStyles.container}>
      <Text style={gStyles.title}>
        Добро пожаловать в приложение погоды!
      </Text>
      <Image style={gStyles.image} source={require('../assets/weather.png')} />
      <TouchableOpacity style={gStyles.button} onPress={onPressButton}>
        <Text style={gStyles.buttonText}>Как Вас зовут?</Text>
      </TouchableOpacity>
      {userName !== '' && <Text style={gStyles.text}>Ваше имя: {userName}.</Text>}
      {Platform.OS === 'android' && <Text style={gStyles.text}>Версия Android: {androidVersion}</Text>}

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={gStyles.modalContainer}>
          <View style={gStyles.modalContent}>
            <Text style={gStyles.modalTitle}>Введите ваше имя</Text>
            <TextInput
              style={gStyles.modalInput}
              placeholder="Ваше имя"
              value={inputText}
              onChangeText={setInputText}
            />
            <TouchableOpacity style={gStyles.modalButton} onPress={handleSaveName}>
              <Text style={gStyles.modalButtonText}>Сохранить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Main;

