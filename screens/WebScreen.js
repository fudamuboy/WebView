import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'
import Constants from 'expo-constants';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function WebScreen() {
    const navigation = useNavigation();
    // 1. Référence pour accéder aux méthodes du WebView
    const webViewRef = useRef(null);

    // 2. États pour gérer le comportement de la WebView
    const [isLoading, setIsLoading] = useState(true);
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        navigation.setParams({
            webViewRef: webViewRef,
            canGoBack: canGoBack
        });
    }, [canGoBack]);

    // 3. Gestionnaire des événements de navigation
    const handleNavigationStateChange = (navState) => {
        setIsLoading(navState.loading);
        setCanGoBack(navState.canGoBack);
    };
    return (
        <View style={styles.container}>
            {/* Indicateur de chargement */}
            {isLoading && (
                <ActivityIndicator
                    style={styles.loader}
                    size="large"
                    color="#0000ff"
                />
            )}

            {/* Composant WebView */}
            <WebView
                ref={webViewRef}
                source={{ uri: 'https://www.amazon.com.tr/' }}
                style={styles.webview}
                onNavigationStateChange={handleNavigationStateChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 10,
    }
})