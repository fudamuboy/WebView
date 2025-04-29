import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import WebScreen from './screens/WebScreen';
import TabBottoms from './TabBottoms';
import BottomSheet from './BottomSheet';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabBottoms" component={TabBottoms} />
        <Stack.Screen name="BottomSheet" component={BottomSheet} />
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
          // headerBackTitle: "Retour",
          // headerTitle: "Amazon",
        }}
        />
        <Stack.Screen
          name="WebScreen"
          component={WebScreen}
          options={{
            headerShown: true,
            headerBackTitle: "Retour",
            headerTitle: "Migros",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})