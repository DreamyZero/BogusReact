import { useState, useRef, useEffect  } from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

import { gStyles } from '../styles/style.js';


export default function App() {
    const [sound, setSound] = useState();
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    async function playSound() {
        if(!isMusicPlaying) {
            const { sound } = await Audio.Sound.createAsync(require('../assets/Music.mp3'));
            setSound(sound);
            await sound.playAsync();
            setIsMusicPlaying(true);
        } else {
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

