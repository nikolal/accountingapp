// Actions
const RESET_ALL_VALUE_ACTION = 'calculation/RESET_ALL_VALUE_ACTION';
const SWITCH_TYPE_ACTION = 'calculation/SWITCH_TYPE_ACTION';
const CALCULATE = 'calculations/CALCULATE';
const SAVE_CALCULATION = 'calculations/SAVE_CALCULATION';
const SAVE_INPUT = 'calculations/SAVE_INPUT';
const SAVE_GROSS_VALUE_ACTION = 'calculations/SAVE_GROSS_VALUE_ACTION';
const SAVE_NET_VALUE_ACTION = 'calculations/SAVE_NET_VALUE_ACTION';
const SAVE_INPUT_FAMILY_ACTION = 'calculations/SAVE_INPUT_FAMILY_ACTION';
const SAVE_INPUT_LEASE_ACTION = 'calculations/SAVE_INPUT_LEASE_ACTION';


// const SWITCH_GROSS_NET_ACTION = 'calculations/SWITCH_GROSS_NET_ACTION';
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

// Contcract Pio and Tax
const SAVE_CONTRACT_PIO_TAX_HEALTH_ACTION = 'calculations/SAVE_CONTRACT_PIO_TAX_HEALTH_ACTION';
const CONTRACT_PIO_HEALTH_TAX_GROSS_ACTION = 'calculations/CONTRACT_PIO_HEALTH_TAX_GROSS_ACTION';
const CONTRACT_PIO_HEALTH_TAX_NONTAXABLE_ACTION = 'calculations/CONTRACT_PIO_HEALTH_TAX_NONTAXABLE_ACTION';
const CONTRACT_PIO_HEALTH_TAX_BASE_ACTION = 'calculations/CONTRACT_PIO_HEALTH_TAX_BASE_ACTION';
const CONTRACT_PIO_HEALTH_TAX_TAX_ACTION = 'calculations/CONTRACT_PIO_HEALTH_TAX_TAX_ACTION';
const CONTRACT_PIO_HEALTH_TAX_PENSION_ACTION = 'calculations/CONTRACT_PIO_HEALTH_TAX_PENSION_ACTION';
const CONTRACT_PIO_HEALTH_TAX_CONTRIBUTION_ACTION = 'calculations/CONTRACT_PIO_HEALTH_TAX_CONTRIBUTION_ACTION';

// Contcract Tax
const SAVE_CONTRACT_TAX_ACTION = 'calculations/SAVE_CONTRACT_TAX_ACTION';
const CONTRACT_TAX_GROSS_ACTION = 'calculations/CONTRACT_TAX_GROSS_ACTION';
const CONTRACT_TAX_NONTAXABLE_ACTION = 'calculations/CONTRACT_TAX_NONTAXABLE_ACTION';
const CONTRACT_TAX_BASE_ACTION = 'calculations/CONTRACT_TAX_BASE_ACTION';
const CONTRACT_TAX_TAX_ACTION = 'calculations/CONTRACT_TAX_TAX_ACTION';

// Allowance - Home
const SAVE_ALLOWANCE_HOME_ACTION = 'calculations/SAVE_ALLOWANCE_HOME_ACTION';
const SAVE_ALLOWANCE_HOME_TAXE_BASE_ACTION = 'calculations/SAVE_ALLOWANCE_HOME_TAXE_BASE_ACTION';
const SAVE_ALLOWANCE_HOME_GROSS_ACTION = 'calculations/SAVE_ALLOWANCE_HOME_GROSS_ACTION';
const SAVE_ALLOWANCE_HOME_TAX_ACTION = 'calculations/SAVE_ALLOWANCE_HOME_TAX_ACTION';

// Allowance - Away
const SAVE_ALLOWANCE_AWAY_ACTION = 'calculations/SAVE_ALLOWANCE_AWAY_ACTION';
const SAVE_ALLOWANCE_AWAY_TAXE_BASE_ACTION = 'calculations/SAVE_ALLOWANCE_AWAY_TAXE_BASE_ACTION';
const SAVE_ALLOWANCE_AWAY_GROSS_ACTION = 'calculations/SAVE_ALLOWANCE_AWAY_GROSS_ACTION';
const SAVE_ALLOWANCE_AWAY_TAX_ACTION = 'calculations/SAVE_ALLOWANCE_AWAY_TAX_ACTION';

// Annual Tax
const SAVE_ANNUAL_TAX_ACTION = 'calculations/SAVE_ANNUAL_TAX_ACTION';
const SAVE_ANNUAL_GROSS_ACTION = 'calculations/SAVE_ANNUAL_GROSS_ACTION';
const BASE_FOR_TAX_ACTION = 'calculations/BASE_FOR_TAX_ACTION';
const TAX_ON_EARNING_ACTION = 'calculations/TAX_ON_EARNING_ACTION';
const BASE_FOR_SOCIAL_CONTRIBUTION__ACTION = 'calculations/BASE_FOR_SOCIAL_CONTRIBUTION__ACTION';
const ANNUAL_PENSION__ACTION = 'calculations/ANNUAL_PENSION__ACTION';
const ANNUAL_HEALTH_ACTION = 'calculations/ANNUAL_HEALTH_ACTION';
const ANNUAL_INSURANCE_ACTION = 'calculations/ANNUAL_INSURANCE_ACTION';
const ANNUAL_EMPLOYER_PENSION__ACTION = 'calculations/ANNUAL_EMPLOYER_PENSION__ACTION';
const ANNUAL_EMPLOYER_HEALTH_ACTION = 'calculations/ANNUAL_EMPLOYER_HEALTH_ACTION';
const ANNUAL_EMPLOYER_INSURANCE_ACTION = 'calculations/ANNUAL_EMPLOYER_INSURANCE_ACTION';
const ANNUAL_TOTAL_VALUE_ACTION = 'calculations/ANNUAL_TOTAL_VALUE_ACTION';
const MONTHLY_NET12_VALUE_ACTION = 'calculations/MONTHLY_NET12_VALUE_ACTION';
const CONTRIBUTIONS_EMPLOYEES_VALUE_ACTION = 'calculations/CONTRIBUTIONS_EMPLOYEES_VALUE_ACTION';
const ANNUAL_TAX_VALUE_TOTAL_ACTION = 'calculations/ANNUAL_TAX_VALUE_TOTAL_ACTION';
const ANNUAL_ALL_ACTION = 'calculations/ANNUAL_ALL_ACTION';
const ANNUAL_TAX_EMPLOYEES_ACTION = 'calculations/ANNUAL_TAX_EMPLOYEES_ACTION';
const CALCULATE_FAMILY_NUMBER_ACTION = 'calculations/CALCULATE_FAMILY_NUMBER_ACTION';
const PERSONAL_DEDUCTIONS_ACTION = 'calculations/PERSONAL_DEDUCTIONS_ACTION';
const BASE_FOR_TAXATION_ACTION = 'calculations/BASE_FOR_TAXATION_ACTION';
const FINAL_ANNUAL_TAX_ACTION = 'calculations/FINAL_ANNUAL_TAX_ACTION';
const SAVE_LEASE_ACTION = 'calculations/SAVE_LEASE_ACTION';
const CALCULATE_COURSE_EURO_ACTION = 'calculations/CALCULATE_COURSE_EURO_ACTION';
const RSD_COVERTED_LEASE_ACTION = 'calculations/RSD_COVERTED_LEASE_ACTION';
const GROSS_INPUT_ACTION = 'calculations/GROSS_INPUT_ACTION';
const EURO_INPUT_ACTION = 'calculations/EURO_INPUT_ACTION';
const CALCULATE_GROSS_LEASE_ACTION = 'calculations/CALCULATE_GROSS_LEASE_ACTION';
const CALCULATE_NONTAXABLE_LEASE_ACTION = 'calculations/CALCULATE_NONTAXABLE_LEASE_ACTION';
const CALCULATE_BASE_LEASE_ACTION = 'calculations/CALCULATE_BASE_LEASE_ACTION';
const CALCULATE_LEASE_TAX_FINAL_ACTION = 'calculations/CALCULATE_LEASE_TAX_FINAL_ACTION';

// Initial State
const initialState = {
  calculations: [{
    name: {
      en:'????',
      rs: 'Obracun zarada'
    },
    calculation: 'OBRACUN ZARADA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('../../../assets/images/calculationsPanel.png'),
    icons: require('../../../assets/images/calculatorCalculations.png'),
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
    name: {
      en: '///',
      rs: 'Privremeni i povremeni poslovi'
    },
    description: {
      en: 'aj',
      rs: 'HLB Consulting nije odgovoran za rezultate ove kalkulacije čija je osnovna namena da pruži pregled indikativnih podataka. Kalkulacija predstavlja uprošćenu verziju obračuna, ne uključuje specifične okolnosti koje mogu uticati na obračun i ne može se koristiti za svrhe plaćanja poreskih obaveza bilo kojih poreskih obveznika. Za više informacija možete kontaktirati kompaniju HLB Consulting.'
    },
    image: require('../../../assets/images/imageCalculation.png'),
    icons: require('../../../assets/images/caseCalculations.png'),
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
    name: {
      en: 'lll',
      rs: 'Godisnji porez'
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('../../../assets/images/imageCalculation.png'),
    icons: require('../../../assets/images/calendarCalculations.png'),
    input: '',
    input2: '',
    func: 'annualTax',
    type: 'blabla',
    value: '',
    annualTax: {
      gross: null,
      base: null,
      tax10: null,
      baseForSocialContribution: null,
      net: null,
      value: null,
      totalValue: null,
      personalDeductions: null,
      familyNumber: null,
      familyNumberCalculate: null,
      monthlyNet12: null,
      annualTaxValue: null,
      annualTaxValueTotal: null,
      contributionsEmployees: null,
      baseForTaxation: null,
      all: null,
      finnalAnnualTax: null,
      annualTaxEmployees: null,
      socialContributions: {
        value: null,
        pensionContribution: null,
        healthContribution: null,
        insuranceContribution: null,
      },
      socialContributionsemployer: {
        value: null,
        pensionContribution: null,
        healthContribution: null,
        insuranceContribution: null,
      },
    },
    icon: 'calendar'
    },{
    name: {
      en: 'ppp',
      rs: 'Dnevnice'
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('../../../assets/images/panel05.png'),
    icons: require('../../../assets/images/walletCalculations.png'),
    input: '',
    func: 'allowance',
    type: 'allowanceHome',
    value: '',
    allowancesHome: {
      value: null,
      nontaxable: null,
      base: null,
      tax: null,
      gross: null
    },
    allowancesAway: {
      value: null,
      nontaxable: null,
      base: null,
      tax: null,
      gross: null
    },
    icon: 'wallet'
    },{
    name: {
      en: 'kkkk',
      rs: 'Zakup fizickom licu'
    },
    description: {
      en: 'aj',
      rs: 'HLB Consulting nije odgovoran za rezultate ove kalkulacije čija je osnovna namena da pruži pregled indikativnih podataka. Kalkulacija predstavlja uprošćenu verziju obračuna, ne uključuje specifične okolnosti koje mogu uticati na obračun i ne može se koristiti za svrhe plaćanja poreskih obaveza bilo kojih poreskih obveznika. Za više informacija možete kontaktirati kompaniju HLB Consulting.'
    },
    image: require('../../../assets/images/panel05.png'),
    icons: require('../../../assets/images/manUser.png'),
    input: '',
    func: 'lease',
    type: 'blabla',
    input2: '',
    value: '',
    lease: {
      value: null,
      course: null,
      courseCalculate: null,
      rsdConverted: null,
      grossInput: null,
      euroInput: null,
      gross: null,
      nonTaxable: null,
      base: null,
      tax: null
    },
    icon: 'user',
    },{
    name: {
      en: 'uuu',
      rs: 'Ugovori o delu'
    },
    nameExpl: {
      en: 'lll',
      rs: '(kada se placa porez, PIO i zdravstvo)'
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('../../../assets/images/calculationsPanel.png'),
    icons: require('../../../assets/images/folder.png'),
    input: '',
    func: 'contractPioTaxHealth',
    type: 'blabla',
    value: '',
    concractPioTaxHealth: {
      value: null,
      // coefficient: 1.58227848,
      gross: null,
      nontaxable: null,
      base: null,
      tax: null,
      pension: null,
      contribution: null
    },
    icon: 'folder'
    },{
    name: {
      en: 'tt',
      rs: 'Ugovor o delu'
    },
    nameExpl: {
      en: 'ssss',
      rs: '(kada se placa porez, PIO)'
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('../../../assets/images/calculationsPanel.png'),
    icons: require('../../../assets/images/pioTax.png'),
    input: '',
    func: 'contractPioTax',
    type: 'blabla',
    value: '',
    concractPioTax: {
      value: null,
      // coefficient: 1.58227848,
      gross: null,
      nontaxable: null,
      base: null,
      tax: null,
      pension: null,
    },
    icon: 'folder'
    },{
    name: {
      en: 'lkdhjag',
      rs: 'Ugovor o delu '
    },
    nameExpl: {
      en: 'ddd',
      rs: '(kada se placa samo porez)'
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('../../../assets/images/imageCalculation.png'),
    icons: require('../../../assets/images/onlyTax.png'),
    input: '',
    func: 'concractTax',
    type: 'blabla',
    value: '',
    concractTax: {
      value: null,
      // coefficient: 1.58227848,
      gross: null,
      nontaxable: null,
      base: null,
      tax: null,
    },
    icon: 'folder'
    }],
  calculation: {}
};

// Reducer
const calculationsReducer = (state = initialState, action) =>
  action.type === RESET_ALL_VALUE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,

    }
  }) :
  action.type === SWITCH_TYPE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      type: action.val
    }
  }) :
  action.type === SAVE_CALCULATION ? ({
    ...state,
    calculation: action.item
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
  action.type === SAVE_INPUT_FAMILY_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input2: action.value,
      annualTax: {
        ...state.calculation.annualTax,
        familyNumber: action.value
      }
    }
  }) :
  action.type === SAVE_INPUT_LEASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input2: action.value,
      lease: {
        ...state.calculation.lease,
        course: action.value
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
  // Contcract Pio, Tax and Health
  action.type === SAVE_CONTRACT_PIO_TAX_HEALTH_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value,
      concractPioTaxHealth: {
        ...state.calculation.concractPioTaxHealth,
        value: action.value
      }
    }
  }) :
  action.type === CONTRACT_PIO_HEALTH_TAX_GROSS_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      concractPioTaxHealth:{
        ...state.calculation.concractPioTaxHealth,
        gross: action.value,
      }
    }
  }) :
  action.type === CONTRACT_PIO_HEALTH_TAX_NONTAXABLE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      concractPioTaxHealth:{
        ...state.calculation.concractPioTaxHealth,
        nontaxable: action.value,
      }
    }
  }) :
  action.type === CONTRACT_PIO_HEALTH_TAX_BASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      concractPioTaxHealth:{
        ...state.calculation.concractPioTaxHealth,
        base: action.value,
      }
    }
  }) :
  action.type === CONTRACT_PIO_HEALTH_TAX_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      concractPioTaxHealth:{
        ...state.calculation.concractPioTaxHealth,
        tax: action.value,
      }
    }
  }) :
  action.type === CONTRACT_PIO_HEALTH_TAX_PENSION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      concractPioTaxHealth:{
        ...state.calculation.concractPioTaxHealth,
        pension: action.value,
      }
    }
  }) :
  action.type === CONTRACT_PIO_HEALTH_TAX_CONTRIBUTION_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      concractPioTaxHealth:{
        ...state.calculation.concractPioTaxHealth,
        contribution: action.value,
      }
    }
  }) :
  // Contcract Tax
  action.type === SAVE_CONTRACT_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value,
      concractTax: {
        ...state.calculation.concractTax,
        value: action.value
      }
    }
  }) :
  action.type === CONTRACT_TAX_GROSS_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      concractTax:{
        ...state.calculation.concractTax,
        gross: action.value,
      }
    }
  }) :
  action.type === CONTRACT_TAX_NONTAXABLE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      concractTax:{
        ...state.calculation.concractTax,
        nontaxable: action.value,
      }
    }
  }) :
  action.type === CONTRACT_TAX_BASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      concractTax:{
        ...state.calculation.concractTax,
        base: action.value,
      }
    }
  }) :
  action.type === CONTRACT_TAX_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      concractTax:{
        ...state.calculation.concractTax,
        tax: action.value,
      }
    }
  }) :
  // Allowance - home
  action.type === SAVE_ALLOWANCE_HOME_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value,
      allowancesHome: {
        ...state.calculation.allowancesHome,
        value: action.value
      }
    }
  }) :
  action.type === SAVE_ALLOWANCE_HOME_TAXE_BASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      allowancesHome:{
        ...state.calculation.allowancesHome,
        base: action.value,
      }
    }
  }) :
  action.type === SAVE_ALLOWANCE_HOME_GROSS_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      allowancesHome:{
        ...state.calculation.allowancesHome,
        gross: action.value,
      }
    }
  }) :
  action.type === SAVE_ALLOWANCE_HOME_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      allowancesHome:{
        ...state.calculation.allowancesHome,
        tax: action.value,
      }
    }
  }) :
  // Allowance - Away
  action.type === SAVE_ALLOWANCE_AWAY_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value,
      allowancesAway: {
        ...state.calculation.allowancesAway,
        value: action.value
      }
    }
  }) :
  action.type === SAVE_ALLOWANCE_AWAY_TAXE_BASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      allowancesAway:{
        ...state.calculation.allowancesAway,
        base: action.value,
      }
    }
  }) :
  action.type === SAVE_ALLOWANCE_AWAY_GROSS_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      allowancesAway:{
        ...state.calculation.allowancesAway,
        gross: action.value,
      }
    }
  }) :
  action.type === SAVE_ALLOWANCE_AWAY_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      allowancesAway:{
        ...state.calculation.allowancesAway,
        tax: action.value,
      }
    }
  }) :
  // Annual Tax
  action.type === SAVE_ANNUAL_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value,
      annualTax: {
        ...state.calculation.annualTax,
        value: action.value
      }
    }
  }) :
  action.type === SAVE_ANNUAL_GROSS_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        gross: action.value,
      }
    }
  }) :
  action.type === BASE_FOR_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        base: action.value,
      }
    }
  }) :
  action.type === TAX_ON_EARNING_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        tax10: action.value,
      }
    }
  }) :
  action.type === BASE_FOR_SOCIAL_CONTRIBUTION__ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        baseForSocialContribution: action.value,
      }
    }
  }) :
  action.type === ANNUAL_PENSION__ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        socialContributions: {
          ...state.calculation.annualTax.socialContributions,
          pensionContribution: action.value
        }
      }
    }
  }) :
  action.type === ANNUAL_HEALTH_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        socialContributions: {
          ...state.calculation.annualTax.socialContributions,
          healthContribution: action.value
        }
      }
    }
  }) :
  action.type === ANNUAL_INSURANCE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        socialContributions: {
          ...state.calculation.annualTax.socialContributions,
          insuranceContribution: action.value
        }
      }
    }
  }) :
  action.type === ANNUAL_EMPLOYER_PENSION__ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        socialContributionsemployer: {
          ...state.calculation.annualTax.socialContributionsemployer,
          pensionContribution: action.value
        }
      }
    }
  }) :
  action.type === ANNUAL_EMPLOYER_HEALTH_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        socialContributionsemployer: {
          ...state.calculation.annualTax.socialContributionsemployer,
          healthContribution: action.value
        }
      }
    }
  }) :
  action.type === ANNUAL_EMPLOYER_INSURANCE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        socialContributionsemployer: {
          ...state.calculation.annualTax.socialContributionsemployer,
          insuranceContribution: action.value
        }
      }
    }
  }) :
  action.type === ANNUAL_TOTAL_VALUE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        totalValue: action.value,
      }
    }
  }) :
  action.type === MONTHLY_NET12_VALUE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        monthlyNet12: action.value,
      }
    }
  }) :
  action.type === CONTRIBUTIONS_EMPLOYEES_VALUE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        contributionsEmployees: action.value,
      }
    }
  }) :
  action.type === ANNUAL_TAX_VALUE_TOTAL_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        annualTaxValueTotal: action.value,
      }
    }
  }) :
  action.type === ANNUAL_ALL_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        all: action.value,
      }
    }
  }) :
  action.type === ANNUAL_TAX_EMPLOYEES_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        annualTaxEmployees: action.value,
      }
    }
  }) :
  action.type === CALCULATE_FAMILY_NUMBER_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        familyNumberCalculate: action.value,
      }
    }
  }) :
  action.type === PERSONAL_DEDUCTIONS_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        personalDeductions: action.value,
      }
    }
  }) :
  action.type === FINAL_ANNUAL_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      annualTax:{
        ...state.calculation.annualTax,
        finnalAnnualTax: action.value,
      }
    }
  }) :
  // Lease
  action.type === SAVE_LEASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value,
      lease: {
        ...state.calculation.lease,
        value: action.value
      }
    }
  }) :
  action.type === CALCULATE_COURSE_EURO_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      lease:{
        ...state.calculation.lease,
        courseCalculate: action.value,
      }
    }
  }) :
  action.type === RSD_COVERTED_LEASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      lease:{
        ...state.calculation.lease,
        rsdConverted: action.value,
      }
    }
  }) :
  action.type === GROSS_INPUT_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      lease:{
        ...state.calculation.lease,
        grossInput: action.value,
      }
    }
  }) :
  action.type === EURO_INPUT_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      lease:{
        ...state.calculation.lease,
        euroInput: action.value,
      }
    }
  }) :
  action.type === CALCULATE_GROSS_LEASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      lease:{
        ...state.calculation.lease,
        gross: action.value,
      }
    }
  }) :
  action.type === CALCULATE_NONTAXABLE_LEASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      lease:{
        ...state.calculation.lease,
        nonTaxable: action.value,
      }
    }
  }) :
  action.type === CALCULATE_BASE_LEASE_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      lease:{
        ...state.calculation.lease,
        base: action.value,
      }
    }
  }) :
  action.type === CALCULATE_LEASE_TAX_FINAL_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      lease:{
        ...state.calculation.lease,
        tax: action.value,
      }
    }
  }) :
  state;


// ACTION CREATORS
export const resetAllValuesAction = val => ({ type: RESET_ALL_VALUE_ACTION, val });
export const switchTypeAction = val => ({ type: SWITCH_TYPE_ACTION, val });
export const saveCalculation = item => ({ type: SAVE_CALCULATION, item });
export const saveGrossValueAction = value => ({ type: SAVE_GROSS_VALUE_ACTION, value });
export const saveNetValueAction = value => ({ type: SAVE_NET_VALUE_ACTION, value });
export const saveInputFamilyAction = value => ({ type: SAVE_INPUT_FAMILY_ACTION, value });
export const saveInputLeseAction = value => ({ type: SAVE_INPUT_LEASE_ACTION, value });

// export const switchGrossNetAction = value => ({ type: SWITCH_GROSS_NET_ACTION, value });
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

// Contcract Pio, Tax and Health
export const savePioTaxHealthAction = value => ({ type: SAVE_CONTRACT_PIO_TAX_HEALTH_ACTION, value });
export const contractPioHealthTaxGrossAction = value => ({ type: CONTRACT_PIO_HEALTH_TAX_GROSS_ACTION, value });
export const contractPioHealthTaxNontaxableAction = value => ({ type: CONTRACT_PIO_HEALTH_TAX_NONTAXABLE_ACTION, value });
export const contractPioHealthTaxBaseAction = value => ({ type: CONTRACT_PIO_HEALTH_TAX_BASE_ACTION, value });
export const contractPioHealthTaxTaxAction = value => ({ type: CONTRACT_PIO_HEALTH_TAX_TAX_ACTION, value });
export const contractPioHealthTaxPensionAction = value => ({ type: CONTRACT_PIO_HEALTH_TAX_PENSION_ACTION, value });
export const contractPioHealthTaxContributionAction = value => ({ type: CONTRACT_PIO_HEALTH_TAX_CONTRIBUTION_ACTION, value });

// Contcract Tax
export const saveContractTaxAction = value => ({ type: SAVE_CONTRACT_TAX_ACTION, value });
export const contractTaxGrossAction = value => ({ type: CONTRACT_TAX_GROSS_ACTION, value });
export const contractTaxNontaxableAction = value => ({ type: CONTRACT_TAX_NONTAXABLE_ACTION, value });
export const contractTaxBaseAction = value => ({ type: CONTRACT_TAX_BASE_ACTION, value });
export const contractTaxTaxAction = value => ({ type: CONTRACT_TAX_TAX_ACTION, value });

// Allowance - Home
export const saveAllowanceHomeAction = value => ({ type: SAVE_ALLOWANCE_HOME_ACTION, value });
export const allowanceHomeTaxBaseAction = value => ({ type: SAVE_ALLOWANCE_HOME_TAXE_BASE_ACTION, value });
export const allowanceHomeGrossAction = value => ({ type: SAVE_ALLOWANCE_HOME_GROSS_ACTION, value });
export const allowanceHomeTaxAction = value => ({ type: SAVE_ALLOWANCE_HOME_TAX_ACTION, value });

// Allowence - Away
export const allowanceAwayTaxBaseAction = value => ({ type: SAVE_ALLOWANCE_AWAY_TAXE_BASE_ACTION, value });
export const allowanceAwayGrossAction = value => ({ type: SAVE_ALLOWANCE_AWAY_GROSS_ACTION, value });
export const allowanceAwayTaxAction = value => ({ type: SAVE_ALLOWANCE_AWAY_TAX_ACTION, value });
export const saveAllowanceAwayAction = value => ({ type: SAVE_ALLOWANCE_AWAY_ACTION, value });

// Annual Tax
export const saveAnnualTaxAction = value => ({ type: SAVE_ANNUAL_TAX_ACTION, value });
export const annualGrossAction = value => ({ type: SAVE_ANNUAL_GROSS_ACTION, value });
export const baseForTaxAction = value => ({ type: BASE_FOR_TAX_ACTION, value });
export const taxOnEarningAction = value => ({ type: TAX_ON_EARNING_ACTION, value });
export const baseForSocialContributionAction = value => ({ type: BASE_FOR_SOCIAL_CONTRIBUTION__ACTION, value });
export const annualPensionAction = value => ({ type: ANNUAL_PENSION__ACTION, value });
export const annualHealthAction = value => ({ type: ANNUAL_HEALTH_ACTION, value });
export const annualInsuranceAction = value => ({ type: ANNUAL_INSURANCE_ACTION, value });
export const annualEmployerPensionAction = value => ({ type: ANNUAL_EMPLOYER_PENSION__ACTION, value });
export const annualEmployerHealthAction = value => ({ type: ANNUAL_EMPLOYER_HEALTH_ACTION, value });
export const annualEmployerInsuranceAction = value => ({ type: ANNUAL_EMPLOYER_INSURANCE_ACTION, value });
export const annualTotalValueAction = value => ({ type: ANNUAL_TOTAL_VALUE_ACTION, value });
export const monthlyNet12ValueAction = value => ({ type: MONTHLY_NET12_VALUE_ACTION, value });
export const contributionsEmployeesAction = value => ({ type: CONTRIBUTIONS_EMPLOYEES_VALUE_ACTION, value });
export const annualTaxValueTotalAction = value => ({ type: ANNUAL_TAX_VALUE_TOTAL_ACTION, value });
export const annualAllAction = value => ({ type: ANNUAL_ALL_ACTION, value });
export const annualTaxEmployeesAction = value => ({ type: ANNUAL_TAX_EMPLOYEES_ACTION, value });
export const calculateFamilyNumberAction = value => ({ type: CALCULATE_FAMILY_NUMBER_ACTION, value });
export const personalDeductionsAction = value => ({ type: PERSONAL_DEDUCTIONS_ACTION, value });
export const finalAnnualTaxActioin = value => ({ type: FINAL_ANNUAL_TAX_ACTION, value });

// export const baseForTaxationAction = value => ({ type: BASE_FOR_TAXATION_ACTION, value });

// Lease
export const saveLeaseAction = value => ({ type: SAVE_LEASE_ACTION, value });
export const calculateCourseEuroAction = value => ({ type: CALCULATE_COURSE_EURO_ACTION, value });
export const rsdConvertedActioin = value => ({ type: RSD_COVERTED_LEASE_ACTION, value });
export const grossInputValueAction = value => ({ type: GROSS_INPUT_ACTION, value });
export const euroInputValueAction = value => ({ type: EURO_INPUT_ACTION, value });
export const calculateGrossLeaseAction = value => ({ type: CALCULATE_GROSS_LEASE_ACTION, value });
export const calculateNonTaxableLeaseAction = value => ({ type: CALCULATE_NONTAXABLE_LEASE_ACTION, value });
export const calculateBaseLeaseAction = value => ({ type: CALCULATE_BASE_LEASE_ACTION, value });
export const calculateLeaseTaxFinalAction = value => ({ type: CALCULATE_LEASE_TAX_FINAL_ACTION, value });





export default calculationsReducer;
