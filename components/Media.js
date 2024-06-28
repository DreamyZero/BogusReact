import { useState, useRef, useEffect  } from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

import { gStyles } from '../styles/style.js';


export default function App() {
    // (Музыка) Создание состояния sound (объект звука) с помощью хука useState(). Переменная setSound - функция для обновления
    const [sound, setSound] = useState();
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    // (Музыка) Ассинхронная функция операций с музыкой
    async function playSound() {
        if(!isMusicPlaying) {
            // Получаем файл музыки
            const { sound } = await Audio.Sound.createAsync(require('../assets/Music.mp3'));
            setSound(sound);
            // Включить музыку
            await sound.playAsync();
            setIsMusicPlaying(true);
        } else {
            // Остановить музыку 
            await sound.stopAsync();
            setIsMusicPlaying(false);
            sound.unloadAsync();
        }
    }

    return (       
        <SafeAreaView style={gStyles.container}>
            <Text style={gStyles.title}>
                AP$ENT - Можно я с тобой
            </Text>
            <TouchableOpacity style={gStyles.button} onPress={playSound}>
                <Text style={gStyles.buttonText}>{isMusicPlaying ? 'Остановить музыку' : 'Включить музыку'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

