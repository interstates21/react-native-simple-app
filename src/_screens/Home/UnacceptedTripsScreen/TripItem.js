import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import styles from './styles'

export default function TripItem({ company, address, time, sector }) {
    return (
        <View style={styles.item_container}>
            <View style={styles.col}>
                <Text style={styles.textBold}>
                    {company}
                </Text>
                <Text style={styles.textGrey}>
                    {address}
                </Text>
            </View>
            <View style={styles.col}>
                <Text style={styles.textBold}>
                    {time}
                </Text>
                <Text style={styles.textGrey}>
                    {sector}
                </Text>
            </View>
        </View >
    );
}

