import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './Loading';
import DataWeather from './DataWeather';



const API_KEY = '2d33400e950f4a8f47f9f77e1215959d'

export default class extends React.Component {
  state = {
      isLoading: true
  };
  getWeather = async (latitude, longitude) => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`); 
      const data = response.data;
      this.setState({
          isLoading: false, 
          temp: data.main.temp, 
          condition: data.weather[0].main,
      });
  }

  getLocation = async () => {
      try {
          await Location.requestForegroundPermissionsAsync();
          const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
          this.getWeather(latitude, longitude);
          
      } catch (error) {
          Alert.alert('Не получается определить место', 'Ошибка')
      }
  }
  componentDidMount() {
      this.getLocation();
  }

  render () {
      const {isLoading, temp, condition} = this.state;
      return (
          isLoading ? <Loading /> : <DataWeather temp={Math.round(temp)} condition={condition}/>
      );
  };
};


    
