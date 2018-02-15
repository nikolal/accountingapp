import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme/index.js';

const HeaderLeft = props => {
  return (
    <TouchableOpacity>
      <Ionicons name="md-menu" size={30} color={colors.white} onPress={() => props.navigation.navigate('DrawerOpen')}/>
    </TouchableOpacity>
  );
};

export default HeaderLeft;
