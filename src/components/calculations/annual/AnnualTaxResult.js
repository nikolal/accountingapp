import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../../theme';

class AnnualTaxResult extends Component {

  render() {
    console.log(this.props.calculation);

    const { calculation, localeString } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.itemContainerDark}>
          <View style={styles.innerContainer}>
            {
              this.props.language === 'en' ?
                <Text style={styles.text}>??</Text> :
                <Text style={styles.text}>Bruto zarada u RSD</Text>
            }
            <Text style={styles.number}>{calculation.annualTax.value && calculation.annualTax.value.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.innerContainer}>
            {
              this.props.language === 'en' ?
              <Text style={styles.text}>Broj izdžavanih članova</Text> :
              <Text style={styles.text}>Broj izdžavanih članova</Text>
            }
            <Text style={styles.number}>{calculation.annualTax.familyNumber && calculation.annualTax.familyNumber}</Text>
          </View>
        </View>
        <View style={styles.itemContainerDark}>
          <View style={styles.innerContainer}>
            {
              this.props.language === 'en' ?
                <Text style={styles.text}>Iznos godišnjeg </Text> :
                <Text style={styles.text}>Iznos godišnjeg poreza</Text>
            }
            <Text style={styles.number}>{calculation.annualTax.finnalAnnualTax && calculation.annualTax.finnalAnnualTax.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>

      </View>
    );
  }
}

const stateToProps = state => ({
  localeString: state.settingsReducer.localeString,
  language: state.settingsReducer.language
});

export default connect(stateToProps, null)(AnnualTaxResult);

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
