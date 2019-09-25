import React from 'react';
import { StyleSheet, Image } from 'react-native'
const logoURL = require('../assets/logo.png');

export default function Logo() {

    return (
        <Image resizeMode="contain" style={styles.image} source={logoURL} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 238,
        height: 120,
    },
});
