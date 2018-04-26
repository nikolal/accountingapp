import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveCalculation, saveInputValue, calculate } from './CalculationsContainer';
import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';

const CalculationDetail = ({ calculation, saveInputValue, calculate }) => {

  const calculateValue = (val) =>
    calculate(calculation.func(Number(val)))

  const saveInput = (value) =>
    saveInputValue(value);

  return (
    <View>
      <Text>{calculation.name}</Text>
      <Text>{calculation.description}</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={saveInput}
        value={calculation.input}
        keyboardType="numeric"
      />
      <Text>{calculation.value}</Text>
      <TouchableOpacity onPress={() => calculateValue(calculation.input)}><Text>Izracunaj</Text></TouchableOpacity>
    </View>
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  item: {

  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: metrics.smallBorder,
    marginHorizontal: metrics.medium
  }
})
