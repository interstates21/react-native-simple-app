import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { bluePrimary, width } from '../styles/constants';

export default function ({ content }) {
    return <Text style={styles.text}>{content}</Text>
}



const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        maxWidth: width - 100,
        color: bluePrimary,
        textAlign: 'center'
    }
});
