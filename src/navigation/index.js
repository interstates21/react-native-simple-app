import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import React from 'react'
import Header from '../_layout/Header'
import LoginScreen from '../_screens/Auth/LoginScreen';
import TypeEmailScreen from '../_screens/Auth/TypeEmailScreen'
import RestoreScreen from '../_screens/Auth/RestoreScreen'
import RestoreLinkScreen from '../_screens/Auth/RestoreLinkScreen'
import TypeNewPasswordScreen from '../_screens/Auth/TypeNewPasswordScreen'
import UnacceptedTripsScreen from '../_screens/Home/UnacceptedTripsScreen'
import CreatureScreen from '../test_screens/CreatureScreen';


const headerStyle = {
  backgroundColor: 'white'
};

const HomeTabNavigator = createBottomTabNavigator({
  UnacceptedTripsTab: {
    screen: UnacceptedTripsScreen,
  }
})


const RootNavigator = createStackNavigator({
  CreatureStack: {
    screen: CreatureScreen,
    navigationOptions: {
      header: null,
    }
  },

  LoginStack: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  TypeEmailStack: {
    screen: TypeEmailScreen,
    navigationOptions: {
      header: null,
    }
  },
  RestoreStack: {
    screen: RestoreScreen,
    navigationOptions: {
      header: null,
    }
  },
  RestoreLinkStack: {
    screen: RestoreLinkScreen,
    navigationOptions: {
      header: null,
    }
  },
  TypeNewPasswordStack: {
    screen: TypeNewPasswordScreen,
    navigationOptions: {
      header: null,
    }
  },
  HomeTab: {
    screen: HomeTabNavigator,
    navigationOptions: {
      header: <Header />
    }
  },
});

export default createAppContainer(RootNavigator);
