import React from 'react';
import { TabNavigator } from 'react-navigation';
import { colors, fonts } from '../../theme/index.js';
import { Ionicons } from '@expo/vector-icons';
import News from '../news/News.js';
import About from '../about/About.js';

const styles = {
  inactiveTintColor: colors.white,
  activeTintColor: colors.red,
  labelStyle: {
    fontSize: fonts.size.small,
  },
  style: {
    backgroundColor: colors.black
  },
};

const navigationConfig = {
  showIcon: true,
  tabBarOptions: styles,
  swipeEnabled: true
};

const Tabs = TabNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'News',
      tabBarLabel: 'News',
      tabBarIcon: ({ tintColor, activeTintColor }) =>
        <Ionicons name="md-home" size={24} color={tintColor} />
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'About',
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor, activeTintColor }) =>
        <Ionicons name="ios-information-circle" size={24} color={tintColor} />
    }
  }
}, navigationConfig);

export default Tabs;
