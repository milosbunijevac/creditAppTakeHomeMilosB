export const checkEmptyField = (value) => {
  if (value !== "") {
    return true;
  } else {
    return false;
  }
};

export const checkCreditScore = (value) => {
  const castNum = Number(value);
  if (castNum >= 300 && castNum <= 850) {
    return true;
  } else {
    return false;
  }
};

export const checkMinIncome = (value) => {
  if (Number(value) > 0) {
    return true;
  } else {
    return false;
  }
};

export const checkAllErrors = (object) => {
  let result = false;
  for (let key in object) {
    if (object[key] === true) {
      result = true;
      break;
    }
  }
  return result;
};
