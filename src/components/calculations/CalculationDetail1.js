import React, { Component } from 'react';
// import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  resetAllValuesAction, switchTypeAction, saveCalculation, saveGrossValueAction, saveNetValueAction, saveSalaryGrossNetTotalNetActon, saveInputFamilyAction, saveInputLeseAction,
  saveSalaryGrossNetBaseIndexAction, saveSalaryGrossNetSocialBaseAction, saveSalaryGrossNetTaxAction,saveSalaryGrossNetPensionContributionAction, saveSalaryGrossNetHealthContributionAction, saveSalaryGrossNetInsuranceContributionAction, saveSalaryGrossNetAction, saveSalaryGrossNetPensionAction, saveSalaryGrossNetTotalAction, totalSalaryGrossToNetContributionsAction, totalSalaryGrossToNetContributionsEmployerAction, totalSalaryGrossToNetContributionsEmployeeAction,
  saveSalaryNetGrossBaseIndexAction, saveSalaryNetGrossTaxAction, saveSalaryNetGrossPensionContributionAction, saveSalaryNetGrossHealthContributionAction, saveSalaryNetGrossInsuranceContributionAction, saveSalaryNetGrossAction, saveSalaryNetGrossPensionAction, saveSalaryNetGrossContributionEmployerAction, saveSalaryNetGrossContributionEmployeeAction, saveSalaryNetGrossTotalAction, saveSalaryNetGrossBaseContributionAction, saveSalaryNetGrossTotalCostAction,
  tempPermJobsGrossToNetAction, saveTempPermJobsAction, tempPermJobsNetAction, tempPermJobsTaxAction, tempPermJobsPension14Action, tempPermJobsHealthAction, tempPermJobsNezAction, tempPermJobsPension12Action, tempPermJobsemployeesAction, tempPermJobsemployerAction, tempPermJobsEmployerTotalAction,
  switchTax, switchTaxPio, switchTaxPioHealth, saveContractPioTaxAction, contractPioTaxGrossAction, contractPioTaxNontaxableAction, contractPioTaxBaseAction, contractPioTaxTaxAction, contractPioTaxPensionAction,
  savePioTaxHealthAction, contractPioHealthTaxGrossAction, contractPioHealthTaxNontaxableAction, contractPioHealthTaxBaseAction, contractPioHealthTaxTaxAction, contractPioHealthTaxPensionAction, contractPioHealthTaxContributionAction,
  saveContractTaxAction, contractTaxGrossAction, contractTaxNontaxableAction, contractTaxBaseAction, contractTaxTaxAction,
  saveAllowanceHomeAction, allowanceHomeGrossAction, allowanceHomeTaxBaseAction, allowanceHomeTaxAction, saveAllowanceAwayAction, allowanceAwayTaxBaseAction, allowanceAwayGrossAction, allowanceAwayTaxAction,
  saveAnnualTaxAction, annualGrossAction, baseForTaxAction, taxOnEarningAction, baseForSocialContributionAction, annualPensionAction, annualHealthAction, annualInsuranceAction, annualEmployerPensionAction, annualEmployerHealthAction, annualEmployerInsuranceAction,
  annualTotalValueAction, contributionsEmployeesAction, incomeTaxAction, baseAnnualTaxAction, annualCalculatedOption3Action, calculateFinalAnnulTaxAction, annualTaxValueTotalAction, annualAllAction, annualTaxEmployeesAction, calculateFamilyNumberAction, personalDeductionsAction, finalAnnualTaxActioin,
  saveLeaseAction, calculateCourseEuroAction, rsdConvertedActioin, grossInputValueAction, euroInputValueAction, calculateGrossLeaseAction, calculateNonTaxableLeaseAction, calculateBaseLeaseAction, calculateLeaseTaxFinalAction
  } from './CalculationsContainer';
import SalaryCalculator from './salary/SalaryCalculator';
import TemporaryPermanentJobsCalculator from './temporaryPermanentJobs/TemporaryPermanentJobsCalculator';
import ContractPioTax from './contract/ContractPioTax';
import ContractTaxPioHealth from './contract/ContractTaxPioHealth';
import ContractTax from './contract/ContractTax';
import Allowance from './allowance/Allowance';
import AnnualTax from './annual/AnnualTax';
import Lease from './lease/Lease';


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
    this.props.calculation.func === 'contractTax' ?
      this.contractTax(val) :
    this.props.calculation.func === 'allowance' ?
      this.allowanceCalculator(val) :
    this.props.calculation.func === 'annualTax' ?
      this.annualTaxCalculator(val) :
    this.props.calculation.func === 'lease' ?
      this.leaseCalculator(val) :
    null;
  };

  calculateValueInput2 = val => {
    this.setState({ showResult: true });
    this.props.calculation.func === 'annualTax' ?
      this.saveFamilyNumber(val) :
    this.props.calculation.func === 'lease' ?
      this.saveCourseEuro(val) :
    null;
  }

  saveFamilyNumber = val => {
    this.props.calculateFamilyNumberAction(this.calculateFamilyNumber(val));
    this.props.personalDeductionsAction(this.personalDeductions(val));
  };

  saveCourseEuro = val => {
    this.props.calculateCourseEuroAction(this.calculateCourseEuro(val));
  }

  calculateFamilyNumber = val => (val * 123532);
  personalDeductions = val => (this.calculateFamilyNumber(val) + 329419)

  calculateCourseEuro = val => (val + 1)


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
    this.props.saveSalaryGrossNetSocialBaseAction(this.saveSalaryGrossNetSocialBase(val));
    this.props.saveSalaryGrossNetTaxAction(this.saveSalaryGrossNetTax(val));
    this.props.saveSalaryGrossNetPensionContributionAction(this.saveSalaryGrossNetPensionContribution(val));
    this.props.saveSalaryGrossNetHealthContributionAction(this.saveSalaryGrossNetHealthContribution(val));
    this.props.saveSalaryGrossNetInsuranceContributionAction(this.saveSalaryGrossNetInsuranceContribution(val));
    this.props.saveSalaryGrossNetAction(val - (this.saveSalaryGrossNetTax(val) - (this.saveSalaryGrossNetPensionContribution(val) + this.saveSalaryGrossNetHealthContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val))));
    this.props.saveSalaryGrossNetPensionAction(this.saveSalaryGrossNetPension(val));
    this.props.saveSalaryGrossNetTotalAction(this.saveSalaryGrossNetTotal(val));
    this.props.saveSalaryGrossNetTotalNetActon(this.saveSalaryGrossNetTotalNet(val));
    this.props.totalSalaryGrossToNetContributionsAction(this.totalSalaryGrossToNetContributions(val));
    this.props.totalSalaryGrossToNetContributionsEmployerAction(this.totalSalaryGrossToNetContributionsEmployer(val));
    this.props.totalSalaryGrossToNetContributionsEmployeeAction(this.totalSalaryGrossToNetContributionsEmployee(val));
  };

  saveSalaryGrossNetBaseIndex = val => (val - 15300); // D15 - H4
  saveSalaryGrossNetTax = val => ((val - 15300) * 0.1); // D16 (10%)
  saveSalaryGrossNetSocialBase = val => (val < 341725 ? val : 341725) // uslov
  saveSalaryGrossNetPensionContribution = val => (this.saveSalaryGrossNetSocialBase(val) * 0.14); //PIO
  saveSalaryGrossNetHealthContribution = val => (this.saveSalaryGrossNetSocialBase(val) * 0.0515); // zdravstveni
  saveSalaryGrossNetInsuranceContribution = val => (this.saveSalaryGrossNetSocialBase(val) * 0.0075); // nezaposlenost

  saveSalaryGrossNetPension = val => (this.saveSalaryGrossNetSocialBase(val) * 0.12); // PIO - zaposleni

  saveSalaryGrossNetTotal = val => (val + this.saveSalaryGrossNetPension(val) + this.saveSalaryGrossNetHealthContribution(val)); // D31

  saveSalaryGrossNetTotalNet = val => (val - this.saveSalaryGrossNetTax(val) - (this.saveSalaryGrossNetPensionContribution(val) + this.saveSalaryGrossNetHealthContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val))); // = D25

  totalSalaryGrossToNetContributions = val => (this.saveSalaryGrossNetPension(val) + this.saveSalaryGrossNetPensionContribution(val) + this.saveSalaryGrossNetHealthContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val))

  totalSalaryGrossToNetContributionsEmployer = val => (this.saveSalaryGrossNetPension(val) + this.saveSalaryGrossNetHealthContribution(val)) // D27
  totalSalaryGrossToNetContributionsEmployee = val => (this.saveSalaryGrossNetPensionContribution(val) + this.saveSalaryGrossNetHealthContribution(val) + this.saveSalaryGrossNetInsuranceContribution(val)) // D21

  // Salary net to gross

  calculculateSalaryNetToGross = val => {
    this.props.saveSalaryNetGrossBaseIndexAction(this.saveSalaryNetGrossBaseIndex(val));
    this.props.saveSalaryNetGrossTaxAction(this.saveSalaryNetGrossTax(val));
    this.props.saveSalaryNetGrossBaseContributionAction(this.saveSalaryNetGrossBaseContribution(val));
    this.props.saveSalaryNetGrossPensionContributionAction(this.saveSalaryNetGrossPensionContribution(val));
    this.props.saveSalaryNetGrossHealthContributionAction(this.saveSalaryNetGrossHealthContribution(val));
    this.props.saveSalaryNetGrossInsuranceContributionAction(this.saveSalaryNetGrossInsuranceContribution(val));
    this.props.saveSalaryNetGrossPensionAction(this.saveSalaryNetGrossPension(val));
    this.props.saveSalaryNetGrossContributionEmployerAction(this.saveSalaryNetGrossContributionEmployer(val));
    this.props.saveSalaryNetGrossContributionEmployeeAction(this.saveSalaryNetGrossContributionEmployee(val));
    this.props.saveSalaryNetGrossAction(this.saveSalaryNetGross(val));
    this.props.saveSalaryNetGrossTotalCostAction(this.saveSalaryNetGrossTotalCost(val));
  };

  saveSalaryNetGrossBaseIndex = val => this.saveSalaryNetGross(val) - 15300; // D14 - H4
  saveSalaryNetGrossTax = val => (this.saveSalaryNetGross(val) - 15300) * 0.1; // D15 x 10%
  saveSalaryNetGrossBaseContribution = val => (this.saveSalaryNetGross(val) < 341725 ? this.saveSalaryNetGross(val) : 341725) // D19
  saveSalaryNetGrossPensionContribution = val => (this.saveSalaryNetGrossBaseContribution(val) * 0.14);
  saveSalaryNetGrossHealthContribution = val => (this.saveSalaryNetGrossBaseContribution(val) * 0.0515);
  saveSalaryNetGrossInsuranceContribution = val => (this.saveSalaryNetGrossBaseContribution(val) * 0.0075);
  saveSalaryNetGrossPension = val => (this.saveSalaryNetGrossBaseContribution(val) * 0.12);
  saveSalaryNetGross = val => (val > 232660.33 ? ((((val - (15300 * 0.1)) + (0.199 * 341725))) / 0.9) : ((val - 15300 * 0.1) / 0.701)) //D14
  saveSalaryNetGrossContributionEmployee = val => (this.saveSalaryNetGrossPension(val) + this.saveSalaryNetGrossHealthContribution(val)) // poslodavac
  saveSalaryNetGrossContributionEmployer = val => (this.saveSalaryNetGrossPensionContribution(val) + this.saveSalaryNetGrossHealthContribution(val) + this.saveSalaryNetGrossInsuranceContribution(val)) // zaposleni
  saveSalaryNetGrossTotalCost = val => (this.saveSalaryNetGross(val) + this.saveSalaryNetGrossPension(val) + this.saveSalaryNetGrossHealthContribution(val))



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
    this.props.calculation.func === 'contractTax' ?
      this.props.saveContractTaxAction(Number(value)) :

    this.props.calculation.func === 'allowance' ?
      this.props.calculation.type === 'allowanceHome' ?
        this.props.saveAllowanceHomeAction(Number(value)) :
      this.props.calculation.type === 'allowanceAway' ?
        this.props.saveAllowanceAwayAction(Number(value)) :
        null :
      this.props.calculation.func === 'annualTax' ?
        this.props.saveAnnualTaxAction(Number(value)) :
      this.props.calculation.func === 'lease' ?
        this.props.saveLeaseAction(Number(value)) :
      null;
  };

  saveInputFamily = value => {
    this.props.calculation.func === 'annualTax' ?
      this.props.saveInputFamilyAction(Number(value)) :
    this.props.calculation.func === 'lease' ?
      this.props.saveInputLeseAction(Number(value)) :
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
    // this.props.tempPermJobsNezAction(this.tempPermJobsNez(val));
    this.props.tempPermJobsPension12Action(this.tempPermJobsPension12(val));
    this.props.tempPermJobsemployeesAction(this.tempPermJobsemployees(val));
    this.props.tempPermJobsemployerAction(this.tempPermJobsemployer(val));
    this.props.tempPermJobsEmployerTotalAction(this.tempPermJobsEmployerTotal(val));

  };

  tempPermJobsGrossToNet = val => (val / 0.701)
  tempPermJobsNet = val => (val)
  tempPermJobsTax = val => ((val / 0.701) * 0.10)
  tempPermJobsPension14 = val => ((val / 0.701) * 0.14)
  tempPermJobsHealth = val => ((val / 0.701) * 0.0515)
  // tempPermJobsNez = val => ((val / 0.701) * 0.0075)
  tempPermJobsPension12 = val => ((val / 0.701) * 0.12)
  tempPermJobsemployees = val => (this.tempPermJobsTax(val) + this.tempPermJobsPension14(val) + this.tempPermJobsHealth(val))
  tempPermJobsemployer = val => (this.tempPermJobsPension12(val) + this.tempPermJobsHealth(val))
  tempPermJobsEmployerTotal = val => (this.tempPermJobsGrossToNet(val) + this.tempPermJobsemployer(val))

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

  switchTax = (func, nameEn, nameRs) => this.props.switchTax(func, nameEn, nameRs);
  // switchTaxPio = (val) => this.props.switchTaxPio(val);
  // switchTaxPioHealth = (val) => this.props.switchTaxPioHealth(val);

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

  allowanceHomeTaxBase = val => (val - 2349)
  allowanceHomeGross = val => (val < 2303 ? 0 : ((val - 2349) * 1.111111111))
  allowanceHomeTax = val => (val < 2303 ? 0 : (this.allowanceHomeGross(val) * 0.1))

  // Away
  calculateAllowancesAway = val => {
    this.props.allowanceAwayTaxBaseAction(this.allowanceAwayTaxBase(val));
    this.props.allowanceAwayGrossAction(this.allowanceAwayGross(val));
    this.props.allowanceAwayTaxAction(this.allowanceAwayTax(val));
  };

  allowanceAwayTaxBase = val => (val - 50)
  allowanceAwayGross = val => (val < 50 ? 0 : (this.allowanceAwayTaxBase(val) * 1.111111111))
  allowanceAwayTax = val => (val < 50 ? 0 : (this.allowanceAwayGross(val) * 0.1))


  /********
  * ANNUAL TAX
  ********/

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
    this.props.contributionsEmployeesAction(this.contributionsEmployees(val));


    this.props.annualCalculatedOption3Action(this.izracunajProcenteOpcije3(val));
    this.props.calculateFinalAnnulTaxAction(this.calculateFinalAnnulTax(val));
  };



  annualGross = val => (val > 232660.33 ? ((((val - (15300 * 0.1)) + (0.199 * 329330))) / 0.9) : ((val - 15300 * 0.1) / 0.701)) // Bruto
  baseForTax = val => (this.annualGross(val) - 15300); // Osnovica za obracun poreza na zarade
  taxOnEarning = val => (this.baseForTax(val) * 0.1); // Porez na zarade 10%
  baseForSocialContribution = val => (this.annualGross(val) < 329330 ? this.annualGross(val) : 329330) // Osnovica za obracun socijalnih doprinosa
  annualPension = val => (this.baseForSocialContribution(val) * 0.14);
  annualHealth = val => (this.baseForSocialContribution(val) * 0.0515);
  annualInsurance = val => (this.baseForSocialContribution(val) * 0.0075);
  annualEmployerPension = val => (this.baseForSocialContribution(val) * 0.12);
  annualEmployerHealth = val => (this.baseForSocialContribution(val) * 0.0515);
  annualEmployerInsurance = val => (this.baseForSocialContribution(val) * 0.0075);
  annualTotalValue = val => (this.annualGross(val) + this.annualEmployerPension(val) + this.annualEmployerHealth(val) + this.annualEmployerInsurance(val)); // ukupan obracun

  contributionsEmployees = val => ((val * 12) - (15300 * 12)); // Godisnji neto, neoporezivo

  dohodakZaOporezivanje = val => (this.contributionsEmployees(val) - 2470644) // dohodak na oporezivanje - (B5-F2)

  calculateFinalAnnulTax = val => (this.dohodakZaOporezivanje(val) < 0 ? 0 : this.calculateFinalAnnul(val)) // ? u minusu porez je 0 : POCETAK


  licniOdbici = () => (329419 + (this.props.calculation.input2 * 123532))

  calculateFinalAnnul = val => (this.licniOdbici() < (this.dohodakZaOporezivanje(val) / 2) ? this.uslovOpcije1(val) : this.opcije2DrugiSlucaj(val))

  uslovOpcije1 = val => (this.dohodakZaOporezivanje(val) - this.licniOdbici()) < 4941288 ? ((this.dohodakZaOporezivanje(val) - this.licniOdbici()) * 0.1) : this.izracunajProcenteOpcije3(val)

  opcije2DrugiSlucaj = val => (this.dohodakZaOporezivanje(val) / 2) < 4941288 ? (this.dohodakZaOporezivanje(val) / 2) * 0.1 : this.izracunajProcenteOpcije3(val)

  //
  izracunajProcenteOpcije3 = val => {
    return (
      (((this.dohodakZaOporezivanje(val) - this.licniOdbici() - 4941288) * 0.15)) + (4941288 * 0.1)
    );
  }


/********
* LEASE
********/

// nije final, ovaj samo mnozi euro sa koeficijentom - promenio Bora, hoce u dinarima
// calculateFinaLease = val => {
//   this.props.rsdConvertedActioin(this.leaseConverted(val));
// }

// leaseConverted = val => (this.grossInputValue(this.props.calculation.input) * (this.euroInputValue(this.props.calculation.input2)))


  leaseCalculator = val => {
    this.props.grossInputValueAction(this.grossInputValue(val));
    // this.props.euroInputValueAction(this.euroInputValue(val));
    this.props.calculateGrossLeaseAction(this.calculateGrossLease(val));
    this.props.calculateNonTaxableLeaseAction(this.calculateNonTaxableLease(val));
    this.props.calculateBaseLeaseAction(this.calculateBaseLease(val));
    this.props.calculateLeaseTaxFinalAction(this.calculateLeaseTaxFinal(val));
  }

  grossInputValue = val => val
  // euroInputValue = val => val
  calculateGrossLease = val => (this.grossInputValue(val) * 1.17647059)
  calculateNonTaxableLease = val => (this.calculateGrossLease(val) * 0.25)
  calculateBaseLease = val => (this.calculateGrossLease(val) - this.calculateNonTaxableLease(val))
  calculateLeaseTaxFinal = val => (this.calculateBaseLease(val) * 0.20)

  closeModal = () => this.setState({ showResult: false })

  render () {
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
          closeModal={this.closeModal}
        /> :
      this.props.calculation.func === 'temporaryPermanentJobsCalculator' ?
        <TemporaryPermanentJobsCalculator
          calculation = {this.props.calculation}
          saveInput = {this.saveInput}
          showResult={this.state.showResult}
          calculateValue ={this.calculateValue}
          closeModal={this.closeModal}

        /> :
      // this.props.calculation.func === 'contractPioTax' ?
      //   <ContractPioTax
      //     calculation = {this.props.calculation}
      //     saveInput = {this.saveInput}
      //     showResult={this.state.showResult}
      //     calculateValue ={this.calculateValue}
      //   /> :
      // this.props.calculation.func === 'contractPioTaxHealth' ?
      //   <ContractTaxPioHealth
      //     calculation = {this.props.calculation}
      //     saveInput = {this.saveInput}
      //     showResult={this.state.showResult}
      //     calculateValue ={this.calculateValue}
      //   /> :
        this.props.calculation.func === 'contractTax' ||
        this.props.calculation.func === 'contractPioTax' ||
        this.props.calculation.func === 'contractPioTaxHealth' ?
          <ContractTax
            calculation = {this.props.calculation}
            saveInput = {this.saveInput}
            showResult={this.state.showResult}
            calculateValue ={this.calculateValue}
            switchTax={this.switchTax}
            closeModal={this.closeModal}
          /> :
        this.props.calculation.func === 'allowance' ?
          <Allowance
            calculation = {this.props.calculation}
            saveInput = {this.saveInput}
            showResult={this.state.showResult}
            calculateValue ={this.calculateValue}
            switchingAllowanceHomeAway={this.switchingAllowanceHomeAway}
            switchingAllowanceAwayHome={this.switchingAllowanceAwayHome}
            closeModal={this.closeModal}
          /> :
        this.props.calculation.func === 'annualTax' ?
          <AnnualTax
            calculation = {this.props.calculation}
            saveInput = {this.saveInput}
            showResult={this.state.showResult}
            calculateValue ={this.calculateValue}
            calculateValueInput2={this.calculateValueInput2}
            saveInputFamily={this.saveInputFamily}
            baseForTaxation={this.baseForTaxation}
            finalTax={this.finalTax}
            calculateFinalAnnualTax={this.calculateFinalAnnualTax}
            closeModal={this.closeModal}
          /> :
        this.props.calculation.func === 'lease' ?
          <Lease
            calculation = {this.props.calculation}
            saveInput = {this.saveInput}
            showResult={this.state.showResult}
            calculateValue ={this.calculateValue}
            calculateValueInput2={this.calculateValueInput2}
            saveInputFamily={this.saveInputFamily}
            // baseForTaxation={this.baseForTaxation}
            // finalTax={this.finalTax}
            calculateFinaLease={this.calculateFinaLease}
            closeModal={this.closeModal}
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
  saveInputLeseAction: bindActionCreators(saveInputLeseAction, dispatch),


  // switchGrossNetAction: bindActionCreators(switchGrossNetAction, dispatch),

  // Salary gross to net
  saveSalaryGrossNetBaseIndexAction: bindActionCreators(saveSalaryGrossNetBaseIndexAction, dispatch),

  saveSalaryGrossNetSocialBaseAction: bindActionCreators(saveSalaryGrossNetSocialBaseAction, dispatch),


  saveSalaryGrossNetTaxAction: bindActionCreators(saveSalaryGrossNetTaxAction, dispatch),
  saveSalaryGrossNetPensionContributionAction: bindActionCreators(saveSalaryGrossNetPensionContributionAction, dispatch),
  saveSalaryGrossNetHealthContributionAction: bindActionCreators(saveSalaryGrossNetHealthContributionAction, dispatch),
  saveSalaryGrossNetInsuranceContributionAction: bindActionCreators(saveSalaryGrossNetInsuranceContributionAction, dispatch),
  saveSalaryGrossNetAction: bindActionCreators(saveSalaryGrossNetAction, dispatch),
  saveSalaryGrossNetPensionAction: bindActionCreators(saveSalaryGrossNetPensionAction, dispatch),
  saveSalaryGrossNetTotalAction: bindActionCreators(saveSalaryGrossNetTotalAction, dispatch),
  saveSalaryGrossNetTotalNetActon: bindActionCreators(saveSalaryGrossNetTotalNetActon, dispatch),
  totalSalaryGrossToNetContributionsAction: bindActionCreators(totalSalaryGrossToNetContributionsAction, dispatch),
  totalSalaryGrossToNetContributionsEmployerAction: bindActionCreators(totalSalaryGrossToNetContributionsEmployerAction, dispatch),
  totalSalaryGrossToNetContributionsEmployeeAction: bindActionCreators(totalSalaryGrossToNetContributionsEmployeeAction, dispatch),


 // Salary net to gross
  saveSalaryNetGrossBaseIndexAction: bindActionCreators(saveSalaryNetGrossBaseIndexAction, dispatch),
  saveSalaryNetGrossTaxAction: bindActionCreators(saveSalaryNetGrossTaxAction, dispatch),
  saveSalaryNetGrossPensionContributionAction: bindActionCreators(saveSalaryNetGrossPensionContributionAction, dispatch),
  saveSalaryNetGrossHealthContributionAction: bindActionCreators(saveSalaryNetGrossHealthContributionAction, dispatch),
  saveSalaryNetGrossInsuranceContributionAction: bindActionCreators(saveSalaryNetGrossInsuranceContributionAction, dispatch),
  saveSalaryNetGrossAction: bindActionCreators(saveSalaryNetGrossAction, dispatch),
  saveSalaryNetGrossPensionAction: bindActionCreators(saveSalaryNetGrossPensionAction, dispatch),

  saveSalaryNetGrossContributionEmployerAction: bindActionCreators(saveSalaryNetGrossContributionEmployerAction, dispatch),

  saveSalaryNetGrossContributionEmployeeAction: bindActionCreators(saveSalaryNetGrossContributionEmployeeAction, dispatch),




  saveSalaryNetGrossTotalAction: bindActionCreators(saveSalaryNetGrossTotalAction, dispatch),
  saveSalaryNetGrossBaseContributionAction: bindActionCreators(saveSalaryNetGrossBaseContributionAction, dispatch),
  saveSalaryNetGrossTotalCostAction: bindActionCreators(saveSalaryNetGrossTotalCostAction, dispatch),




  // Temporary permanent JOBS
  saveTempPermJobsAction: bindActionCreators(saveTempPermJobsAction, dispatch),
  tempPermJobsGrossToNetAction: bindActionCreators(tempPermJobsGrossToNetAction, dispatch),
  tempPermJobsNetAction: bindActionCreators(tempPermJobsNetAction, dispatch),
  tempPermJobsTaxAction: bindActionCreators(tempPermJobsTaxAction, dispatch),
  tempPermJobsPension14Action: bindActionCreators(tempPermJobsPension14Action, dispatch),
  tempPermJobsHealthAction: bindActionCreators(tempPermJobsHealthAction, dispatch),
  // tempPermJobsNezAction: bindActionCreators(tempPermJobsNezAction, dispatch),
  tempPermJobsPension12Action: bindActionCreators(tempPermJobsPension12Action, dispatch),
  tempPermJobsemployeesAction: bindActionCreators(tempPermJobsemployeesAction, dispatch),
  tempPermJobsemployerAction: bindActionCreators(tempPermJobsemployerAction, dispatch),
  tempPermJobsEmployerTotalAction: bindActionCreators(tempPermJobsEmployerTotalAction, dispatch),
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
  switchTax: bindActionCreators(switchTax, dispatch),
  // switchTaxPio: bindActionCreators(switchTaxPio, dispatch),
  // switchTaxPioHealth: bindActionCreators(switchTaxPioHealth, dispatch),


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
  contributionsEmployeesAction: bindActionCreators(contributionsEmployeesAction, dispatch),

  incomeTaxAction: bindActionCreators(incomeTaxAction, dispatch),
  baseAnnualTaxAction: bindActionCreators(baseAnnualTaxAction, dispatch),
  annualCalculatedOption3Action: bindActionCreators(annualCalculatedOption3Action, dispatch),
  calculateFinalAnnulTaxAction: bindActionCreators(calculateFinalAnnulTaxAction, dispatch),





  annualTaxValueTotalAction: bindActionCreators(annualTaxValueTotalAction, dispatch),
  annualAllAction: bindActionCreators(annualAllAction, dispatch),
  annualTaxEmployeesAction: bindActionCreators(annualTaxEmployeesAction, dispatch),
  calculateFamilyNumberAction: bindActionCreators(calculateFamilyNumberAction, dispatch),
  personalDeductionsAction: bindActionCreators(personalDeductionsAction, dispatch),
  finalAnnualTaxActioin: bindActionCreators(finalAnnualTaxActioin, dispatch),

  // LEASE
  saveLeaseAction: bindActionCreators(saveLeaseAction, dispatch),
  calculateCourseEuroAction: bindActionCreators(calculateCourseEuroAction, dispatch),
  rsdConvertedActioin: bindActionCreators(rsdConvertedActioin, dispatch),
  grossInputValueAction: bindActionCreators(grossInputValueAction, dispatch),
  euroInputValueAction: bindActionCreators(euroInputValueAction, dispatch),
  calculateGrossLeaseAction: bindActionCreators(calculateGrossLeaseAction, dispatch),
  calculateNonTaxableLeaseAction: bindActionCreators(calculateNonTaxableLeaseAction, dispatch),
  calculateBaseLeaseAction: bindActionCreators(calculateBaseLeaseAction, dispatch),
  calculateLeaseTaxFinalAction: bindActionCreators(calculateLeaseTaxFinalAction, dispatch),





});


export default connect(stateToProps, dispatchToProps)(CalculationDetail1);
