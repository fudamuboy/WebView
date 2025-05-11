import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import WebScreen from './screens/WebScreen';
import Footer from './screens/Footer';
import NavbBar from './screens/NavbBar';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function TabBottoms() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#0066cc',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    title: 'First',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="code" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="NavbBar"
                component={NavbBar}
                options={{
                    headerShown: false,
                    title: 'Second',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="code" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})