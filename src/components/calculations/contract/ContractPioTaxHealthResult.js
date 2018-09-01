import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../../theme';

const ContractPioTaxHealthResult = ({ calculation }) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Neto</Text>
          <Text style={styles.number}>{calculation.concractPioTaxHealth.value}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Bruto</Text>
          <Text style={styles.number}>{calculation.concractPioTaxHealth.gross.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Neoporezivo - 20%</Text>
          <Text style={styles.number}>{calculation.concractPioTaxHealth.nontaxable.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Osnovica za oporezivanje</Text>
          <Text style={styles.number}>{calculation.concractPioTaxHealth.base.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Porez 20%</Text>
          <Text style={styles.number}>{calculation.concractPioTaxHealth.tax.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>PIO 26%</Text>
          <Text style={styles.number}>{calculation.concractPioTaxHealth.pension.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.itemContainerDark}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Doprinos za zdravstvo</Text>
          <Text style={styles.number}>{calculation.concractPioTaxHealth.contribution.toFixed(2)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};


export default ContractPioTaxHealthResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // top: -64, //gura ga nesto ???
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
