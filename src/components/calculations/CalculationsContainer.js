// Actions
const CALCULATE = 'calculations/CALCULATE';
const SAVE_CALCULATION = 'calculations/SAVE_CALCULATION';
const SAVE_INPUT = 'calculations/SAVE_INPUT';
const SAVE_GROSS_VALUE_ACTION = 'calculations/SAVE_GROSS_VALUE_ACTION';
const SAVE_NET_VALUE_ACTION = 'calculations/SAVE_NET_VALUE_ACTION';
const SWITCH_GROSS_NET_ACTION = 'calculations/SWITCH_GROSS_NET_ACTION';
// salary gross to net
const SAVE_SALARY_GROSS_NET_BASE_INDEX_ACTION = 'calculations/SAVE_SALARY_GROSS_NET_BASE_INDEX_ACTION';
const SAVE_SALARY_GROSS_NET_TAX_ACTION = 'calculations/SAVE_SALARY_GROSS_NET_TAX_ACTION';
const SAVE_SALARY_GROSS_NET_PENSION_CONTRIBUTION_ACTION = 'calculations/SAVE_SALARY_GROSS_NET_PENSION_CONTRIBUTION_ACTION';
const SAVE_SALARY_GROSS_NET_HEALTH_CONTRIBUTION_ACTION = 'calculations/SAVE_SALARY_GROSS_NET_HEALTH_CONTRIBUTION_ACTION';
const SAVE_SALARY_GROSS_NET_INSURANCE_CONTRIBUTION_ACTION = 'calculations/SAVE_SALARY_GROSS_NET_INSURANCE_CONTRIBUTION_ACTION';
const SAVE_SALARY_GROSS_NET_ACTION = 'calculations/SAVE_SALARY_GROSS_NET_ACTION';
const SAVE_SALARY_GROSS_NET_PENSION_ACTION = 'calculations/SAVE_SALARY_GROSS_NET_PENSION_ACTION';
const SAVE_SALARY_GROSS_NET_TOTAL_ACTION = 'calculations/SAVE_SALARY_GROSS_NET_TOTAL_ACTION';
const SAVE_SALARY_GROSS_TO_NET_TOTAL_NET_ACTION = 'calculations/SAVE_SALARY_GROSS_TO_NET_TOTAL_NET_ACTION';
const TOTAL_SALARY_GROSS_TO_NET_CONTRIBUTIONSACTION = 'calculations/TOTAL_SALARY_GROSS_TO_NET_CONTRIBUTIONSACTION';
// salary net to gross
const SAVE_SALARY_NET_GROSS_BASE_INDEX_ACTION = 'calculations/SAVE_SALARY_NET_GROSS_BASE_INDEX_ACTION';
const SAVE_SALARY_NET_GROSS_TAX_ACTION = 'calculations/SAVE_SALARY_NET_GROSS_TAX_ACTION';
const SAVE_SALARY_NET_GROSS_PENSION_CONTRIBUTION_ACTION = 'calculations/SAVE_SALARY_NET_GROSS_PENSION_CONTRIBUTION_ACTION';
const SAVE_SALARY_NET_GROSS_HEALTH_CONTRIBUTION_ACTION = 'calculations/SAVE_SALARY_NET_GROSS_HEALTH_CONTRIBUTION_ACTION';
const SAVE_SALARY_NET_GROSS_INSURANCE_CONTRIBUTION_ACTION = 'calculations/SAVE_SALARY_NET_GROSS_INSURANCE_CONTRIBUTION_ACTION';
const SAVE_SALARY_NET_GROSS_ACTION = 'calculations/SAVE_SALARY_NET_GROSS_ACTION';
const SAVE_SALARY_NET_GROSS_PENSION_ACTION = 'calculations/SAVE_SALARY_NET_GROSS_PENSION_ACTION';
const SAVE_SALARY_NET_GROSS_TOTAL_ACTION = 'calculations/SAVE_SALARY_NET_GROSS_TOTAL_ACTION';
const SAVE_SALARY_NET_GROSS_BASE_CONTRIBUTION_ACTION = 'calculations/SAVE_SALARY_NET_GROSS_BASE_CONTRIBUTION_ACTION';
// Temporary Permanent JOBS
const SAVE_TEM_PERM_JOBS_ACTION = 'calculations/SAVE_TEM_PERM_JOBS_ACTION';
const SAVE_TEM_PERM_JOBS_GROSS_TO_NET_ACTION = 'calculations/SAVE_TEM_PERM_JOBS_GROSS_TO_NET_ACTION';
const SAVE_TEM_PERM_JOBS_NET_ACTION = 'calculations/SAVE_TEM_PERM_JOBS_NET_ACTION';
const SAVE_TEM_PERM_JOBS_TAX_ACTION = 'calculations/SAVE_TEM_PERM_JOBS_TAX_ACTION';
const SAVE_TEM_PERM_JOBS_PENSION14_ACTION = 'calculations/SAVE_TEM_PERM_JOBS_PENSION14_ACTION';
const SAVE_TEM_PERM_JOBS_HEALTH_ACTION = 'calculations/SAVE_TEM_PERM_JOBS_HEALTH_ACTION';
const SAVE_TEM_PERM_JOBS_NEZ_ACTION = 'calculations/SAVE_TEM_PERM_JOBS_NEZ_ACTION';
const SAVE_TEM_PERM_JOBS_PENSION12_ACTION = 'calculations/SAVE_TEM_PERM_JOBS_PENSION12_ACTION';

// Contcract Pio and Tax
const SAVE_CONTRACT_PIO_TAX_ACTION = 'calculations/SAVE_CONTRACT_PIO_TAX_ACTION';
const CONTRACT_PIO_TAX_GROSS_ACTION = 'calculations/CONTRACT_PIO_TAX_GROSS_ACTION';
const CONTRACT_PIO_TAX_NONTAXABLE_ACTION = 'calculations/CONTRACT_PIO_TAX_NONTAXABLE_ACTION';
const CONTRACT_PIO_TAX_BASE_ACTION = 'calculations/CONTRACT_PIO_TAX_BASE_ACTION';
const CONTRACT_PIO_TAX_TAX_ACTION = 'calculations/CONTRACT_PIO_TAX_TAX_ACTION';
const CONTRACT_PIO_TAX_PENSION_ACTION = 'calculations/CONTRACT_PIO_TAX_PENSION_ACTION';




// Initial State
const initialState = {
  calculations: [{
    name: 'Obracun zarada',
    calculation: 'OBRACUN ZARADA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: 'salaryCalculator',
    type: 'grossToNet',
    grossSalary: {
      value: null,
      baseSalaryIndex: null,
      tax: null,
      maxBaseContributionIndex: 329330,
      baseContributionIndex: null,
      socialContributions: {
        pensionContribution: null,
        healthContribution: null,
        insuranceContribution: null,
      }
      },
      netSalary: {
        value: null,
        socialContributions: {
          pensionContribution: null,
          healthContribution: null,
          insuranceContribution: null,
        }
      },
      totalSalary: null,
      totalContributions: null,
      totalNet: null,
      icon: 'calculator'
    },{
    name: 'Privremeni i povremeni poslovi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: 'temporaryPermanentJobsCalculator',
    type: 'tempPermJobs',
    value: '',
    tempPermJobsgross: {
      value: null,
      net: null,
      tax: null,
      firstData: {
        pension: null,
        health: null,
        nez: null
      },
      secondData: {
        pension: null,
        health: null,
        nez: null
      }
    },
    icon: 'briefcase'
  },{
    name: 'Ugovori o delu  ',
    nameExpl: '(kada se placa porez, PIO i zdravstvo)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: x => x + 2,
    type: 'blabla',
    value: '',
    icon: 'folder'
    },{
    name: 'Ugovor o delu',
    nameExpl: '(kada se placa porez, PIO)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: 'contractPioTax',
    type: 'blabla',
    value: '',
    concractPioTax: {
      value: null,
      coefficient: 1.58227848,
      gross: null,
      nontaxable: null,
      base: null,
      tax: null,
      pension: null,
    },
    icon: 'folder'
    },{
    name: 'Ugovor o delu ',
    nameExpl: '(kada se placa samo porez)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: x => x + 2,
    type: 'blabla',
    value: '',
    icon: 'folder'
    },
    {
    name: 'Godisnji porez',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: x => x + 2,
    type: 'blabla',
    value: '',
    icon: 'calendar'
  },{
    name: 'Dnevnice',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: x => x * 2,
    type: 'blabla',
    value: '',
    icon: 'wallet'
  },{
    name: 'Zakup fizickom licu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: x => x * 2,
    type: 'blabla',
    value: '',
    icon: 'user'
  }],
  calculation: {}
};

// Reducer
const calculationsReducer = (state = initialState, action) =>
  action.type === SAVE_CALCULATION ? ({
    ...state,
    calculation: action.item
  }) :
  action.type === SWITCH_GROSS_NET_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      type: action.value
    }
  }) :
  action.type === SAVE_GROSS_VALUE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value,
      grossSalary: {
        ...state.calculation.grossSalary,
        value: action.value
      }
    }
  }) :
  action.type === SAVE_NET_VALUE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value,
      netSalary: {
        ...state.calculation.netSalary,
        value: action.value
      }
    }
  }) :
  action.type === SAVE_SALARY_GROSS_NET_BASE_INDEX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        baseSalaryIndex: action.value
      }
    }
  }) :
  action.type === SAVE_SALARY_GROSS_NET_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        tax: action.value
      }
    }
  }) :
  action.type === SAVE_SALARY_GROSS_NET_PENSION_CONTRIBUTION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        socialContributions: {
          ...state.calculation.grossSalary.socialContributions,
          pensionContribution: action.value
        }
      }
    }
  }) :
  action.type === SAVE_SALARY_GROSS_NET_HEALTH_CONTRIBUTION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        socialContributions: {
          ...state.calculation.grossSalary.socialContributions,
          healthContribution: action.value
        }
      },
      netSalary: {
        ...state.calculation.netSalary,
        socialContributions: {
          ...state.calculation.netSalary.socialContributions,
          healthContribution: action.value
        }
      }
    }
  }) :
  action.type === SAVE_SALARY_GROSS_NET_INSURANCE_CONTRIBUTION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        socialContributions: {
          ...state.calculation.grossSalary.socialContributions,
          insuranceContribution: action.value
        }
      },
      netSalary: {
        ...state.calculation.netSalary,
        socialContributions: {
          ...state.calculation.netSalary.socialContributions,
          insuranceContribution: action.value
        }
      }
    }
  }) :
  action.type === SAVE_SALARY_GROSS_NET_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      netSalary: {
        ...state.calculation.netSalary,
        value: action.value
      }
    }
  }) :
  action.type === SAVE_SALARY_GROSS_NET_PENSION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      netSalary: {
        ...state.calculation.netSalary,
        socialContributions: {
          ...state.calculation.netSalary.socialContributions,
          pensionContribution: action.value
        }
      }
    }
  }) :
  action.type === SAVE_SALARY_GROSS_NET_TOTAL_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      totalSalary: action.value,
    }
  }) :
  action.type === TOTAL_SALARY_GROSS_TO_NET_CONTRIBUTIONSACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      totalContributions: action.value,
    }
  }) :
  action.type === SAVE_SALARY_GROSS_TO_NET_TOTAL_NET_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      totalNet: action.value,
    }
  }) :
  action.type === SAVE_SALARY_NET_GROSS_BASE_INDEX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        baseSalaryIndex: action.value
      }
    }
  }) :
  action.type === SAVE_SALARY_NET_GROSS_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        tax: action.value
      }
    }
  }) :
  action.type === SAVE_SALARY_NET_GROSS_BASE_CONTRIBUTION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        baseContributionIndex: action.value
      }
    }
  }) :
  action.type === SAVE_SALARY_NET_GROSS_PENSION_CONTRIBUTION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        socialContributions: {
          ...state.calculation.grossSalary.socialContributions,
          pensionContribution: action.value
        }
      }
    }
  }) :
  action.type === SAVE_SALARY_NET_GROSS_HEALTH_CONTRIBUTION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        socialContributions: {
          ...state.calculation.grossSalary.socialContributions,
          healthContribution: action.value
        }
      },
      netSalary: {
        ...state.calculation.netSalary,
        socialContributions: {
          ...state.calculation.netSalary.socialContributions,
          healthContribution: action.value
        }
      }
    }
  }) :
  action.type === SAVE_SALARY_NET_GROSS_INSURANCE_CONTRIBUTION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        socialContributions: {
          ...state.calculation.grossSalary.socialContributions,
          insuranceContribution: action.value
        }
      },
      netSalary: {
        ...state.calculation.netSalary,
        socialContributions: {
          ...state.calculation.netSalary.socialContributions,
          insuranceContribution: action.value
        }
      }
    }
  }) :
  action.type === SAVE_SALARY_NET_GROSS_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      netSalary: {
        ...state.calculation.netSalary,
        value: action.value
      }
    }
  }) :
  action.type === SAVE_SALARY_NET_GROSS_PENSION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      netSalary: {
        ...state.calculation.netSalary,
        socialContributions: {
          ...state.calculation.netSalary.socialContributions,
          pensionContribution: action.value
        }
      }
    }
  }) :
  action.type === SAVE_SALARY_NET_GROSS_TOTAL_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      totalSalary: action.value,
    }
  }) :
  // Permanent Temporary Jobs
  action.type === SAVE_TEM_PERM_JOBS_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value,
      tempPermJobsgross: {
        ...state.calculation.tempPermJobsgross,
        value: action.value
      }
    }
  }) :
  action.type === SAVE_TEM_PERM_JOBS_GROSS_TO_NET_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      tempPermJobsgross:{
        ...state.calculation.tempPermJobsgross,
        value: action.value,
      }
    }
  }) :
  action.type === SAVE_TEM_PERM_JOBS_NET_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      tempPermJobsgross:{
        ...state.calculation.tempPermJobsgross,
        net: action.value,
      }
    }
  }) :
  action.type === SAVE_TEM_PERM_JOBS_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      tempPermJobsgross:{
        ...state.calculation.tempPermJobsgross,
        tax: action.value,
      }
    }
  }) :
  action.type === SAVE_TEM_PERM_JOBS_PENSION14_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      tempPermJobsgross:{
        ...state.calculation.tempPermJobsgross,
        firstData: {
          ...state.calculation.tempPermJobsgross.firstData,
          pension: action.value,
        }
      }
    }
  }) :
  action.type === SAVE_TEM_PERM_JOBS_HEALTH_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      tempPermJobsgross:{
        ...state.calculation.tempPermJobsgross,
        firstData: {
          ...state.calculation.tempPermJobsgross.firstData,
          health: action.value,
        }
      }
    }
  }) :
  action.type === SAVE_TEM_PERM_JOBS_NEZ_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      tempPermJobsgross:{
        ...state.calculation.tempPermJobsgross,
        firstData: {
          ...state.calculation.tempPermJobsgross.firstData,
          nez: action.value,
        }
      }
    }
  }) :
  action.type === SAVE_TEM_PERM_JOBS_PENSION12_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      tempPermJobsgross:{
        ...state.calculation.tempPermJobsgross,
        secondData: {
          ...state.calculation.tempPermJobsgross.secondData,
          pension: action.value,
        }
      }
    }
  }) :
  // Contcract Pio and Tax
  action.type === SAVE_CONTRACT_PIO_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value,
      contractPioTax: {
        ...state.calculation.contractPioTax,
        value: action.value
      }
    }
  }) :
  action.type === CONTRACT_PIO_TAX_GROSS_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      contractPioTax:{
        ...state.calculation.contractPioTax,
        gross: action.value,
      }
    }
  }) :
  action.type === CONTRACT_PIO_TAX_NONTAXABLE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      contractPioTax:{
        ...state.calculation.contractPioTax,
        nontaxable: action.value,
      }
    }
  }) :
  action.type === CONTRACT_PIO_TAX_BASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      contractPioTax:{
        ...state.calculation.contractPioTax,
        base: action.value,
      }
    }
  }) :
  action.type === CONTRACT_PIO_TAX_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      contractPioTax:{
        ...state.calculation.contractPioTax,
        tax: action.value,
      }
    }
  }) :
  action.type === CONTRACT_PIO_TAX_PENSION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      contractPioTax:{
        ...state.calculation.contractPioTax,
        pension: action.value,
      }
    }
  }) :
  state;



// ACTION CREATORS

export const saveCalculation = item => ({ type: SAVE_CALCULATION, item });
export const saveGrossValueAction = value => ({ type: SAVE_GROSS_VALUE_ACTION, value });
export const saveNetValueAction = value => ({ type: SAVE_NET_VALUE_ACTION, value });
export const switchGrossNetAction = value => ({ type: SWITCH_GROSS_NET_ACTION, value });
// Salary gross to net
export const saveSalaryGrossNetBaseIndexAction = value => ({ type: SAVE_SALARY_GROSS_NET_BASE_INDEX_ACTION, value });
export const saveSalaryGrossNetTaxAction = value => ({ type: SAVE_SALARY_GROSS_NET_TAX_ACTION, value });
export const saveSalaryGrossNetPensionContributionAction = value => ({ type: SAVE_SALARY_GROSS_NET_PENSION_CONTRIBUTION_ACTION, value });
export const saveSalaryGrossNetHealthContributionAction = value => ({ type: SAVE_SALARY_GROSS_NET_HEALTH_CONTRIBUTION_ACTION, value });
export const saveSalaryGrossNetInsuranceContributionAction = value => ({ type: SAVE_SALARY_GROSS_NET_INSURANCE_CONTRIBUTION_ACTION, value });
export const saveSalaryGrossNetAction = value => ({ type: SAVE_SALARY_GROSS_NET_ACTION, value });
export const saveSalaryGrossNetPensionAction = value => ({ type: SAVE_SALARY_GROSS_NET_PENSION_ACTION, value });
export const saveSalaryGrossNetTotalAction = value => ({ type: SAVE_SALARY_GROSS_NET_TOTAL_ACTION, value });
export const saveSalaryGrossNetTotalNetActon = value => ({ type: SAVE_SALARY_GROSS_TO_NET_TOTAL_NET_ACTION, value });
export const totalSalaryGrossToNetContributionsAction = value => ({ type: TOTAL_SALARY_GROSS_TO_NET_CONTRIBUTIONSACTION, value });
// Salary net to gross
export const saveSalaryNetGrossBaseIndexAction = value => ({ type: SAVE_SALARY_NET_GROSS_BASE_INDEX_ACTION, value });
export const saveSalaryNetGrossTaxAction = value => ({ type: SAVE_SALARY_NET_GROSS_TAX_ACTION, value });
export const saveSalaryNetGrossPensionContributionAction = value => ({ type: SAVE_SALARY_NET_GROSS_PENSION_CONTRIBUTION_ACTION, value });
export const saveSalaryNetGrossHealthContributionAction = value => ({ type: SAVE_SALARY_NET_GROSS_HEALTH_CONTRIBUTION_ACTION, value });
export const saveSalaryNetGrossInsuranceContributionAction = value => ({ type: SAVE_SALARY_NET_GROSS_INSURANCE_CONTRIBUTION_ACTION, value });
export const saveSalaryNetGrossAction = value => ({ type: SAVE_SALARY_NET_GROSS_ACTION, value });
export const saveSalaryNetGrossPensionAction = value => ({ type: SAVE_SALARY_NET_GROSS_PENSION_ACTION, value });
export const saveSalaryNetGrossTotalAction = value => ({ type: SAVE_SALARY_NET_GROSS_TOTAL_ACTION, value });
export const saveSalaryNetGrossBaseContributionAction = value => ({ type: SAVE_SALARY_NET_GROSS_BASE_CONTRIBUTION_ACTION, value });
// Temporary Permanent JOBS
export const saveTempPermJobsAction = value => ({ type: SAVE_TEM_PERM_JOBS_ACTION, value });
export const tempPermJobsGrossToNetAction = value => ({ type: SAVE_TEM_PERM_JOBS_GROSS_TO_NET_ACTION, value });
export const tempPermJobsNetAction = value => ({ type: SAVE_TEM_PERM_JOBS_NET_ACTION, value });
export const tempPermJobsTaxAction = value => ({ type: SAVE_TEM_PERM_JOBS_TAX_ACTION, value });
export const tempPermJobsPension14Action = value => ({ type: SAVE_TEM_PERM_JOBS_PENSION14_ACTION, value });
export const tempPermJobsHealthAction = value => ({ type: SAVE_TEM_PERM_JOBS_HEALTH_ACTION, value });
export const tempPermJobsNezAction = value => ({ type: SAVE_TEM_PERM_JOBS_NEZ_ACTION, value });
export const tempPermJobsPension12Action = value => ({ type: SAVE_TEM_PERM_JOBS_PENSION12_ACTION, value });

// Contcract Pio and Tax
export const saveContractPioTaxAction = value => ({ type: SAVE_CONTRACT_PIO_TAX_ACTION, value });
export const contractPioTaxGrossAction = value => ({ type: CONTRACT_PIO_TAX_GROSS_ACTION, value });
export const contractPioTaxNontaxableAction = value => ({ type: CONTRACT_PIO_TAX_NONTAXABLE_ACTION, value });
export const contractPioTaxBaseAction = value => ({ type: CONTRACT_PIO_TAX_BASE_ACTION, value });
export const contractPioTaxTaxAction = value => ({ type: CONTRACT_PIO_TAX_TAX_ACTION, value });
export const contractPioTaxPensionAction = value => ({ type: CONTRACT_PIO_TAX_PENSION_ACTION, value });




export default calculationsReducer;
