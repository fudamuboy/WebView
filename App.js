import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import WebScreen from './screens/WebScreen';
import TabBottoms from './TabBottoms';
import BottomSheet from './BottomSheet';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabBottoms" component={TabBottoms} options={{
          headerShown: false
        }} />
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
          options={({ navigation, route }) => ({
            headerShown: true,
            headerBackTitle: "Retour",
            headerTitle: "Amazon",
            headerRight: () => (
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <TouchableOpacity
                  onPress={() => route.params?.webViewRef?.current?.goBack()}
                  disabled={!route.params?.canGoBack}
                >
                  <AntDesign
                    name="left"
                    size={24}
                    color={route.params?.canGoBack ? "black" : "gray"}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => route.params?.webViewRef?.current?.goForward()}
                >
                  <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => route.params?.webViewRef?.current?.reload()}
                >
                  <EvilIcons name="refresh" size={24} color="black" />
                </TouchableOpacity>
              </View>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})