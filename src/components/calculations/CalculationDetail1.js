import React, { Component } from 'react';
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

import SalaryCalculator from './SalaryCalculator';

class CalculationDetail1 extends Component {

  // state = {
  //   button = grossToNet
  // }

  calculateValue = (val) => {
    this.props.calculation.func === 'salaryCalculator' ?
      this.calculateSalary(val) :
      null;
  };

  /********
  * SALARY
  ********/

  calculateSalary = val => {
    this.props.calculation.type === 'grossToNet' ?
      this.calculateSalaryGrossToNet(val) :
    this.props.calculation.type === 'netToGross' ?
      this.calculculateSalaryNetToGross(val) :
    null;
  };

  // Salary gross to net

  calculateSalaryGrossToNet = val => {
    this.props.saveSalaryGrossNetBaseIndexAction(this.saveSalaryGrossNetBaseIndex(val));
    this.props.saveSalaryGrossNetTaxAction(this.saveSalaryGrossNetTax(val));
    this.props.saveSalaryGrossNetPensionContributionAction(this.saveSalaryGrossNetPensionContribution(val));
    this.props.saveSalaryGrossNetHealthContributionAction(this.saveSalaryGrossNetHealthContribution(val));
    this.props.saveSalaryGrossNetInsuranceContributionAction(this.saveSalaryGrossNetInsuranceContribution(val));
    this.props.saveSalaryGrossNetAction(val - (this.saveSalaryGrossNetTax(val) - (this.saveSalaryGrossNetPensionContribution(val) + this.saveSalaryGrossNetHealthContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val))));
    this.props.saveSalaryGrossNetPensionAction(this.saveSalaryGrossNetPension(val));
    this.props.saveSalaryGrossNetTotalAction(this.saveSalaryGrossNetTotal(val));
  };

  saveSalaryGrossNetBaseIndex = val => (val - 15000);
  saveSalaryGrossNetTax = val => ((val - 15000) * 0.1);
  saveSalaryGrossNetPensionContribution = val => (val * 0.14);
  saveSalaryGrossNetHealthContribution = val => (val * 0.0515);
  saveSalaryGrossNetInsuranceContribution = val => (val * 0.0075);
  saveSalaryGrossNetPension = val => (val * 0.12);
  saveSalaryGrossNetTotal = val => (val + this.saveSalaryGrossNetPension(val) + this.saveSalaryGrossNetHealthContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val));

  // Salary net to gross

  calculculateSalaryNetToGross = val => {
    this.props.saveSalaryNetGrossBaseIndexAction(this.saveSalaryNetGrossBaseIndex(val));
    this.props.saveSalaryNetGrossTaxAction(this.saveSalaryNetGrossTax(val));
    this.props.saveSalaryNetGrossBaseContributionAction(this.saveSalaryNetGrossBaseContribution(val));
    this.props.saveSalaryNetGrossPensionContributionAction(this.saveSalaryNetGrossPensionContribution(val));
    this.props.saveSalaryNetGrossHealthContributionAction(this.saveSalaryNetGrossHealthContribution(val));
    this.props.saveSalaryNetGrossInsuranceContributionAction(this.saveSalaryNetGrossInsuranceContribution(val));
    this.props.saveSalaryNetGrossTotalAction(this.saveSalaryNetGross(val) + this.saveSalaryNetGrossPension(val) + this.saveSalaryNetGrossHealthContribution(val) + this.saveSalaryNetGrossInsuranceContribution(val));
    this.props.saveSalaryNetGrossPensionAction(this.saveSalaryNetGrossPension(val));
    this.props.saveSalaryNetGrossAction(this.saveSalaryNetGross(val));
  };


  saveSalaryNetGrossBaseIndex = val => this.saveSalaryNetGross(val) - 15000;
  saveSalaryNetGrossTax = val => (this.saveSalaryNetGross(val) - 15000) * 0.1;
  saveSalaryNetGrossBaseContribution = val => this.saveSalaryNetGross(val) < this.props.calculation.grossSalary.maxBaseContributionIndex ? this.saveSalaryNetGross(val) : this.props.calculation.grossSalary.maxBaseContributionIndex;
  saveSalaryNetGrossPensionContribution = val => (this.saveSalaryNetGrossBaseContribution(val) * 0.14);
  saveSalaryNetGrossHealthContribution = val => (this.saveSalaryNetGrossBaseContribution(val) * 0.0515);
  saveSalaryNetGrossInsuranceContribution = val => (this.saveSalaryNetGrossBaseContribution(val) * 0.0075);
  saveSalaryNetGrossPension = val => (this.saveSalaryNetGrossBaseContribution(val) * 0.12);
  saveSalaryNetGross = val => {
    return (
      val > (this.props.calculation.grossSalary.maxBaseContributionIndex - (323320 - 15000) * 0.12 - this.props.calculation.grossSalary.maxBaseContributionIndex * 0.179) ?
        (((val - (15000 * 0.1)) + (0.199 * this.props.calculation.grossSalary.maxBaseContributionIndex))) / 0.9 :
        (val - 15000 * 0.1) / 0.701
    );
  };


  saveInput = (value) => {
    this.props.calculation.func === 'salaryCalculator' ?
      this.props.calculation.type === 'grossToNet' ?
        this.props.saveGrossValueAction(Number(value)) :
      this.props.calculation.type === 'netToGross' ?
        this.props.saveNetValueAction(Number(value)) :
        null :
      null;
  };


  render () {
    console.log(this.props.calculation);

    // const {
    //   calculation, saveGrossValueAction, saveNetValueAction, //eslint-disable-line
    //   saveSalaryGrossNetBaseIndexAction, saveSalaryGrossNetTaxAction, saveSalaryGrossNetPensionContributionAction, saveSalaryGrossNetHealthContributionAction, saveSalaryGrossNetInsuranceContributionAction, saveSalaryGrossNetAction, saveSalaryGrossNetPensionAction, saveSalaryGrossNetTotalAction, //eslint-disable-line
    //   saveSalaryNetGrossBaseIndexAction, saveSalaryNetGrossTaxAction, saveSalaryNetGrossPensionContributionAction, saveSalaryNetGrossHealthContributionAction, saveSalaryNetGrossInsuranceContributionAction, saveSalaryNetGrossAction, saveSalaryNetGrossPensionAction, saveSalaryNetGrossTotalAction, saveSalaryNetGrossBaseContributionAction //eslint-disable-line
    // } = this.props; //eslint-disable-line

    return (
      this.props.calculation.func === 'salaryCalculator' ?
        <SalaryCalculator
          calculation = {this.props.calculation}
          saveInput = {this.saveInput}
          calculateValue ={this.calculateValue}
        />
        : null
    );
  }
}

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

export default connect(stateToProps, dispatchToProps)(CalculationDetail1);
