import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveCalculation, saveInputValue, calculate } from './CalculationsContainer';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';

const CalculationDetail = ({ calculation, saveInputValue, calculate }) => {

  const calculateValue = (val) =>
    <Text style={styles.valueResul}>{calculate(calculation.func(Number(val)))}</Text>;

  const saveInput = (value) =>
    saveInputValue(value);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inputsContainer}
        behavior="padding"
      >
        <Text style={styles.name}>{calculation.calculation}</Text>
        <Text style={styles.text}>Unesite bruto iznos plate na mesecnom nivou</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={saveInput}
          value={calculation.input}
          keyboardType="numeric"
        />
        <Text>{calculation.value}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => calculateValue(calculation.input)}>
          <Text style={styles.buttonText}>Izracunaj</Text>
        </TouchableOpacity>
        <Text style={styles.description}>{calculation.description}</Text>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const stateToProps = state => ({
  calculations: state.calculationsReducer.calculations,
  calculation: state.calculationsReducer.calculation
});

const dispatchToProps = dispatch => ({
  saveCalculation: bindActionCreators(saveCalculation, dispatch),
  saveInputValue: bindActionCreators(saveInputValue, dispatch),
  calculate: bindActionCreators(calculate, dispatch)
});

export default connect(stateToProps, dispatchToProps)(CalculationDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: metrics.medium,
    paddingHorizontal: metrics.large
  },
  name: {
    alignSelf: 'center',
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.lightBlue1,
    marginVertical: metrics.large
  },
  item: {
  },
  text: {
    fontFamily: 'openSansRegular',
    fontSize: fonts.size.medium,
    alignSelf: 'center',
    marginTop: metrics.large,
    color: colors.darkGrey
  },
  inputText: {
    height: 40,
    borderColor: colors.darkGrey,
    borderWidth: metrics.smallBorder,
    marginVertical: metrics.large,
    borderRadius: metrics.small
  },
  button: {
    backgroundColor: colors.lightBlue2,
    marginBottom: metrics.large,
    padding: metrics.medium,
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fonts.size.large,
    fontFamily: 'openSansBold',
    color: colors.white,
  },
  valueResul: {
    color: 'red'
  },
  description: {
    alignSelf: 'center',
    marginTop: metrics.large,
    color: colors.grey
  }
});
