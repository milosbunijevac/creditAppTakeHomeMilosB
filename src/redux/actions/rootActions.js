export const changeCarPrice = "CHANGE_CAR_PRICE";
export const changeCarMake = "CHANGE_CAR_MAKE";
export const changeCarModel = "CHANGE_CAR_MODEL";
export const changeUserIncome = "CHANGE_USER_INCOME";
export const changeUserScore = "CHANGE_USER_SCORE";
export const changeUserEmail = "CHANGE_USER_EMAIL";
export const changeUserPassword = "CHANGE_USER_PASSWORD";
export const changeUserPasswordConfirm = "CHANGE_USER_PASSWORD_CONFIRM";
export const changeErrorMessage = "CHANGE_ERROR_MESSAGE";
export const resetState = "RESET_STATE";

export const changeCarPriceAction = (carPrice) => ({
  type: changeCarPrice,
  payload: carPrice,
});

export const changeCarMakeAction = (carMake) => ({
  type: changeCarMake,
  payload: carMake,
});

export const changeCarModelAction = (carModel) => ({
  type: changeCarModel,
  payload: carModel,
});

export const changeUserIncomeAction = (userIncome) => ({
  type: changeUserIncome,
  payload: userIncome,
});

export const changeCreditScoreAction = (userScore) => ({
  type: changeUserScore,
  payload: userScore,
});

export const changeUserEmailAction = (userEmail) => ({
  type: changeUserEmail,
  payload: userEmail,
});

export const changeUserPasswordAction = (userPassword) => ({
  type: changeUserPassword,
  payload: userPassword,
});

export const changeUserPasswordConfirmAction = (userPasswordConfirm) => ({
  type: changeUserPasswordConfirm,
  payload: userPasswordConfirm,
});

export const changeErrorMessageAction = (errorMessage) => ({
  type: changeErrorMessage,
  payload: errorMessage,
});

export const resetStateAction = () => ({
  type: resetState,
});
