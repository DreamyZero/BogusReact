import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyles } from '../styles/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: { 
        iconName: 'thunderstorm', 
        title: 'Гроза',
        description: 'Явление в атмосфере, сопровождающееся молнией и громом, часто сильными ветрами и интенсивным дождем.', 
        gradient: ['#373B44', '#4286f4']},
    Drizzle: { 
        iconName: 'nuclear-outline', 
        title: 'Морось',
        description: 'Легкий дождь, обычно выпадает в виде мелких капелек, часто не вызывающий значительного увлажнения.', 
        gradient: ['#bdc3c7', '#2c3e50']},
    Rain: { 
        iconName: 'rainy', 
        title: 'Дождь',
        description: 'Осадки в виде капель воды, выпадающие из облаков на землю.', 
        gradient: ['#2980B9', '#6DD5FA']},
    Snow: { 
        iconName: 'snow', 
        title: 'Снег',
        description: 'Осадки в виде замерзших кристаллов льда, которые выпадают из облаков на землю в зимний период.', 
        gradient: ['#7F7FD5', '#86A8E7'] },
    Clear: { 
        iconName: 'sunny-outline', 
        title: 'Ясно',
        description: 'Солнечный день без облаков и осадков, характеризующийся ясным небом.', 
        gradient: ['#83a4d4', '#b6fbff'] },
    Clouds: { 
        iconName: 'cloud', 
        title: 'Облачно',
        description: 'Видимый в атмосфере водяной пар или ледяные частицы в виде облаков, которые могут приносить осадки или изменять погоду. Голым на улицу лучше не выходить.', 
        gradient: ['#56CCF2', '#2F80ED'] },
}

export default function DataWeather({temp, condition}) {
    return (
        <LinearGradient 
        colors={weatherOptions[condition].gradient}
        style={gStyles.containerGradient}>
            <View style={gStyles.containerGradients}>
                {/* Иконки */}
                <Ionicons name={weatherOptions[condition].iconName} size={150} color="white" />
                <Text style={gStyles.temp}>{temp}°</Text>
                <Text style={gStyles.title} margin={-5}>{weatherOptions[condition].title}</Text>
            </View>
            <View style={gStyles.containerGradient}>
                <View style={gStyles.tempDescriptionConteiner}>
                    <Text style={gStyles.tempText}>{weatherOptions[condition].description}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

DataWeather.propTypes = {
    temp: PropTypes.number.isRequired, 
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds"]).isRequired,
}

export { DataWeather };