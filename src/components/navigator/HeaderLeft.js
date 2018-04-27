import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { metrics, colors, fonts } from '../../theme/index.js';

const HeaderLeft = props => {
  return (
    <View style={styles.container}>
      {
        props.navigation.state.routeName === 'Tabs'
        ?
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => props.navigation.state.routeName === 'Tabs' && props.navigation.navigate('DrawerOpen')}
          >
            <SimpleLineIcons name="menu" size={25} color={colors.white} />
          </TouchableOpacity>
        :
          <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.iconContainer}>
            <SimpleLineIcons name="arrow-left" size={20} color={colors.white}/>
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
