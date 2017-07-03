import { TabNavigator } from 'react-navigation';
import Home from '../home/Home.js';
import About from '../about/About.js';
import { colors, fonts } from '../../theme/index.js';

const styles = {
  inactiveTintColor: colors.white,
  activeTintColor: colors.red,
  labelStyle: {
    fontSize: fonts.size.small,
  },
  style: {
    backgroundColor: colors.black
  }
};

const navigationConfig = {
  showIcon: false,
  tabBarOptions: styles,
  swipeEnabled: true
};

const Tabs = TabNavigator({
  Home: { screen: Home },
  About: { screen: About }
}, navigationConfig);

export default Tabs;
