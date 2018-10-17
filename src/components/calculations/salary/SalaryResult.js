import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { metrics, colors, fonts } from '../../../theme';

class SalaryResult extends Component {

  render() {
    const { calculation, localeString } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.itemContainerDark}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Ukupna bruto zarada</Text>
            <Text style={styles.number}>{
              calculation.grossSalary.value && calculation.grossSalary.value
              .toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Neto za isplatu</Text>
            <Text style={styles.number}>{calculation.totalNet && calculation.totalNet.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainerDark}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Porez na zarade</Text>
            <Text style={styles.number}>{calculation.grossSalary.tax && calculation.grossSalary.tax.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Ukupan trosak zarade</Text>
            <Text style={styles.number}>{calculation.totalContributions && calculation.totalContributions.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainerDark}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Ukupan obracun</Text>
            <Text style={styles.number}>{calculation.totalSalary}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  localeString: state.settingsReducer.localeString
});

export default connect(stateToProps, null)(SalaryResult);

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
