export const changeCarPrice = "CHANGE_CAR_PRICE";
export const changeCarMake = "CHANGE_CAR_MAKE";
export const changeCarModel = "CHANGE_CAR_MODEL";
export const changeUserIncome = "CHANGE_USER_INCOME";
export const changeUserScore = "CHANGE_USER_SCORE";

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
