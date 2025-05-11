import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Footer from './Footer';
import WebView from 'react-native-webview';
import WebScreen from './WebScreen';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Header from '../components/Header';
import HomeScreen from './HomeScreen';



const Drawer = createDrawerNavigator();
export default function NavbBar() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="footer" component={Footer} options={{
                title: 'ACCUEIL',
                drawerLabel: 'fisrt',
                drawerIcon: ({ color, size }) => (
                    <MaterialIcons name="add-home" size={size} color={color} />
                )
            }} />
            <Drawer.Screen name="Web" component={WebScreen} options={{
                drawerIcon: ({ focused, size }) => (
                    <MaterialCommunityIcons name="web-check" size={size} color={focused ? '#7cc' : '#ccc'} />
                )
            }} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})