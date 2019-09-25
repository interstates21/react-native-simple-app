import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import {Margin} from '../../../styles/styledComponents'
import TripItem from './TripItem'

const data = [
  {
    company: 'NASA',
    address: '34234 Davon st',
    time: '11:11 A.M.',
    sector: 'B-40'
  },
  {
    company: 'NASA',
    address: '34234 Davon st',
    time: '11:11 A.M.',
    sector: 'B-40'
  },
  {
    company: 'NASA',
    address: '34234 Davon st',
    time: '11:11 A.M.',
    sector: 'B-40'
  }
]


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


  renderItem = ({ item }) => {
    const { company, address, time, sector } = item;
    return (
      <TripItem
        company={company}
        address={address}
        time={time}
        sector={sector}
      />)
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
