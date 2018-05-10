import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveCalculation, saveGrossValueAction, saveNetValueAction, saveBaseSalaryIndexAction, saveSalaryTaxAction,saveSalaryGrossPensionAction, saveSalaryHealthAction, saveSalaryInsuranceAction, saveGrossToNetSalary, saveNetPensionAction, saveTotalSalaryAction } from './CalculationsContainer';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';

const CalculationDetail = (props) => {

  const { calculation, saveGrossValueAction, saveNetValueAction, saveBaseSalaryIndexAction, saveSalaryTaxAction, saveSalaryGrossPensionAction, saveSalaryHealthAction, saveSalaryInsuranceAction, saveGrossToNetSalary, saveNetPensionAction, saveTotalSalaryAction } = props; //eslint-disable-line

  const calculateValue = (val) => {
    calculation.func === 'salaryCalculator' ?
      calculateSalary(val) :
      null;
  };

  /********
  * SALARY
  ********/

  const calculateSalary = val => {
    calculation.type === 'grossToNet' ?
      calculateSalaryGrossToNet(val) :
    calculation.type === 'netToGross' ?
      calculculateSalaryNetToGross(val) :
    null;
  };

  // Salary gross to net

  const calculateSalaryGrossToNet = val => {
    saveBaseSalaryIndexAction(saveBaseSalaryIndex(val));
    saveSalaryTaxAction(saveSalaryTax(val));
    saveSalaryGrossPensionAction(saveSalaryGrossPension(val));
    saveSalaryHealthAction(saveSalaryHealth(val));
    saveSalaryInsuranceAction(saveSalaryInsurance(val));
    saveGrossToNetSalary(val - ((saveSalaryTax(val) + saveSalaryGrossPension(val) + saveSalaryHealth(val) + saveSalaryInsurance(val))));
    saveNetPensionAction(saveSalaryNetPension(val));
    saveTotalSalaryAction(saveTotalSalary(val));
  };

  const saveBaseSalaryIndex = val => (val * 0.85);
  const saveSalaryTax = val => ((val * 0.85) * 0.1);
  const saveSalaryGrossPension = val => (val * 0.14);
  const saveSalaryHealth = val => (val * 0.0515);
  const saveSalaryInsurance = val => (val * 0.0075);
  const saveSalaryNetPension = val => (val * 0.12);
  const saveTotalSalary = val => (val + saveSalaryNetPension(val) + saveSalaryHealth(val) + saveSalaryInsurance(val));

  // Salary net to gross

  const calculculateSalaryNetToGross = val => {
    return false;
  };

  const saveInput = (value) => {
    calculation.func === 'salaryCalculator' ?
      calculation.type === 'grossToNet' ?
        saveGrossValueAction(Number(value)) :
      calculation.type === 'netToGross' ?
        saveNetValueAction(Number(value)) :
        null :
      null;
  };

  console.log(calculation);
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
          value={calculation.input.toString()}
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
  saveGrossValueAction: bindActionCreators(saveGrossValueAction, dispatch),
  saveNetValueAction: bindActionCreators(saveNetValueAction, dispatch),
  saveBaseSalaryIndexAction: bindActionCreators(saveBaseSalaryIndexAction, dispatch),
  saveSalaryTaxAction: bindActionCreators(saveSalaryTaxAction, dispatch),
  saveSalaryGrossPensionAction: bindActionCreators(saveSalaryGrossPensionAction, dispatch),
  saveSalaryHealthAction: bindActionCreators(saveSalaryHealthAction, dispatch),
  saveSalaryInsuranceAction: bindActionCreators(saveSalaryInsuranceAction, dispatch),
  saveGrossToNetSalary: bindActionCreators(saveGrossToNetSalary, dispatch),
  saveNetPensionAction: bindActionCreators(saveNetPensionAction, dispatch),
  saveTotalSalaryAction: bindActionCreators(saveTotalSalaryAction, dispatch),
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
