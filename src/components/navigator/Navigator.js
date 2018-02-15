import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme/index.js';
import Home from '../home/Home.js';
import Login from '../login/Login.js';
import Tabs from '../tabs/Tabs.js';
import Drawer from '../drawer/Drawer.js';

const navigationConfig = {
  initialRouteName: 'Tabs',
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity>
        <Ionicons name="md-menu" size={30} color={colors.white} onPress={() => navigation.navigate('DrawerOpen')}/>
      </TouchableOpacity>
    ),
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
