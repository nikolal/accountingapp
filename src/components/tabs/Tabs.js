import React from 'react';
import { TabNavigator } from 'react-navigation';
import { colors, fonts, metrics } from '../../theme/index.js';
import { SimpleLineIcons } from '@expo/vector-icons';
import MainScreen from '../mainScreen/MainScreen.js';
import Something from '../something/Something.js';
import News from '../news/News.js';
import Calculations from '../calculations/Calculations.js';
import Taxes from '../taxes/Taxes.js';

const styles = {
  inactiveTintColor: colors.grey,
  activeTintColor: colors.lightBlue1,
  labelStyle: {
    fontSize: fonts.size.small,
    fontFamily: 'openSansBold',
  },
  style: {
    backgroundColor: '#f9f9f9',
    height: 60,
    padding: metrics.small,
  },
};

const navigationConfig = {
  showIcon: true,
  tabBarOptions: styles,
  swipeEnabled: true
};

const Tabs = TabNavigator({
  // MainScreen: {
  //   screen: MainScreen,
  //   navigationOptions: {
  //     title: 'SOMETHING',
  //     tabBarLabel: 'MainScreen',
  //     tabBarIcon: ({ tintColor, activeTintColor }) =>
  //       <SimpleLineIcons name="book-open" size={20} color={tintColor} />
  //   }
  // },

  News: {
    screen: News,
    navigationOptions: {
      title: 'NEWS',
      tabBarLabel: 'News',
      tabBarIcon: ({ tintColor, activeTintColor }) =>
        <SimpleLineIcons name="book-open" size={20} color={tintColor} />
    }
  },
  Something: {
    screen: Something,
    navigationOptions: {
      title: 'INCENTIVES',
      tabBarLabel: 'Incentives',
      tabBarIcon: ({ tintColor, activeTintColor }) =>
        <SimpleLineIcons name="book-open" size={20} color={tintColor} />
    }
  },
  Calculations: {
    screen: Calculations,
    navigationOptions: {
      title: 'CALCULATIONS',
      tabBarLabel: 'Calculations',
      tabBarIcon: ({ tintColor, activeTintColor }) =>
        <SimpleLineIcons name="calculator" size={20} color={tintColor} />
    }
  },
  Taxes: {
    screen: Taxes,
    navigationOptions: {
      title: 'TAXES',
      tabBarLabel: 'Taxes',
      tabBarIcon: ({ tintColor, activeTintColor }) =>
        <SimpleLineIcons name="docs" size={20} color={tintColor} />
    }
  }
}, navigationConfig);

export default Tabs;
