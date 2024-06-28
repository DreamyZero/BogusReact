import React from "react";
import { Text, SafeAreaView } from 'react-native';
import { gStyles } from "../styles/style";

export default function Loading() {
    return (
        <SafeAreaView style={gStyles.containerLoad}>
            <Text style={gStyles.text}>Загрузка погоды...</Text>
        </SafeAreaView>
    );
}

