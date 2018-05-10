// Actions
const CALCULATE = 'calculations/CALCULATE';
const SAVE_CALCULATION = 'calculations/SAVE_CALCULATION';
const SAVE_INPUT = 'calculations/SAVE_INPUT';
const SAVE_GROSS_VALUE_ACTION = 'calculations/SAVE_GROSS_VALUE_ACTION';
const SAVE_NET_VALUE_ACTION = 'calculations/SAVE_NET_VALUE_ACTION';
const SAVE_BASE_SALARY_INDEX_ACTION = 'calculations/SAVE_BASE_SALARY_INDEX_ACTION';
const SAVE_SALARY_TAX_ACTION = 'calculations/SAVE_SALARY_TAX_ACTION';
const SAVE_SALARY_GROSS_PENSION_ACTION = 'calculations/SAVE_SALARY_GROSS_PENSION_ACTION';
const SAVE_SALARY_HEALTH_ACTION = 'calculations/SAVE_SALARY_HEALTH_ACTION';
const SAVE_SALARY_INSURANCE_ACTION = 'calculations/SAVE_SALARY_INSURANCE_ACTION';
const SAVE_GROSS_TO_NET_SALARY_ACTION = 'calculations/SAVE_GROSS_TO_NET_SALARY_ACTION';
const SAVE_NET_PENSION_ACTION = 'calculations/SAVE_NET_PENSION_ACTION';
const SAVE_TOTAL_SALARY_ACTION = 'calculations/SAVE_TOTAL_SALARY_ACTION';



// Initial State
const initialState = {
  calculations: [{
    name: 'Obracun zarada',
    calculation: 'OBRACUN ZARADA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: x => x + 2,
    type: 'blabla',
    value: '',
    icon: 'wallet'
  },{
    name: 'Kalkulacija za zakup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: x => x * 2,
    type: 'blabla',
    value: '',
    icon: 'laptop'
  },{
    name: 'Salary calculator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: 'salaryCalculator',
    type: 'grossToNet',
    grossSalary: {
      value: null,
      baseSalaryIndex: null,
      tax: null,
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
    icon: 'calculator'
  }],
  calculation: {}
};

// Reducer
const calculationsReducer = (state = initialState, action) =>
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
  action.type === SAVE_BASE_SALARY_INDEX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        baseSalaryIndex: action.value
      }
    }
  }) :
  action.type === SAVE_SALARY_TAX_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      grossSalary: {
        ...state.calculation.grossSalary,
        tax: action.value
      }
    }
  }) :
  action.type === SAVE_SALARY_GROSS_PENSION_ACTION ? ({
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
  action.type === SAVE_SALARY_HEALTH_ACTION ? ({
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
  action.type === SAVE_SALARY_INSURANCE_ACTION ? ({
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
  action.type === SAVE_GROSS_TO_NET_SALARY_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      netSalary: {
        ...state.calculation.netSalary,
        value: action.value
      }
    }
  }) :
  action.type === SAVE_NET_PENSION_ACTION ? ({
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
  action.type === SAVE_TOTAL_SALARY_ACTION ? ({
    ...state,
    calculation: {
      ...state.calculation,
      totalSalary: action.value,
    }
  }) :
  state;

// Action Creators
export const saveCalculation = item => ({ type: SAVE_CALCULATION, item });
export const saveGrossValueAction = value => ({ type: SAVE_GROSS_VALUE_ACTION, value });
export const saveNetValueAction = value => ({ type: SAVE_NET_VALUE_ACTION, value });
export const saveBaseSalaryIndexAction = value => ({ type: SAVE_BASE_SALARY_INDEX_ACTION, value });
export const saveSalaryTaxAction = value => ({ type: SAVE_SALARY_TAX_ACTION, value });
export const saveSalaryGrossPensionAction = value => ({ type: SAVE_SALARY_GROSS_PENSION_ACTION, value });
export const saveSalaryHealthAction = value => ({ type: SAVE_SALARY_HEALTH_ACTION, value });
export const saveSalaryInsuranceAction = value => ({ type: SAVE_SALARY_INSURANCE_ACTION, value });
export const saveGrossToNetSalary = value => ({ type: SAVE_GROSS_TO_NET_SALARY_ACTION, value });
export const saveNetPensionAction = value => ({ type: SAVE_NET_PENSION_ACTION, value });
export const saveTotalSalaryAction = value => ({ type: SAVE_TOTAL_SALARY_ACTION, value });

export default calculationsReducer;
