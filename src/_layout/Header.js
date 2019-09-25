import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import BlueText from '../_components/BlueText'
import Icon from 'react-native-vector-icons/AntDesign';
const logoURL = require('../assets/logo.png');

export default function Header() {

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={logoURL} />
            <BlueText content="Unaccepted Trips" />
            <Icon name="menu-fold" size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10,
    },
    image: {
        width: 103,
        height: 38,
    },
});
