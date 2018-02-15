import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Navigator from '../navigator/Navigator.js';
import Tabs from '../tabs/Tabs.js';
import Login from '../login/Login.js';
import DrawerTemplate from './DrawerTemplate.js';

const RouteConfigs = ({
  Navigator: { screen: Navigator },
  Tabs: { screen: Tabs },
  Login: { screen: Login },
});

const DrawerNavigatorConfig = {
  initialRouteName: 'Navigator',
  contentComponent: ({ navigation }) => <DrawerTemplate navigation={navigation} routes={RouteConfigs} />
};

const Drawer = DrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default Drawer;
