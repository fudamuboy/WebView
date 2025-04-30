import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React, { useRef, useCallback, useMemo } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetComponent, { BottomSheetView } from '@gorhom/bottom-sheet';

import { useNavigation } from '@react-navigation/native';

export default function BottomSheet() {
    const navigation = useNavigation()
    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => ['25%', '50%', '70%', '100%'], []);

    const handleSheetChanges = useCallback((index) => {
        // console.log('handleSheetChanges', index);
    }, []);
    const pressHandler = () => {
        navigation.navigate('WebScreen')
    }
    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('./assets/valide.webp')}
                    style={styles.img}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.background}>
                <Text style={styles.backgroundText}>Contenu de fond</Text>
            </View>
            <BottomSheetComponent
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enablePanDownToClose={true}
                style={styles.bottomSheet}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Text style={styles.text}>Awesome 🎉</Text>
                    <Text style={styles.text}>Ceci est le contenu du BottomSheet</Text>
                    <View style={styles.btns} >
                        <Button
                            title='PRESS'
                            onPress={pressHandler} />
                    </View>
                </BottomSheetView>
            </BottomSheetComponent>

        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    img: {
        width: 200,
        height: 200,
    },
    background: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundText: {
        fontSize: 20,
        color: '#666',
    },
    bottomSheet: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    contentContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    btns: {
        width: '100%',
        paddingHorizontal: 70,
        paddingBottom: 30,
    },
});
