import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme/index.js';
import Home from '../home/Home.js';
import Drawer from '../drawer/Drawer.js';

const navigationConfig = {
  initialRouteName: 'Drawer',
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerRight: (
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
  Drawer: { screen: Drawer },
}, navigationConfig);

export default Navigator;
