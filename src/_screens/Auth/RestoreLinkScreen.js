import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import MyButton from '../../_components/MyButton';
import Logo from '../../_layout/Logo'
import {Margin} from '../../styles/styledComponents'
import { bluePrimary } from '../../styles/constants';
import globalStyles from '../../styles/globalStyles'


export default class RestoreScreen extends Component {
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
          <Margin />
          <View style={styles.inputGroup}>
            <Text style={styles.title}> We have sent you a restore password <Text style={globalStyles.highlight}>link</Text>. Please check your email and add your new password </Text>
          </View>
        </View>
        <MyButton
          title='Create New Password'
        onPress={() => {
          this.props.navigation.navigate('TypeNewPasswordStack')
        }}
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
    fontSize: 23,
    paddingLeft: 50,
    paddingRight: 50
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
