import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme/index.js';
import { NavigationActions } from 'react-navigation';

const HeaderLeft = props => {
  return (
    <View style={styles.container}>
      {
        props.navigation.state.routeName === 'Tabs' ||
        props.navigation.state.routeName === 'Services' ||
        props.navigation.state.routeName === 'About' ||
        props.navigation.state.routeName === 'Contact' ||
        props.navigation.state.routeName === 'Settings'
        ?
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => props.navigation.openDrawer()}
          >
            <SimpleLineIcons name="menu" size={20} color={colors.lightBlue1} />
          </TouchableOpacity>
        :
          <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.iconContainer}>
            <Ionicons name="md-arrow-round-back" size={20} color={colors.lightBlue1}/>
          </TouchableOpacity>
      }
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  container: {
  },
  iconContainer: {
    padding: metrics.medium,
    paddingHorizontal: metrics.huge,
  }
});
