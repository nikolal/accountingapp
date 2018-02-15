import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme/index.js';

const HeaderRight = props => {
  return (
    <TouchableOpacity>
      <Ionicons name="md-calendar" size={30} color={colors.white} />
    </TouchableOpacity>
  );
};

export default HeaderRight;
