import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../theme';

const SalaryResult = ({ calculation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Ukupna bruto zarada</Text>
        <Text style={styles.number}>{calculation.grossSalary.value}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Neto za isplatu</Text>
        <Text style={styles.number}>{calculation.totalNet}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Porez na zarade</Text>
        <Text style={styles.number}>{calculation.grossSalary.tax}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Ukupan trosak zarade</Text>
        <Text style={styles.number}>{calculation.totalContributions}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Ukupan obracun</Text>
        <Text style={styles.number}>{calculation.totalSalary}</Text>
      </View>
    </View>
  );
};


export default SalaryResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.medium,
  },
  headline: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.huge,
    color: colors.darkGrey,
    alignSelf: 'center'
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