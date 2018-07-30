import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../../theme';

const AllowanceResult = ({ calculation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Neto dnevnica u RSD</Text>
        <Text style={styles.number}>{calculation.allowancesHome.value}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Osnovica za oporezivanje</Text>
        <Text style={styles.number}>{calculation.allowancesHome.gross && calculation.allowancesHome.gross.toFixed(2)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Porez 20%</Text>
        <Text style={styles.number}>{calculation.allowancesHome.tax && calculation.allowancesHome.tax.toFixed(2)}</Text>
      </View>

    </View>
  );
};


export default AllowanceResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.medium,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: metrics.large,
    borderBottomColor: colors.grey,
    borderBottomWidth: metrics.smallBorder
  },
  text: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.huge,
    color: colors.grey
  },
  number: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.huge,
    color: colors.lightBlue1
  }
});
