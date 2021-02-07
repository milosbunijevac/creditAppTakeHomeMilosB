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
      console.log("unmounting");
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
      console.log("no errors");
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
          <div className="centerForm">
            <form onSubmit={handleSubmit}>
              <Grid container id="internalLandingPageForm" spacing={4}>
                {/* Text Fields */}
                <TextFieldStyled
                  info={"Enter Car Price ($):"}
                  value={carPrice}
                  adornment={"$"}
                  type="number"
                  label="required"
                  required
                  error={allErrors.carValueError}
                  helperText={"Please enter a value below 1,000,000 dollars"}
                  passbackFunction={(e) => handleChange(e, changeCarPrice)}
                />
                <TextFieldStyled
                  info={"Enter Car Make:"}
                  value={carMake}
                  type="string"
                  label="required"
                  required
                  error={allErrors.carMakeError}
                  helperText={"Please enter a car make"}
                  passbackFunction={(e) => handleChange(e, changeCarMake)}
                />
                <TextFieldStyled
                  info={"Enter Car Model:"}
                  value={carModel}
                  type="string"
                  label="required"
                  required
                  error={allErrors.carModelError}
                  helperText={"Please enter a car model"}
                  passbackFunction={(e) => handleChange(e, changeCarModel)}
                />
                <TextFieldStyled
                  info={"User Income ($):"}
                  value={userIncome}
                  adornment={"$"}
                  type="number"
                  label="required"
                  required
                  error={allErrors.userIncomeError}
                  helperText={"Please enter a value above 0"}
                  passbackFunction={(e) => handleChange(e, changeUserIncome)}
                />
                <TextFieldStyled
                  info={"Enter your credit score:"}
                  value={userScore}
                  type="number"
                  label="required"
                  required
                  error={allErrors.userCreditScoreError}
                  helperText={"Please enter a score between 300-850"}
                  passbackFunction={(e) => handleChange(e, changeUserScore)}
                />

                {/* Submit Button */}
                <Grid item xs={5} />
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onSubmit={handleSubmit}
                  >
                    Apply Now
                  </Button>
                </Grid>
                <Grid item xs={5} />
              </Grid>
            </form>
          </div>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
};

export default LandingPage;
