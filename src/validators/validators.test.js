import {
  checkEmptyField,
  checkCreditScore,
  checkMinIncome,
  checkAllErrors,
} from "../validators/validators.js";

const emptyField = "";
const nonEmptyField = "Test";
const goodCreditScore = 600;
const badCreditScore = 200;
const badIncome = 0;
const goodIncome = 40000;
const errorObjectTrue = {
  test1: true,
  test2: false,
};
const errorObjectFalse = {
  test1: false,
  test2: false,
};

describe("Validation tests", () => {
  describe("Positive validation tests", () => {
    it("should return true for checkEmptyField if value is not empty string", () => {
      expect(checkEmptyField(nonEmptyField)).toBe(true);
    });

    it("should return true for checkCreditScore if value is between 300 and 850", () => {
      expect(checkCreditScore(goodCreditScore)).toBe(true);
    });

    it("should return true for checkMinIncome is above 0", () => {
      expect(checkMinIncome(goodIncome)).toBe(true);
    });

    it("should return true for checkAllErrors if object contains a true value", () => {
      expect(checkAllErrors(errorObjectTrue)).toBe(true);
    });
  });
  describe("Negative validation tests", () => {
    it("should return false for checkEmptyField if value is empty string", () => {
      expect(checkEmptyField(emptyField)).toBe(false);
    });

    it("should return false for checkCreditScore if value is not between 300 and 850", () => {
      expect(checkCreditScore(badCreditScore)).toBe(false);
    });

    it("should return false for checkMinIncome is 0", () => {
      expect(checkMinIncome(badIncome)).toBe(false);
    });

    it("should return false for checkAllErrors if object does not contain a false value", () => {
      expect(checkAllErrors(errorObjectFalse)).toBe(false);
    });
  });
});
