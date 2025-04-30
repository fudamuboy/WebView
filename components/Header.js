import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={styles.headerWrapper} >
            <Text style={styles.text}>MY ESSAYS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 20,
        paddingTop: 25,
        paddingBottom: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,

    },

})