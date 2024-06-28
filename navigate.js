import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Main from './components/Main.js';
import Media from './components/Media.js';
import Weather from './components/Weather.js';

function MainComponent() {
    return (
        <Main />
    );
}

function MediaComponent() {
    return (
        <Media />
    );
}

function WeatherComponent() {
    return (
        <Weather />
    );
}

const Tab = createBottomTabNavigator();

export default function Navigate() {
    return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
                name="Main" 
                options={{
                    title: 'Главная',
                    tabBarLabelStyle: {
                        color: '#25516E'
                    },
                    headerTitleStyle: {
                        color: '#25516E'
                    },
                    tabBarIcon: ({ focused, size }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={'#25516E'} />
                    )}} 
                component={MainComponent}/>
            <Tab.Screen 
                name="Media" 
                options={{
                    title: 'Медиа',
                    tabBarLabelStyle: {
                        color: '#25516E'
                    },
                    headerTitleStyle: {
                        color: '#25516E'
                    },
                    tabBarIcon: ({ focused, size }) => (
                        <Ionicons name={focused ? 'musical-note' : 'headset'} size={size} color={'#25516E'} />
                    )}} 
                component={MediaComponent}/>
            <Tab.Screen 
                name="Weather" 
                options={{
                    title: 'Погода',
                    tabBarLabelStyle: {
                        color: '#25516E'
                    },
                    headerTitleStyle: {
                        color: '#25516E'
                    },
                    tabBarIcon: ({ focused, size }) => (
                        <Ionicons name={focused ? 'rainy' : 'cloud'} size={size} color={'#25516E'} />
                    )}} 
                component={WeatherComponent} />
        </Tab.Navigator>
    </NavigationContainer>
    );
};
