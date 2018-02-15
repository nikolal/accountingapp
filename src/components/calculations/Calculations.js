import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


class Calculations extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'CALCULATIONS',
  })

  render(){
    return (
      <View>
        <Text>Calculations</Text>
      </View>
    );
  }
}

export default Calculations;
