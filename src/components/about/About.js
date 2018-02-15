import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


class About extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'ABOUT',
  })

  render(){
    return (
      <View>
        <Text>About</Text>
      </View>
    );
  }
}

export default About;
