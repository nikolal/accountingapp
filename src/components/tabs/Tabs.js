import React from 'react';
import { Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { colors, fonts, metrics, images } from '../../theme/index.js';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import MainScreen from '../mainScreen/MainScreen.js';
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
  // tabStyle: {
  //   flex: 1,
  //   borderWidth: 1,
  //   borderColor: 'red'
  // }
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
      tabBarLabel: 'News',
      tabBarIcon: ({ tintColor, activeTintColor }) =>
        tintColor === colors.lightBlue1 ?
          <Image
            source={images.contractSelected}
            style={{width: 20, height: 20}}
          />
        :
          <Image
            source={images.contractDefault}
            style={{width: 20, height: 20}}
          />
    }
  },
  Something: {
    screen: Something,
    navigationOptions: {
      // title: 'INCENTIVES',
      tabBarLabel: 'Incentives',
      tabBarIcon: ({ tintColor, activeTintColor }) =>
      tintColor === colors.lightBlue1 ?
        <Image
          source={images.newspaperSelected}
          style={{width: 25, height: 20}}
        />
      :
        <Image
          source={images.newspaperDefault}
          style={{width: 25, height: 20}}
        />
    }
  },
  Calculations: {
    screen: Calculations,
    navigationOptions: {
      // title: 'CALCULATIONS',
      tabBarLabel: 'Calculations',
      tabBarIcon: ({ tintColor, activeTintColor }) =>
      tintColor === colors.lightBlue1 ?
        <Image
          source={images.calculatorSelected}
          style={{width: 20, height: 20}}
        />
      :
        <Image
          source={images.calculatorDefault}
          style={{width: 20, height: 20}}
        />
    }
  },
  Taxes: {
    screen: Taxes,
    navigationOptions: {
      // title: 'TAXES',
      tabBarLabel: 'Taxes',
      tabBarIcon: ({ tintColor, activeTintColor }) =>
      tintColor === colors.lightBlue1 ?
        <Image
          source={images.taxSelected}
          style={{width: 20, height: 20}}
        />
      :
        <Image
          source={images.taxDefault}
          style={{width: 20, height: 20}}
        />
    }
  }
}, navigationConfig);

export default Tabs;
