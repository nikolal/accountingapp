import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  saveCalculation, saveGrossValueAction, saveNetValueAction,
  saveSalaryGrossNetBaseIndexAction, saveSalaryGrossNetTaxAction,saveSalaryGrossNetPensionContributionAction, saveSalaryGrossNetHealthContributionAction, saveSalaryGrossNetInsuranceContributionAction, saveSalaryGrossNetAction, saveSalaryGrossNetPensionAction, saveSalaryGrossNetTotalAction,
  saveSalaryNetGrossBaseIndexAction, saveSalaryNetGrossTaxAction, saveSalaryNetGrossPensionContributionAction, saveSalaryNetGrossHealthContributionAction, saveSalaryNetGrossInsuranceContributionAction, saveSalaryNetGrossAction, saveSalaryNetGrossPensionAction, saveSalaryNetGrossTotalAction, saveSalaryNetGrossBaseContributionAction
  } from './CalculationsContainer';
// import PropTypes from 'prop-types';
import { metrics, colors, fonts } from '../../theme';

const CalculationDetail = (props) => {

  const {
    calculation, saveGrossValueAction, saveNetValueAction,
    saveSalaryGrossNetBaseIndexAction, saveSalaryGrossNetTaxAction, saveSalaryGrossNetPensionContributionAction, saveSalaryGrossNetHealthContributionAction, saveSalaryGrossNetInsuranceContributionAction, saveSalaryGrossNetAction, saveSalaryGrossNetPensionAction, saveSalaryGrossNetTotalAction,
    saveSalaryNetGrossBaseIndexAction, saveSalaryNetGrossTaxAction, saveSalaryNetGrossPensionContributionAction, saveSalaryNetGrossHealthContributionAction, saveSalaryNetGrossInsuranceContributionAction, saveSalaryNetGrossAction, saveSalaryNetGrossPensionAction, saveSalaryNetGrossTotalAction, saveSalaryNetGrossBaseContributionAction
   } = props; //eslint-disable-line

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
    saveSalaryGrossNetBaseIndexAction(saveSalaryGrossNetBaseIndex(val));
    saveSalaryGrossNetTaxAction(saveSalaryGrossNetTax(val));
    saveSalaryGrossNetPensionContributionAction(saveSalaryGrossNetPensionContribution(val));
    saveSalaryGrossNetHealthContributionAction(saveSalaryGrossNetHealthContribution(val));
    saveSalaryGrossNetInsuranceContributionAction(saveSalaryGrossNetInsuranceContribution(val));
    saveSalaryGrossNetAction(val - (saveSalaryGrossNetTax(val) - (saveSalaryGrossNetPensionContribution(val) + saveSalaryGrossNetHealthContribution(val) + saveSalaryGrossNetInsuranceContribution(val))));
    saveSalaryGrossNetPensionAction(saveSalaryGrossNetPension(val));
    saveSalaryGrossNetTotalAction(saveSalaryGrossNetTotal(val));
  };

  const saveSalaryGrossNetBaseIndex = val => (val - 15000);
  const saveSalaryGrossNetTax = val => ((val - 15000) * 0.1);
  const saveSalaryGrossNetPensionContribution = val => (val * 0.14);
  const saveSalaryGrossNetHealthContribution = val => (val * 0.0515);
  const saveSalaryGrossNetInsuranceContribution = val => (val * 0.0075);
  const saveSalaryGrossNetPension = val => (val * 0.12);
  const saveSalaryGrossNetTotal = val => (val + saveSalaryGrossNetPension(val) + saveSalaryGrossNetHealthContribution(val) + saveSalaryGrossNetInsuranceContribution(val));

  // Salary net to gross

  const calculculateSalaryNetToGross = val => {
    saveSalaryNetGrossBaseIndexAction(saveSalaryNetGrossBaseIndex(val));
    saveSalaryNetGrossTaxAction(saveSalaryNetGrossTax(val));
    saveSalaryNetGrossBaseContributionAction(saveSalaryNetGrossBaseContribution(val));
    saveSalaryNetGrossPensionContributionAction(saveSalaryNetGrossPensionContribution(val));
    saveSalaryNetGrossHealthContributionAction(saveSalaryNetGrossHealthContribution(val));
    saveSalaryNetGrossInsuranceContributionAction(saveSalaryNetGrossInsuranceContribution(val));
    saveSalaryNetGrossTotalAction(saveSalaryNetGross(val) + saveSalaryNetGrossPension(val) + saveSalaryNetGrossHealthContribution(val) + saveSalaryNetGrossInsuranceContribution(val));
    saveSalaryNetGrossPensionAction(saveSalaryNetGrossPension(val));
    saveSalaryNetGrossAction(saveSalaryNetGross(val));
  };


  const saveSalaryNetGrossBaseIndex = val => saveSalaryNetGross(val) - 15000;
  const saveSalaryNetGrossTax = val => (saveSalaryNetGross(val) - 15000) * 0.1;
  const saveSalaryNetGrossBaseContribution = val => saveSalaryNetGross(val) < calculation.grossSalary.maxBaseContributionIndex ? saveSalaryNetGross(val) : calculation.grossSalary.maxBaseContributionIndex;
  const saveSalaryNetGrossPensionContribution = val => (saveSalaryNetGrossBaseContribution(val) * 0.14);
  const saveSalaryNetGrossHealthContribution = val => (saveSalaryNetGrossBaseContribution(val) * 0.0515);
  const saveSalaryNetGrossInsuranceContribution = val => (saveSalaryNetGrossBaseContribution(val) * 0.0075);
  const saveSalaryNetGrossPension = val => (saveSalaryNetGrossBaseContribution(val) * 0.12);
  const saveSalaryNetGross = val => {
    return (
      val > (calculation.grossSalary.maxBaseContributionIndex - (323320 - 15000) * 0.12 - calculation.grossSalary.maxBaseContributionIndex * 0.179) ?
        (((val - (15000 * 0.1)) + (0.199 * calculation.grossSalary.maxBaseContributionIndex))) / 0.9 :
        (val - 15000 * 0.1) / 0.701
    );
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
  // Salary gross to net
  saveSalaryGrossNetBaseIndexAction: bindActionCreators(saveSalaryGrossNetBaseIndexAction, dispatch),
  saveSalaryGrossNetTaxAction: bindActionCreators(saveSalaryGrossNetTaxAction, dispatch),
  saveSalaryGrossNetPensionContributionAction: bindActionCreators(saveSalaryGrossNetPensionContributionAction, dispatch),
  saveSalaryGrossNetHealthContributionAction: bindActionCreators(saveSalaryGrossNetHealthContributionAction, dispatch),
  saveSalaryGrossNetInsuranceContributionAction: bindActionCreators(saveSalaryGrossNetInsuranceContributionAction, dispatch),
  saveSalaryGrossNetAction: bindActionCreators(saveSalaryGrossNetAction, dispatch),
  saveSalaryGrossNetPensionAction: bindActionCreators(saveSalaryGrossNetPensionAction, dispatch),
  saveSalaryGrossNetTotalAction: bindActionCreators(saveSalaryGrossNetTotalAction, dispatch),
 // Salary net to gross
  saveSalaryNetGrossBaseIndexAction: bindActionCreators(saveSalaryNetGrossBaseIndexAction, dispatch),
  saveSalaryNetGrossTaxAction: bindActionCreators(saveSalaryNetGrossTaxAction, dispatch),
  saveSalaryNetGrossPensionContributionAction: bindActionCreators(saveSalaryNetGrossPensionContributionAction, dispatch),
  saveSalaryNetGrossHealthContributionAction: bindActionCreators(saveSalaryNetGrossHealthContributionAction, dispatch),
  saveSalaryNetGrossInsuranceContributionAction: bindActionCreators(saveSalaryNetGrossInsuranceContributionAction, dispatch),
  saveSalaryNetGrossAction: bindActionCreators(saveSalaryNetGrossAction, dispatch),
  saveSalaryNetGrossPensionAction: bindActionCreators(saveSalaryNetGrossPensionAction, dispatch),
  saveSalaryNetGrossTotalAction: bindActionCreators(saveSalaryNetGrossTotalAction, dispatch),
  saveSalaryNetGrossBaseContributionAction: bindActionCreators(saveSalaryNetGrossBaseContributionAction, dispatch),


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
