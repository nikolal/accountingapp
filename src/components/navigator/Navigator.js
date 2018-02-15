import React from 'react';
import { StackNavigator } from 'react-navigation';
import { metrics, colors, fonts } from '../../theme/index.js';
import NewsDetail from '../news-detail/NewsDetail.js';
import Tabs from '../tabs/Tabs.js';
import About from '../about/About.js';
import Contact from '../contact/Contact.js';
import HeaderLeft from './HeaderLeft.js';
import HeaderRight from './HeaderRight.js';


const navigationConfig = {
  initialRouteName: 'Tabs',
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerLeft: <HeaderLeft navigation={navigation} />,
    headerRight: <HeaderRight navigation={navigation} />,
    // headerBackTitle: 'Back',
    headerTintColor: colors.white,
    headerStyle: {
      justifyContent: 'center',
      backgroundColor: colors.black,
    },
    headerTitleStyle: {
      fontSize: fonts.size.large,
      color: colors.white,
    },
  }),
};

const Navigator = StackNavigator({
  Tabs: { screen: Tabs },
  NewsDetail: { screen: NewsDetail },
  About: { screen: About },
  Contact: { screen: Contact },
}, navigationConfig);

export default Navigator;
