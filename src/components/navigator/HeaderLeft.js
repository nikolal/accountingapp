import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme/index.js';

const HeaderLeft = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => props.navigation.navigate('DrawerOpen')}>
        <SimpleLineIcons name="menu" size={25} color={colors.white} />
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
