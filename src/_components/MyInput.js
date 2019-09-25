import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { orangeSecondary, bluePrimary } from '../styles/constants'
import Icon from 'react-native-vector-icons/AntDesign';
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
                    {
                        type === 'email' &&
                        <Icon style={{ marginTop: 10 }} name="user" size={25} />
                    }

                    <TextInput
                        multiline={true}
                        value={this.state.value}
                        type={type}
                        secureTextEntry={type === 'password'}
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
        borderWidth: 0.5,
        justifyContent: 'flex-start',
        alignContent: 'center',
        flexDirection: 'row',

        borderColor: orangeSecondary,
        // shadowOffset: { width: 10, height: 10, },
        // shadowColor: 'black',
        // shadowOpacity: 0.1,
        fontSize: 12,
        paddingLeft: 10,
        color: 'black',
    },
    input: {
        flex: 1
    },
    title: {
        color: bluePrimary,
        fontSize: 18,
        marginLeft: -4,
        marginBottom: 10,
    }
});
