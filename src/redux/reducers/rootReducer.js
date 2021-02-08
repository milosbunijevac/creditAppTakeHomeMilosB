import * as actions from "../actions/rootActions.js";

export const initialState = {
  carPrice: "",
  carMake: "",
  carModel: "",
  userIncome: "",
  userScore: "",
  userEmail: "",
  userPassword: "",
  userPasswordConfirm: "",
  errorMessage: "Loading error message...",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.changeCarPrice:
      return {
        ...state,
        carPrice: action.payload,
      };
    case actions.changeCarMake:
      return {
        ...state,
        carMake: action.payload,
      };
    case actions.changeCarModel:
      return {
        ...state,
        carModel: action.payload,
      };
    case actions.changeUserIncome:
      return {
        ...state,
        userIncome: action.payload,
      };
    case actions.changeUserScore:
      return {
        ...state,
        userScore: action.payload,
      };
    case actions.changeUserEmail:
      return {
        ...state,
        userEmail: action.payload,
      };
    case actions.changeUserPassword:
      return {
        ...state,
        userPassword: action.payload,
      };
    case actions.changeUserPasswordConfirm:
      return {
        ...state,
        userPasswordConfirm: action.payload,
      };
    case actions.changeErrorMessage:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case actions.resetState:
      return {
        ...initialState,
        errorMessage: state.errorMessage,
      };
    default:
      return state;
  }
};

export default rootReducer;
