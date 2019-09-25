import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { orangePrimary } from '../styles/constants'

export default function MyButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.title}> {title} </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        width: 198,
        height: 54,
        borderRadius: 40,
        backgroundColor: orangePrimary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 14,
    }
});
