import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { colors, fonts, metrics, images } from '../../theme/index.js';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import MainScreen from '../mainScreen/MainScreen.js';
import Something from '../something/Something.js';
import News from '../news/News.js';
import Calculations from '../calculations/Calculations.js';

import AddNews from '../addNews/AddNews.js';

import NewsTabs from './NewsTabs.js';
import NewsTabsActive from './NewsTabsActive.js';
import IncentivesTabsActive from './IncentivesTabsActive.js';
import IncentivesTabs from './IncentivesTabs.js';
import CalculationsTabsActive from './CalculationsTabsActive.js';
import CalculationsTabs from './CalculationsTabs.js';
import TaxesTabActive from './TaxesTabActive.js';
import TaxesTab from './TaxesTab.js';

import Splash from '../splash/Splash.js';
import Taxes from '../taxes/Taxes.js';
// import ContractAll from '../calculations/contractAll/ContractAll.js';


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
  swipeEnabled: true,
};

const Tabs = createBottomTabNavigator({

  News: {
    screen: News,
    navigationOptions: {
      tabBarLabel: ({ tintColor, activeTintColor }) =>
        tintColor === colors.lightBlue1 ?
          <NewsTabsActive />
        :
          <NewsTabs />,
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

  Calculations: {
    screen: Calculations,
    navigationOptions: {
      // title: 'CALCULATIONS',
      tabBarLabel: ({ tintColor, activeTintColor }) =>
        tintColor === colors.lightBlue1 ?
          <CalculationsTabsActive />
        :
          <CalculationsTabs />,
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
  // Splash: {
  //   screen: ContractAll,
  //   navigationOptions: {
  //     // title: 'CALCULATIONS',
  //     tabBarLabel: 'Vezba',
  //     tabBarIcon: ({ tintColor, activeTintColor }) =>
  //     tintColor === colors.lightBlue1 ?
  //       <Image
  //         source={images.calculatorSelected}
  //         style={{width: 20, height: 20}}
  //       />
  //     :
  //       <Image
  //         source={images.calculatorDefault}
  //         style={{width: 20, height: 20}}
  //       />
  //   }
  // },

  Taxes: {
    screen: Taxes,
    navigationOptions: {
      // title: 'TAXES',
      tabBarLabel: ({ tintColor, activeTintColor }) =>
        tintColor === colors.lightBlue1 ?
          <TaxesTabActive />
        :
          <TaxesTab />,
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
  },
  Something: {
    screen: Something,
    navigationOptions: {
      // title: 'INCENTIVES',
      tabBarLabel: ({ tintColor, activeTintColor }) =>
        tintColor === colors.lightBlue1 ?
          <IncentivesTabsActive />
        :
          <IncentivesTabs />,
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
}, navigationConfig);

export default Tabs;
