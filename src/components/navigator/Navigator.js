import React from 'react';
import { StackNavigator } from 'react-navigation';
import { metrics, colors, fonts } from '../../theme/index.js';
import Login from '../login/Login.js';
import Tabs from '../tabs/Tabs.js';
import HeaderLeft from './HeaderLeft.js';
import HeaderRight from './HeaderRight.js';


const navigationConfig = {
  initialRouteName: 'Tabs',
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerLeft: <HeaderLeft navigation={navigation} />,
    headerRight: <HeaderRight navigation={navigation} />,
    // headerBackTitle: 'Back',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.black,
      paddingHorizontal: metrics.smallPadding
    },
    headerTitleStyle: {
      fontSize: fonts.size.large,
      color: colors.white,
    },
  }),
};

const Navigator = StackNavigator({
  Tabs: { screen: Tabs },
  Login: { screen: Login },
}, navigationConfig);

export default Navigator;
