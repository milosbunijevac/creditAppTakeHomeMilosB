import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextFieldStyled from "../TextFieldStyled/TextFieldStyled.js";
import * as actionTypes from "../../redux/actions/rootActions.js";
import {
  checkEmptyField,
  checkCreditScore,
  checkMinIncome,
  checkAllErrors,
} from "../../validators/validators.js";
import mockFetch from "../../fetchCall/fetchCall";
import "./LandingPage.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    changeCarPrice,
    changeCarMake,
    changeCarModel,
    changeUserIncome,
    changeUserScore,
    changeErrorMessage,
    resetState,
  } = actionTypes;

  useEffect(() => {
    return () => {
      dispatch({ type: resetState });
    };
  }, [dispatch, resetState]);

  const { carPrice, carMake, carModel, userIncome, userScore } = useSelector(
    (state) => state
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkAllErrors(allErrors)) {
      // Call the API
      mockFetch(carPrice, userIncome, userScore)
        .then((response) => {
          history.push("/newaccount");
        })
        .catch((error) => {
          dispatch({ type: changeErrorMessage, payload: error });
          history.push("/disqualify");
        });
    }
  };

  const [allErrors, setAllErrors] = useState({
    carValueError: false,
    carMakeError: false,
    carModelError: false,
    userIncomeError: false,
    userCreditScoreError: false,
  });

  const handleChange = useCallback(
    (e, type) => {
      dispatch({ type, payload: e.target.value });
      switch (type) {
        case changeCarPrice: {
          setAllErrors({
            ...allErrors,
            carValueError: !checkEmptyField(e.target.value),
          });
          break;
        }
        case changeCarMake: {
          setAllErrors({
            ...allErrors,
            carMakeError: !checkEmptyField(e.target.value),
          });
          break;
        }
        case changeCarModel: {
          setAllErrors({
            ...allErrors,
            carModelError: !checkEmptyField(e.target.value),
          });
          break;
        }
        case changeUserIncome: {
          setAllErrors({
            ...allErrors,
            userIncomeError: !checkMinIncome(e.target.value),
          });
          break;
        }
        case changeUserScore: {
          setAllErrors({
            ...allErrors,
            userCreditScoreError: !checkCreditScore(e.target.value),
          });
          break;
        }
        default:
          return null;
      }
    },
    [
      dispatch,
      changeCarMake,
      changeCarModel,
      changeCarPrice,
      changeUserIncome,
      changeUserScore,
      allErrors,
    ]
  );

  return (
    <div id="landingPage">
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <form onSubmit={handleSubmit}>
            <Grid container id="internalLandingPageForm" spacing={4}>
              {/* Text Fields */}
              <Grid item xs={6}>
                <TextFieldStyled
                  info={"Enter Car Price ($):"}
                  value={carPrice}
                  adornment={"$"}
                  type="number"
                  label="required"
                  required
                  error={allErrors.carValueError}
                  id="carPriceField"
                  helperText={
                    allErrors.carValueError &&
                    "Please enter a value below 1,000,000 dollars"
                  }
                  passbackFunction={(e) => handleChange(e, changeCarPrice)}
                />
                <TextFieldStyled
                  info={"Enter Car Make:"}
                  value={carMake}
                  type="string"
                  label="required"
                  required
                  id="carMakeField"
                  error={allErrors.carMakeError}
                  helperText={
                    allErrors.carMakeError && "Please enter a car make"
                  }
                  passbackFunction={(e) => handleChange(e, changeCarMake)}
                />
                <TextFieldStyled
                  info={"Enter Car Model:"}
                  value={carModel}
                  type="string"
                  label="required"
                  required
                  id="carModelField"
                  error={allErrors.carModelError}
                  helperText={
                    allErrors.carModelError && "Please enter a car model"
                  }
                  passbackFunction={(e) => handleChange(e, changeCarModel)}
                />
                <TextFieldStyled
                  info={"User Income ($):"}
                  value={userIncome}
                  adornment={"$"}
                  type="number"
                  label="required"
                  required
                  id="userIncomeField"
                  error={allErrors.userIncomeError}
                  helperText={
                    allErrors.userIncomeError && "Please enter a value above 0"
                  }
                  passbackFunction={(e) => handleChange(e, changeUserIncome)}
                />
                <TextFieldStyled
                  info={"Enter your credit score:"}
                  value={userScore}
                  type="number"
                  label="required"
                  required
                  id="creditScoreField"
                  error={allErrors.userCreditScoreError}
                  helperText={
                    allErrors.userCreditScoreError &&
                    "Please enter a score between 300-850"
                  }
                  passbackFunction={(e) => handleChange(e, changeUserScore)}
                />
              </Grid>
              <Grid item xs={6}>
                <span>Marketing materials:</span>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Grid>
              {/* Submit Button */}
            </Grid>
            <Grid container id="internalLandingPageFormButton" spacing={4}>
              <Grid item xs={4} />
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  id="applyNowButton"
                  onSubmit={handleSubmit}
                >
                  Apply Now
                </Button>
              </Grid>
              <Grid item xs={5} />
            </Grid>
          </form>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
};

export default LandingPage;
