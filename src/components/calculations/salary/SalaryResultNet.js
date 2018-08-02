import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../../theme';

const SalaryResultNet = ({ calculation }) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Ukupna bruto zarada</Text>
          <Text style={styles.number}>{calculation.netSalary.value && calculation.netSalary.value.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Porez na zarade</Text>
          <Text style={styles.number}>{calculation.grossSalary.tax && calculation.grossSalary.tax.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Ukupan trosak zarade</Text>
          <Text style={styles.number}>{calculation.totalContributions && calculation.totalContributions.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Ukupan obracun</Text>
          <Text style={styles.number}>{calculation.totalSalary && calculation.totalSalary.toFixed(2)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};


export default SalaryResultNet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: metrics.large,
  },
  itemContainer: {
    backgroundColor: colors.white
  },
  itemContainerDark: {
    backgroundColor: colors.veryLightGrey,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: metrics.hugeToExtrahuge,
    marginHorizontal: metrics.hugeToExtrahuge,
    borderColor: '#e6e6e6',
    borderBottomWidth: metrics.tinyBorder,
    borderTopWidth: metrics.tinyBorder
  },
  text: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    color: colors.grey
  },
  number: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.huge,
    color: '#47d6e2'
  }
});
