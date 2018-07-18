import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../theme';

const ContractTaxResult = ({ calculation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Neto</Text>
        <Text style={styles.number}>{calculation.concractTax.value}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Bruto</Text>
        <Text style={styles.number}>{calculation.concractTax.gross.toFixed(2)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Neoporezivo - 20%</Text>
        <Text style={styles.number}>{calculation.concractTax.nontaxable.toFixed(2)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Osnovica za oporezivanje</Text>
        <Text style={styles.number}>{calculation.concractTax.base.toFixed(2)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Porez 20%</Text>
        <Text style={styles.number}>{calculation.concractTax.tax.toFixed(2)}</Text>
      </View>
    </View>
  );
};


export default ContractTaxResult;

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