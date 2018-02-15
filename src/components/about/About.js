import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


class About extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'ABOUT',
  })

  render(){
    console.log('aahhhha');
    return (
      <View>
        <Text>About a</Text>
      </View>
    );
  }
}

export default About;
