import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform
} from 'react-native';

import MyInput from '../../_components/MyInput';
import MyButton from '../../_components/MyButton';
import Logo from '../../_layout/Logo'
import BlueText from '../../_components/BlueText'
import { Margin } from '../../styles/styledComponents'
import { bluePrimary } from '../../styles/constants';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      email: '',
      password: '',
      err: ''
    };
  }

  // onSubmit = async () => {
  //   // this.props.navigation.navigate('ScanStack');
  //   try {
  //     await this.authRequest();
  //   } catch (err) {
  //     this.showAlert('SubmitError: ' + JSON.stringify(err));
  //     console.log(err);
  //   }
  // };

  // hideAlert = () => {
  //   this.setState({
  //     showAlert: false
  //   });
  // };

  // showAlert = err => {
  //   this.setState({
  //     err: String(err),
  //     showAlert: true
  //   });
  // };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
          <BlueText content="Welcome to Kranq app for couriers" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.title}> Login. </Text>
          <Margin />
          <MyInput
            title='Email'
            placeholder='Email'
            type='email'
          // onChangeText={e => this.setState({ email: e })}
          />
          <Margin />
          <MyInput
            title='Password'
            type='password'
            placeholder='Password'
          // onChangeText={e => this.setState({ password: e })}
          />
        </View>
        <MyButton
          title='Login'
          onPress={() => {
            this.props.navigation.navigate('TypeEmailStack');
            // this.onSubmit();
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
    fontWeight: 'bold',
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
