import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../../theme';

const SalaryResult = ({ calculation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Bruto</Text>
        <Text style={styles.number}>{calculation.tempPermJobsgross.value.toFixed(2)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Porez 10%</Text>
        <Text style={styles.number}>{calculation.tempPermJobsgross.tax.toFixed(2)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>PIO 14%</Text>
        <Text style={styles.number}>{calculation.tempPermJobsgross.firstData.pension.toFixed(2)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>PIO - 12%</Text>
        <Text style={styles.number}>{calculation.tempPermJobsgross.secondData.pension.toFixed(2)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Zdravsveni</Text>
        <Text style={styles.number}>{calculation.tempPermJobsgross.firstData.health.toFixed(2)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Nez</Text>
        <Text style={styles.number}>{calculation.tempPermJobsgross.firstData.nez.toFixed(2)}</Text>
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
