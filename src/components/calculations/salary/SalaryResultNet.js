import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../../theme';

class SalaryResultNet extends Component {

  render() {

    const { calculation, localeString } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.itemContainerDark}>
          <View style={styles.innerContainer}>
            {
              this.props.language === 'en' ?
              <Text style={styles.text}>Total ?</Text> :
              <Text style={styles.text}>Ukupna bruto zarada</Text>
            }
            <Text style={styles.number}>{calculation.netSalary.value && calculation.netSalary.value.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.innerContainer}>
            {
              this.props.language === 'en' ?
                <Text style={styles.text}>??</Text> :
                <Text style={styles.text}>Porez na zarade</Text>
            }
            <Text style={styles.number}>{calculation.grossSalary.tax && calculation.grossSalary.tax.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainerDark}>
          <View style={styles.innerContainer}>
            {
              this.props.language === 'en' ?
                <Text style={styles.text}>???</Text> :
                <Text style={styles.text}>srp ???</Text>
            }
            <Text style={styles.number}>{calculation.totalContributions && calculation.totalContributions.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.innerContainer}>
            {
              this.props.language === 'en' ?
                <Text style={styles.text}>??</Text> :
                <Text style={styles.text}>Ukupan trosak zarade</Text>
            }
            <Text style={styles.number}>{calculation.totalSalary && calculation.totalSalary.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}


const stateToProps = state => ({
  localeString: state.settingsReducer.localeString,
  language: state.settingsReducer.language
});

export default connect(stateToProps, null)(SalaryResultNet);

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
