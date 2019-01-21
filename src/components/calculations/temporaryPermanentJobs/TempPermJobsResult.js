import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { metrics, colors, fonts } from '../../../theme';
import HeaderTitle from './HeaderTitle.js';

class SalaryResult extends Component {

  // static navigationOptions = ({ navigation }) => ({
  //   headerTitle: <HeaderTitle />
  // })
  render() {
    const { calculation, localeString } = this.props;
    console.log(calculation);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.itemContainerDark}>
          <View style={styles.innerContainer}>
            {
              this.props.language === 'en' ?
                <Text style={styles.text}>Gross</Text> :
                <Text style={styles.text}>Bruto zarada</Text>
            }
            <Text style={styles.number}>{calculation.tempPermJobsgross.value.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.innerContainer}>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>Doprinosi na zarade</Text>
            <Text style={styles.text}>na teret zaposlenog</Text>
          </View>
            <Text style={styles.number}>{calculation.tempPermJobsgross.firstData.employees.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.innerContainer}>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>Doprinosi na zarade</Text>
            <Text style={styles.text}>na teret poslodavca</Text>
          </View>
          <Text style={styles.number}>{calculation.tempPermJobsgross.secondData.employer.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Ukupan izdatak</Text>
          <Text style={styles.number}>{calculation.tempPermJobsgross.secondData.employerTotal.toLocaleString(localeString, { maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const stateToProps = state => ({
  // article: state.aboutReducer.article,
  language: state.settingsReducer.language

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
    fontSize: fonts.size.large,
    color: '#47d6e2'
  }
});
