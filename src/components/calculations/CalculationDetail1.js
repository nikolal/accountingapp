import React, { Component } from 'react';
// import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  resetAllValuesAction, switchTypeAction, saveCalculation, saveGrossValueAction, saveNetValueAction, saveSalaryGrossNetTotalNetActon, saveInputFamilyAction,
  saveSalaryGrossNetBaseIndexAction, saveSalaryGrossNetTaxAction,saveSalaryGrossNetPensionContributionAction, saveSalaryGrossNetHealthContributionAction, saveSalaryGrossNetInsuranceContributionAction, saveSalaryGrossNetAction, saveSalaryGrossNetPensionAction, saveSalaryGrossNetTotalAction, totalSalaryGrossToNetContributionsAction,
  saveSalaryNetGrossBaseIndexAction, saveSalaryNetGrossTaxAction, saveSalaryNetGrossPensionContributionAction, saveSalaryNetGrossHealthContributionAction, saveSalaryNetGrossInsuranceContributionAction, saveSalaryNetGrossAction, saveSalaryNetGrossPensionAction, saveSalaryNetGrossTotalAction, saveSalaryNetGrossBaseContributionAction,
  tempPermJobsGrossToNetAction, saveTempPermJobsAction, tempPermJobsNetAction, tempPermJobsTaxAction, tempPermJobsPension14Action, tempPermJobsHealthAction, tempPermJobsNezAction, tempPermJobsPension12Action,
  saveContractPioTaxAction, contractPioTaxGrossAction, contractPioTaxNontaxableAction, contractPioTaxBaseAction, contractPioTaxTaxAction, contractPioTaxPensionAction,
  savePioTaxHealthAction, contractPioHealthTaxGrossAction, contractPioHealthTaxNontaxableAction, contractPioHealthTaxBaseAction, contractPioHealthTaxTaxAction, contractPioHealthTaxPensionAction, contractPioHealthTaxContributionAction,
  saveContractTaxAction, contractTaxGrossAction, contractTaxNontaxableAction, contractTaxBaseAction, contractTaxTaxAction,
  saveAllowanceHomeAction, allowanceHomeGrossAction, allowanceHomeTaxBaseAction, allowanceHomeTaxAction, saveAllowanceAwayAction, allowanceAwayTaxBaseAction, allowanceAwayGrossAction, allowanceAwayTaxAction,
  saveAnnualTaxAction, annualGrossAction, baseForTaxAction, taxOnEarningAction, baseForSocialContributionAction, annualPensionAction, annualHealthAction, annualInsuranceAction, annualEmployerPensionAction, annualEmployerHealthAction, annualEmployerInsuranceAction,
  annualTotalValueAction, monthlyNet12ValueAction, contributionsEmployeesAction, annualTaxValueTotalAction, annualAllAction, annualTaxEmployeesAction, calculateFamilyNumberAction, personalDeductionsAction, baseForTaxationAction
  } from './CalculationsContainer';
import SalaryCalculator from './SalaryCalculator';
import TemporaryPermanentJobsCalculator from './TemporaryPermanentJobsCalculator';
import ContractPioTax from './ContractPioTax';
import ContractTaxPioHealth from './ContractTaxPioHealth';
import ContractTax from './ContractTax';
import Allowance from './Allowance';
import AnnualTax from './AnnualTax';


class CalculationDetail1 extends Component {

  state = {
    // grossToNet: true,
    showResult: false,
    // allowanceHomeAway: true
  }

  switchingGrossToNet = (val) => this.props.switchTypeAction(val);
  switchNetToGross = (val) => this.props.switchTypeAction(val);

  switchingAllowanceHomeAway = val => this.props.switchTypeAction(val);
  switchingAllowanceAwayHome = val => this.props.switchTypeAction(val);

  calculateValue = (val) => {
    this.setState({ showResult: true });
    this.props.calculation.func === 'salaryCalculator' ?
      this.calculateSalary(val) :
    this.props.calculation.func === 'temporaryPermanentJobsCalculator' ?
      this.tempPermJobsFunc(val) :
    this.props.calculation.func === 'contractPioTax' ?
      this.contractPioTax(val) :
    this.props.calculation.func === 'contractPioTaxHealth' ?
      this.contractPioHealthTax(val) :
    this.props.calculation.func === 'concractTax' ?
      this.contractTax(val) :
    this.props.calculation.func === 'allowance' ?
      this.allowanceCalculator(val) :
    this.props.calculation.func === 'annualTax' ?
      this.annualTaxCalculator(val) :
    null;
  };

  calculateValueInput2 = val => {
    this.setState({ showResult: true });
    this.props.calculation.func === 'annualTax' ?
      this.saveFamilyNumber(val) : null;
  }

  saveFamilyNumber = val => {
    this.props.calculateFamilyNumberAction(this.calculateFamilyNumber(val));
    this.props.personalDeductionsAction(this.personalDeductions(val));
  };

  calculateFamilyNumber = val => (val * 118757);
  personalDeductions = val => (this.calculateFamilyNumber(val) + 316685)

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

  allowanceCalculator = val => {
    this.props.calculation.type === 'allowanceHome' ?
      this.calculateAllowancesHome(val) :
    this.props.calculation.type === 'allowanceAway' ?
      this.calculateAllowancesAway(val) :
      null;
  };

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
    this.props.totalSalaryGrossToNetContributionsAction(this.totalSalaryGrossToNetContributions(val));

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
    this.props.calculation.func === 'contractPioTaxHealth' ?
      this.props.savePioTaxHealthAction(Number(value)) :
    this.props.calculation.func === 'concractTax' ?
      this.props.saveContractTaxAction(Number(value)) :

    this.props.calculation.func === 'allowance' ?
      this.props.calculation.type === 'allowanceHome' ?
        this.props.saveAllowanceHomeAction(Number(value)) :
      this.props.calculation.type === 'allowanceAway' ?
        this.props.saveAllowanceAwayAction(Number(value)) :
        null :
      this.props.calculation.func === 'annualTax' ?
        this.props.saveAnnualTaxAction(Number(value)) :
      null;
  };

  saveInputFamily = value => {
    this.props.saveInputFamilyAction(Number(value));
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

  /********
  * CONTRACT - PIO, TAX AND HEALTH
  ********/

contractPioHealthTax = val => {
  this.props.contractPioHealthTaxGrossAction(this.contractPioHealthTaxGross(val));
  this.props.contractPioHealthTaxNontaxableAction(this.contractPioHealthTaxnontaxable(val));
  this.props.contractPioHealthTaxBaseAction(this.contractPioHealthTaxBase(val));
  this.props.contractPioHealthTaxTaxAction(this.contractPioHealthTaxTax(val));
  this.props.contractPioHealthTaxPensionAction(this.contractPioHealthTaxPension(val));
  this.props.contractPioHealthTaxContributionAction(this.contractPioHealthTaxContribution(val));
};

contractPioHealthTaxGross = val => (val * 1.81950509)
contractPioHealthTaxnontaxable = val => (this.contractPioHealthTaxGross(val) * 0.20)
contractPioHealthTaxBase = val => (this.contractPioHealthTaxGross(val) - this.contractPioHealthTaxnontaxable(val))
contractPioHealthTaxTax = val => (this.contractPioHealthTaxBase(val) * 0.20)
contractPioHealthTaxPension = val => (this.contractPioHealthTaxBase(val) * 0.26)
contractPioHealthTaxContribution = val => (this.contractPioHealthTaxBase(val) * 0.103)

  /********
  * CONTRACT - TAX
  ********/

contractTax = val => {
  this.props.contractTaxGrossAction(this.contractTaxGross(val));
  this.props.contractTaxNontaxableAction(this.contractTaxnontaxable(val));
  this.props.contractTaxBaseAction(this.contractTaxBase(val));
  this.props.contractTaxTaxAction(this.contractTaxTax(val));
};

contractTaxGross = val => (val * 1.1904762)
contractTaxnontaxable = val => (this.contractTaxGross(val) * 0.20)
contractTaxBase = val => (this.contractTaxGross(val) - this.contractTaxnontaxable(val))
contractTaxTax = val => (this.contractTaxBase(val) * 0.20)


  /********
  * ALLOWANCE
  ********/

// Home
calculateAllowancesHome = val => {
  this.props.allowanceHomeTaxBaseAction(this.allowanceHomeTaxBase(val));
  this.props.allowanceHomeGrossAction(this.allowanceHomeGross(val));
  this.props.allowanceHomeTaxAction(this.allowanceHomeTax(val));
};

allowanceHomeTaxBase = val => (val - 2303)
allowanceHomeGross = val => ((val - 2303) * 1.111111111)
allowanceHomeTax = val => (this.allowanceHomeGross(val) * 0.1)

// Away
calculateAllowancesAway = val => {
  this.props.allowanceAwayTaxBaseAction(this.allowanceAwayTaxBase(val));
  this.props.allowanceAwayGrossAction(this.allowanceAwayGross(val));
  this.props.allowanceAwayTaxAction(this.allowanceAwayTax(val));
};

allowanceAwayTaxBase = val => (val - 50)
allowanceAwayGross = val => (this.allowanceAwayTaxBase(val) * 1.111111111)
allowanceAwayTax = val => (this.allowanceAwayGross(val) * 0.1)

// Annual tax
annualTaxCalculator = val => {
  this.props.annualGrossAction(this.annualGross(val));
  this.props.baseForTaxAction(this.baseForTax(val));
  this.props.taxOnEarningAction(this.taxOnEarning(val));
  this.props.baseForSocialContributionAction(this.baseForSocialContribution(val));
  this.props.annualPensionAction(this.annualPension(val));
  this.props.annualHealthAction(this.annualHealth(val));
  this.props.annualInsuranceAction(this.annualInsurance(val));
  this.props.annualEmployerPensionAction(this.annualEmployerPension(val));
  this.props.annualEmployerHealthAction(this.annualEmployerHealth(val));
  this.props.annualEmployerInsuranceAction(this.annualEmployerInsurance(val));
  this.props.annualTotalValueAction(this.annualTotalValue(val));
  this.props.monthlyNet12ValueAction(this.monthlyNet12Value(val));
  this.props.contributionsEmployeesAction(this.contributionsEmployees(val));
  this.props.annualTaxValueTotalAction(this.annualTaxValueTotal(val));
  this.props.annualAllAction(this.annualAll(val));
  this.props.annualTaxEmployeesAction(this.annualTaxEmployees(val));

  // this.props.baseForTaxationAction(this.baseForTaxation(val));
};

annualGross = val => (val > 232660.33 ? ((((val - (15000 * 0.1)) + (0.199 * 329330))) / 0.9) : ((val - 15000 * 0.1) / 0.701))
baseForTax = val => (this.annualGross(val) - 15000);
taxOnEarning = val => (this.baseForTax(val) * 0.1);
baseForSocialContribution = val => (this.annualGross(val) < 329330 ? this.annualGross(val) : 329330)
annualPension = val => (this.baseForSocialContribution(val) * 0.14);
annualHealth = val => (this.baseForSocialContribution(val) * 0.0515);
annualInsurance = val => (this.baseForSocialContribution(val) * 0.0075);
annualEmployerPension = val => (this.baseForSocialContribution(val) * 0.12);
annualEmployerHealth = val => (this.baseForSocialContribution(val) * 0.0515);
annualEmployerInsurance = val => (this.baseForSocialContribution(val) * 0.0075);
annualTotalValue = val => (this.annualGross(val) + this.annualEmployerPension(val) + this.annualEmployerHealth(val) + this.annualEmployerInsurance(val));
monthlyNet12Value = val => (val * 12);
contributionsEmployees = val => ((this.annualGross(val) * 12) - (15000 * 12));
annualTaxValueTotal = val => ((this.taxOnEarning(val) + (this.annualPension(val) + this.annualHealth(val) + this.annualInsurance(val))) * 12);
annualAll = val => (this.contributionsEmployees(val) - this.annualTaxValueTotal(val)); // toFixed(2)
annualTaxEmployees = val => (this.annualAll(val) < 2375136 ? 0 : this.biggerThan2375136Tax(val));
biggerThan2375136Tax = val => (this.annualAll(val) - 2375136);

// baseForTaxation = val => (this.annualTaxEmployees(val) - this.personalDeductions(val));




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
        /> :
      this.props.calculation.func === 'contractPioTaxHealth' ?
        <ContractTaxPioHealth
          calculation = {this.props.calculation}
          saveInput = {this.saveInput}
          showResult={this.state.showResult}
          calculateValue ={this.calculateValue}
        /> :
        this.props.calculation.func === 'concractTax' ?
          <ContractTax
            calculation = {this.props.calculation}
            saveInput = {this.saveInput}
            showResult={this.state.showResult}
            calculateValue ={this.calculateValue}
          /> :
        this.props.calculation.func === 'allowance' ?
          <Allowance
            calculation = {this.props.calculation}
            saveInput = {this.saveInput}
            showResult={this.state.showResult}
            calculateValue ={this.calculateValue}
            switchingAllowanceHomeAway={this.switchingAllowanceHomeAway}
            switchingAllowanceAwayHome={this.switchingAllowanceAwayHome}
          /> :
        this.props.calculation.func === 'annualTax' ?
          <AnnualTax
            calculation = {this.props.calculation}
            saveInput = {this.saveInput}
            showResult={this.state.showResult}
            calculateValue ={this.calculateValue}
            calculateValueInput2={this.calculateValueInput2}
            saveInputFamily={this.saveInputFamily}
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
  resetAllValuesAction: bindActionCreators(resetAllValuesAction, dispatch),
  switchTypeAction: bindActionCreators(switchTypeAction, dispatch),
  saveCalculation: bindActionCreators(saveCalculation, dispatch),
  saveGrossValueAction: bindActionCreators(saveGrossValueAction, dispatch),
  saveNetValueAction: bindActionCreators(saveNetValueAction, dispatch),
  saveInputFamilyAction: bindActionCreators(saveInputFamilyAction, dispatch),


  // switchGrossNetAction: bindActionCreators(switchGrossNetAction, dispatch),

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

// Contcract Pio, Tax and Health
  savePioTaxHealthAction: bindActionCreators(savePioTaxHealthAction, dispatch),
  contractPioHealthTaxGrossAction: bindActionCreators(contractPioHealthTaxGrossAction, dispatch),
  contractPioHealthTaxNontaxableAction: bindActionCreators(contractPioHealthTaxNontaxableAction, dispatch),
  contractPioHealthTaxBaseAction: bindActionCreators(contractPioHealthTaxBaseAction, dispatch),
  contractPioHealthTaxTaxAction: bindActionCreators(contractPioHealthTaxTaxAction, dispatch),
  contractPioHealthTaxPensionAction: bindActionCreators(contractPioHealthTaxPensionAction, dispatch),
  contractPioHealthTaxContributionAction: bindActionCreators(contractPioHealthTaxContributionAction, dispatch),

// Contcract Tax
  saveContractTaxAction: bindActionCreators(saveContractTaxAction, dispatch),
  contractTaxGrossAction: bindActionCreators(contractTaxGrossAction, dispatch),
  contractTaxNontaxableAction: bindActionCreators(contractTaxNontaxableAction, dispatch),
  contractTaxBaseAction: bindActionCreators(contractTaxBaseAction, dispatch),
  contractTaxTaxAction: bindActionCreators(contractTaxTaxAction, dispatch),

// Allowance - Home
  // saveAllowanceAction: bindActionCreators(saveAllowanceAction, dispatch),
  saveAllowanceHomeAction: bindActionCreators(saveAllowanceHomeAction, dispatch),
  allowanceHomeGrossAction: bindActionCreators(allowanceHomeGrossAction, dispatch),
  allowanceHomeTaxBaseAction: bindActionCreators(allowanceHomeTaxBaseAction, dispatch),
  allowanceHomeTaxAction: bindActionCreators(allowanceHomeTaxAction, dispatch),

// Allowance - Away
  allowanceAwayTaxBaseAction: bindActionCreators(allowanceAwayTaxBaseAction, dispatch),
  allowanceAwayGrossAction: bindActionCreators(allowanceAwayGrossAction, dispatch),
  allowanceAwayTaxAction: bindActionCreators(allowanceAwayTaxAction, dispatch),
  saveAllowanceAwayAction: bindActionCreators(saveAllowanceAwayAction, dispatch),

// Annual TAX
  saveAnnualTaxAction: bindActionCreators(saveAnnualTaxAction, dispatch),
  annualGrossAction: bindActionCreators(annualGrossAction, dispatch),
  baseForTaxAction: bindActionCreators(baseForTaxAction, dispatch),
  taxOnEarningAction: bindActionCreators(taxOnEarningAction, dispatch),
  baseForSocialContributionAction: bindActionCreators(baseForSocialContributionAction, dispatch),
  annualPensionAction: bindActionCreators(annualPensionAction, dispatch),
  annualHealthAction: bindActionCreators(annualHealthAction, dispatch),
  annualInsuranceAction: bindActionCreators(annualInsuranceAction, dispatch),
  annualEmployerPensionAction: bindActionCreators(annualEmployerPensionAction, dispatch),
  annualEmployerHealthAction: bindActionCreators(annualEmployerHealthAction, dispatch),
  annualEmployerInsuranceAction: bindActionCreators(annualEmployerInsuranceAction, dispatch),
  annualTotalValueAction: bindActionCreators(annualTotalValueAction, dispatch),
  monthlyNet12ValueAction: bindActionCreators(monthlyNet12ValueAction, dispatch),
  contributionsEmployeesAction: bindActionCreators(contributionsEmployeesAction, dispatch),
  annualTaxValueTotalAction: bindActionCreators(annualTaxValueTotalAction, dispatch),
  annualAllAction: bindActionCreators(annualAllAction, dispatch),
  annualTaxEmployeesAction: bindActionCreators(annualTaxEmployeesAction, dispatch),
  calculateFamilyNumberAction: bindActionCreators(calculateFamilyNumberAction, dispatch),
  personalDeductionsAction: bindActionCreators(personalDeductionsAction, dispatch),
  // baseForTaxationAction: bindActionCreators(baseForTaxationAction, dispatch),







});


export default connect(stateToProps, dispatchToProps)(CalculationDetail1);
