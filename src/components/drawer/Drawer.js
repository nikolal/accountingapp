import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Navigator from '../navigator/Navigator.js';
import DrawerTemplate from './DrawerTemplate.js';

const RouteConfigs = ({
  Navigator: { screen: Navigator },
});

const DrawerNavigatorConfig = {
  initialRouteName: 'Navigator',
  contentComponent: ({ navigation }) => <DrawerTemplate navigation={navigation} routes={RouteConfigs} />
};

const Drawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default createAppContainer(Drawer);
