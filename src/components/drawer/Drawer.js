import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Tabs from '../tabs/Tabs.js';
import Login from '../login/Login.js';
import DrawerTemplate from './DrawerTemplate.js';

const RouteConfigs = ({
  Tabs: { screen: Tabs },
  Login: { screen: Login },
});

const DrawerNavigatorConfig = {
  initialRouteName: 'Tabs',
  contentComponent: ({ navigation }) => <DrawerTemplate navigation={navigation} routes={RouteConfigs} />
};

const Drawer = DrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default Drawer;
