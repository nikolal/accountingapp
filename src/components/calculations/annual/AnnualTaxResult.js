import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../../theme';

const AnnualTaxResult = ({ calculation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Neto dnevnica u RSD</Text>
          <Text style={styles.number}>{calculation.annualTax.value && calculation.annualTax.value.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Osnovica za oporezivanje</Text>
          <Text style={styles.number}>{calculation.annualTax.gross && calculation.annualTax.gross.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Porez 20%</Text>
          <Text style={styles.number}>{calculation.annualTax.tax && calculation.annualTax.tax.toFixed(2)}</Text>
        </View>
      </View>

    </View>
  );
};

export default AnnualTaxResult;

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