import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import MyLineInput from '../../_components/MyLineInput';
import MyButton from '../../_components/MyButton';
import Logo from '../../_layout/Logo'

import { Margin } from '../../styles/styledComponents'
import { bluePrimary } from '../../styles/constants';


export default class TypeEmailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      email: '',
      password: '',
      err: ''
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.title}> Type Your Email. </Text>
          <Margin />
          <MyLineInput
            placeholder='Email'
            type='email'
          // onChangeText={e => this.setState({ email: e })}
          />
        </View>
        <MyButton
          title='Send'
          onPress={() => { this.props.navigation.navigate('RestoreStack') }}
        // onPress={() => {
        //   // this.onSubmit();
        // }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    color: bluePrimary,
    textAlign: 'center',
    fontSize: 20
  },
  content: {

  },
  inputGroup: {
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
