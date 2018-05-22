import React, { Component } from 'react';
// import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  saveCalculation, saveGrossValueAction, saveNetValueAction, switchGrossNetAction, saveSalaryGrossNetTotalNetActon,
  saveSalaryGrossNetBaseIndexAction, saveSalaryGrossNetTaxAction,saveSalaryGrossNetPensionContributionAction, saveSalaryGrossNetHealthContributionAction, saveSalaryGrossNetInsuranceContributionAction, saveSalaryGrossNetAction, saveSalaryGrossNetPensionAction, saveSalaryGrossNetTotalAction, totalSalaryGrossToNetContributionsAction,
  saveSalaryNetGrossBaseIndexAction, saveSalaryNetGrossTaxAction, saveSalaryNetGrossPensionContributionAction, saveSalaryNetGrossHealthContributionAction, saveSalaryNetGrossInsuranceContributionAction, saveSalaryNetGrossAction, saveSalaryNetGrossPensionAction, saveSalaryNetGrossTotalAction, saveSalaryNetGrossBaseContributionAction,
  tempPermJobsGrossToNetAction, saveTempPermJobsAction, tempPermJobsNetAction, tempPermJobsTaxAction, tempPermJobsPension14Action, tempPermJobsHealthAction, tempPermJobsNezAction, tempPermJobsPension12Action,
  saveContractPioTaxAction, contractPioTaxGrossAction, contractPioTaxNontaxableAction, contractPioTaxBaseAction, contractPioTaxTaxAction, contractPioTaxPensionAction
  } from './CalculationsContainer';
import SalaryCalculator from './SalaryCalculator';
import TemporaryPermanentJobsCalculator from './TemporaryPermanentJobsCalculator';
import ContractPioTax from './ContractPioTax';

class CalculationDetail1 extends Component {

  state = {
    grossToNet: true,
    showResult: false
  }

  switchingGrossToNet = () => this.setState({ grossToNet: true})

  switchNetToGross = () => this.setState({ grossToNet: false})

  calculateValue = (val) => {
    this.setState({ showResult: true });
    this.props.calculation.func === 'salaryCalculator' ?
      this.calculateSalary(val) :
    this.props.calculation.func === 'temporaryPermanentJobsCalculator' ?
      this.tempPermJobsFunc(val) :
    this.props.calculation.func === 'contractPioTax' ?
      this.contractPioTax(val)
    :
    null;
  };

  // switchGrossNet = value => this.props.switchGrossNetAction(value)

  /********
  * SALARY
  ********/

  calculateSalary = val => {
    this.state.grossToNet === true ?
      this.calculateSalaryGrossToNet(val) :
      this.calculculateSalaryNetToGross(val);
    // null;
  };

  // calculateSalary = val => {
  //   this.props.calculation.type === 'grossToNet' ?
  //     this.calculateSalaryGrossToNet(val) :
  //   this.props.calculation.type === 'netToGross' ?
  //     this.calculculateSalaryNetToGross(val) :
  //   null;
  // };

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
    this.props.saveSalaryGrossNetTotalNetActon(this.saveSalaryGrossNetTotalNet(val));
    this.props.totalSalaryGrossToNetContributionsAction(this.totalSalaryGrossToNetContributions(val));
  };

  saveSalaryGrossNetBaseIndex = val => (val - 15000);
  saveSalaryGrossNetTax = val => ((val - 15000) * 0.1);
  saveSalaryGrossNetPensionContribution = val => (val * 0.14);
  saveSalaryGrossNetHealthContribution = val => (val * 0.0515);
  saveSalaryGrossNetInsuranceContribution = val => (val * 0.0075);
  saveSalaryGrossNetPension = val => (val * 0.12);
  saveSalaryGrossNetTotal = val => (val + this.saveSalaryGrossNetPension(val) + this.saveSalaryGrossNetHealthContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val));
  saveSalaryGrossNetTotalNet = val => (val - this.saveSalaryGrossNetTax(val) - (this.saveSalaryGrossNetPensionContribution(val) + this.saveSalaryGrossNetHealthContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val)));
  totalSalaryGrossToNetContributions = val => (this.saveSalaryGrossNetPension(val) + this.saveSalaryGrossNetPensionContribution(val) + this.saveSalaryGrossNetHealthContribution(val) + this.saveSalaryGrossNetHealthContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val))

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
    this.props.calculation.func === 'temporaryPermanentJobsCalculator' ?
      this.props.saveTempPermJobsAction(Number(value)) :
    this.props.calculation.func === 'contractPioTax' ?
      this.props.saveContractPioTaxAction(Number(value)) :
      null;
  };

  /********
  * TEMPORARY PERMANENT JOBS
  ********/

  tempPermJobsFunc = val => {
    this.props.tempPermJobsGrossToNetAction(this.tempPermJobsGrossToNet(val));
    this.props.tempPermJobsNetAction(this.tempPermJobsNet(val));
    this.props.tempPermJobsTaxAction(this.tempPermJobsTax(val));
    this.props.tempPermJobsPension14Action(this.tempPermJobsPension14(val));
    this.props.tempPermJobsHealthAction(this.tempPermJobsHealth(val));
    this.props.tempPermJobsNezAction(this.tempPermJobsNez(val));
    this.props.tempPermJobsPension12Action(this.tempPermJobsPension12(val));
  };

  tempPermJobsGrossToNet = val => (val / 0.701)
  tempPermJobsNet = val => (val)
  tempPermJobsTax = val => ((val / 0.701) * 0.10)
  tempPermJobsPension14 = val => ((val / 0.701) * 0.14)
  tempPermJobsHealth = val => ((val / 0.701) * 0.0515)
  tempPermJobsNez = val => ((val / 0.701) * 0.0075)
  tempPermJobsPension12 = val => ((val / 0.701) * 0.12)

  /********
  * CONTRACT - PIO and TAX
  ********/

  contractPioTax = val => {
    this.props.contractPioTaxGrossAction(this.contractPioTaxGross(val));
    this.props.contractPioTaxNontaxableAction(this.contractPioTaxnontaxable(val));
    this.props.contractPioTaxBaseAction(this.contractPioTaxBase(val));
    this.props.contractPioTaxTaxAction(this.contractPioTaxTax(val));
    this.props.contractPioTaxPensionAction(this.contractPioTaxPension(val));


  };

  contractPioTaxGross = val => (val * 1.58227848)
  contractPioTaxnontaxable = val => (this.contractPioTaxGross(val) * 0.20)
  contractPioTaxBase = val => (this.contractPioTaxGross(val) - this.contractPioTaxnontaxable(val))
  contractPioTaxTax = val => (this.contractPioTaxBase(val) * 0.20)
  contractPioTaxPension = val => (this.contractPioTaxBase(val) * 0.26)


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
          switchGrossNet={this.switchGrossNet}
          showResult={this.state.showResult}
          grossToNet={this.state.grossToNet}
          switchingGrossToNet={this.switchingGrossToNet}
          switchNetToGross={this.switchNetToGross}
          // switchGrossNetAction={this.props.switchGrossNetAction}
        /> :
      this.props.calculation.func === 'temporaryPermanentJobsCalculator' ?
        <TemporaryPermanentJobsCalculator
          calculation = {this.props.calculation}
          saveInput = {this.saveInput}
          showResult={this.state.showResult}
          calculateValue ={this.calculateValue}
        /> :
      this.props.calculation.func === 'contractPioTax' ?
        <ContractPioTax
          calculation = {this.props.calculation}
          saveInput = {this.saveInput}
          showResult={this.state.showResult}
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
  switchGrossNetAction: bindActionCreators(switchGrossNetAction, dispatch),

  // Salary gross to net
  saveSalaryGrossNetBaseIndexAction: bindActionCreators(saveSalaryGrossNetBaseIndexAction, dispatch),
  saveSalaryGrossNetTaxAction: bindActionCreators(saveSalaryGrossNetTaxAction, dispatch),
  saveSalaryGrossNetPensionContributionAction: bindActionCreators(saveSalaryGrossNetPensionContributionAction, dispatch),
  saveSalaryGrossNetHealthContributionAction: bindActionCreators(saveSalaryGrossNetHealthContributionAction, dispatch),
  saveSalaryGrossNetInsuranceContributionAction: bindActionCreators(saveSalaryGrossNetInsuranceContributionAction, dispatch),
  saveSalaryGrossNetAction: bindActionCreators(saveSalaryGrossNetAction, dispatch),
  saveSalaryGrossNetPensionAction: bindActionCreators(saveSalaryGrossNetPensionAction, dispatch),
  saveSalaryGrossNetTotalAction: bindActionCreators(saveSalaryGrossNetTotalAction, dispatch),
  saveSalaryGrossNetTotalNetActon: bindActionCreators(saveSalaryGrossNetTotalNetActon, dispatch),
  totalSalaryGrossToNetContributionsAction: bindActionCreators(totalSalaryGrossToNetContributionsAction, dispatch),

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

  // Temporary permanent JOBS
  saveTempPermJobsAction: bindActionCreators(saveTempPermJobsAction, dispatch),
  tempPermJobsGrossToNetAction: bindActionCreators(tempPermJobsGrossToNetAction, dispatch),
  tempPermJobsNetAction: bindActionCreators(tempPermJobsNetAction, dispatch),
  tempPermJobsTaxAction: bindActionCreators(tempPermJobsTaxAction, dispatch),
  tempPermJobsPension14Action: bindActionCreators(tempPermJobsPension14Action, dispatch),
  tempPermJobsHealthAction: bindActionCreators(tempPermJobsHealthAction, dispatch),
  tempPermJobsNezAction: bindActionCreators(tempPermJobsNezAction, dispatch),
  tempPermJobsPension12Action: bindActionCreators(tempPermJobsPension12Action, dispatch),

// Contcract Pio and Tax
  saveContractPioTaxAction: bindActionCreators(saveContractPioTaxAction, dispatch),
  contractPioTaxGrossAction: bindActionCreators(contractPioTaxGrossAction, dispatch),
  contractPioTaxNontaxableAction: bindActionCreators(contractPioTaxNontaxableAction, dispatch),
  contractPioTaxBaseAction: bindActionCreators(contractPioTaxBaseAction, dispatch),
  contractPioTaxTaxAction: bindActionCreators(contractPioTaxTaxAction, dispatch),
  contractPioTaxPensionAction: bindActionCreators(contractPioTaxPensionAction, dispatch),



});

export default connect(stateToProps, dispatchToProps)(CalculationDetail1);
