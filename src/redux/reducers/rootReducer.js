import * as actions from "../actions/rootActions.js";

const initialState = {
  carPrice: 0,
  carMake: "",
  carModel: "",
  userIncome: 0,
  userScore: 0,
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
    default:
      return state;
  }
};

export default rootReducer;
