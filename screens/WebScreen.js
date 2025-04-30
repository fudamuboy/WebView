import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'
import Constants from 'expo-constants';
import { useState } from 'react';

export default function WebScreen() {
    const [visible, setVisible] = useState(false)

    const ActivityIndicatorElement = () => {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator color="gray" size="large" />
                <Text style={styles.loadingText}>Chargement...</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <WebView
                style={styles.webview}
                source={{ uri: 'https://www.amazon.com.tr/' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onLoadStart={() => setVisible(true)}
                onLoad={() => setVisible(false)}
                startInLoadingState={true}
                renderLoading={() => <ActivityIndicatorElement />}
                allowsFullscreenVideo={true}
                allowsInlineMediaPlayback={true}
                mediaPlaybackRequiresUserAction={false}
            />
            {visible ? <ActivityIndicatorElement /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    webview: {
        flex: 1,
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    }
})