import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


class Contact extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'CONTACT',
  })

  render(){
    return (
      <View>
        <Text>Contact</Text>
      </View>
    );
  }
}

export default Contact;
