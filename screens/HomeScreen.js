import React from 'react';
import { Button, ImageBackground, StyleSheet, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';




const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
    const navigation = useNavigation();

    const handlePress = () => {
        // navigation.navigate('WebScreen');
        navigation.navigate('BottomSheet')
        // console.log(navigation);
        // navigation.toggleDrawer() on utilise le toggleDrawer pour ouvrir directly

    };


    return (
        <View style={styles.mainContainer}>
            <Header />
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../assets/kartal.png')}
                    style={styles.background}
                    resizeMode="contain"
                />

            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Ouvrir BottomSheet"
                    onPress={handlePress}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingBottom: 70,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        width: width * 0.8,
        height: height * 0.5,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
});