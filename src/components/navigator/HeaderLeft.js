import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme/index.js';

const HeaderLeft = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => props.navigation.navigate('DrawerOpen')}>
        <Ionicons name="md-menu" size={30} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  container: {
  },
  iconContainer: {
    paddingHorizontal: metrics.medium,
  }
});
