import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../../theme';

const SalaryResult = ({ calculation }) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Bruto</Text>
          <Text style={styles.number}>{calculation.tempPermJobsgross.value.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Porez 10%</Text>
          <Text style={styles.number}>{calculation.tempPermJobsgross.tax.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>PIO 14%</Text>
          <Text style={styles.number}>{calculation.tempPermJobsgross.firstData.pension.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>PIO - 12%</Text>
          <Text style={styles.number}>{calculation.tempPermJobsgross.secondData.pension.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Zdravsveni</Text>
          <Text style={styles.number}>{calculation.tempPermJobsgross.firstData.health.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Nez</Text>
          <Text style={styles.number}>{calculation.tempPermJobsgross.firstData.nez.toFixed(2)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};


export default SalaryResult;

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
    fontSize: fonts.size.large,
    color: '#47d6e2'
  }
});
