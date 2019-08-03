import React, { Component } from 'react';
import { View, StyleSheet, Image, AppRegistry, Animated, Easing, Text } from 'react-native';
// import { Ionicons }  from '@expo/vector-icons';
import { metrics, colors, fonts, images } from '../../theme';

export default class OurClientsItem extends Component {

  state = {
    scaleValue: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.scaleValue, {
      toValue: 1,
      duration : 600,
      delay: this.props.index * 300
    }).start();
  }

  render() {
    return (
      <Animated.View style={{ opacity: this.state.scaleValue }}>
        { this.props.children }
      </Animated.View>
    );
  }
}
