import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { orangeSecondary, bluePrimary } from '../styles/constants'
// import Icon from 'react-native-vector-icons/AntDesign';
// import IconAwesome from 'react-native-vector-icons/FontAwesome';

export default class ContactInput extends Component {
    state = {
        value: this.props.value
    };

    render() {
        const {
            placeholder,
            type,
            title
        } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}> {title} </Text>
                <View style={styles.inner}>
                    <TextInput
                        multiline={true}
                        value={this.state.value}
                        type={type}
                        onChangeText={e => {
                            //   this.props.onChangeText(e);
                            this.setState({ value: e })
                        }}
                        placeholder={placeholder}
                        style={styles.input}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        elevation: 4,
    },
    inner: {
        width: 291,
        height: 50,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderBottomColor: orangeSecondary,
        // shadowOffset: { width: 10, height: 10, },
        // shadowColor: 'black',
        // shadowOpacity: 0.1,
        fontSize: 14,
        color: 'black',
    },
    input: {
        padding: 10,
    },
    title: {
        color: bluePrimary,
        fontSize: 18,
        marginLeft: -4,
        marginBottom: 10,
    }
});
