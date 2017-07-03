import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from '../home/Home.js';
import About from '../about/About.js';

const Tabs = TabNavigator({
  Home: { screen: Home },
  About: { screen: About }
});

export default Tabs;
