import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { colors, fonts } from '../../theme/index.js';
import MainScreen from '../mainScreen/MainScreen.js';
import Tabs from '../tabs/Tabs.js';
import NewsDetail from '../news-detail/NewsDetail.js';
import CalculationDetail from '../calculations/CalculationDetail';
import CalculationDetail1 from '../calculations/CalculationDetail1';
import Services from '../services/Services.js';
import ServicesDetail from '../services-detail/ServicesDetail';
import About from '../about/About.js';
import AboutDetail from '../about-detail/AboutDetail';
import Contact from '../contact/Contact.js';
import ContactMessage from '../contact-message/ContactMessage';
import Settings from '../settings/Settings.js';
import TaxesDetail from '../taxes-detail/TaxesDetail';
import HeaderLeft from './HeaderLeft.js';
import HeaderRight from './HeaderRight.js';
import Something from '../something/Something.js';
import IncentivesDetail from '../incentives-detail/IncentivesDetail.js';
// import ContractTax from '../calculations/contract/ContractTax.js';




const navigationConfig = {
  initialRouteName: 'Tabs',
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerLeft: <HeaderLeft navigation={navigation} />,
    headerRight: <HeaderRight navigation={navigation} />,
    // title: 'asda',
    headerTintColor: colors.white,
    headerStyle: {
      // justifyContent: 'center',
      backgroundColor: colors.navigator,
      height: 60,
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      fontSize: fonts.size.large,
      fontFamily: 'openSansBold',
      color: colors.white,
    },
  }),
};

const Navigator = createStackNavigator({
  // MainScreen: { screen: MainScreen },
  Tabs: { screen: Tabs },
  Services: { screen: Services },
  ServicesDetail: { screen: ServicesDetail },
  About: { screen: About },
  AboutDetail: { screen: AboutDetail },
  Contact: { screen: Contact },
  ContactMessage: {screen: ContactMessage},
  Settings: { screen: Settings},
  NewsDetail: { screen: NewsDetail },
  CalculationDetail: { screen: CalculationDetail},
  CalculationDetail1: { screen: CalculationDetail1},
  TaxesDetail: { screen: TaxesDetail },
  Something: {screen: Something},
  IncentivesDetail: {screen: IncentivesDetail},
  // ContractTax: {screen: ContractTax}

}, navigationConfig);

export default Navigator;
