import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextFieldStyled from "../TextFieldStyled/TextFieldStyled.js";
import * as actionTypes from "../../redux/actions/rootActions.js";
import "./LandingPage.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const {
    changeCarPrice,
    changeCarMake,
    changeCarModel,
    changeUserIncome,
    changeUserScore,
  } = actionTypes;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = useCallback(
    (e, type) => {
      dispatch({ type, payload: e.target.value });
    },
    [dispatch]
  );

  const { carPrice, carMake, carModel, userIncome, userScore } = useSelector(
    (state) => state
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
                  passbackFunction={(e) => handleChange(e, changeCarPrice)}
                />
                <TextFieldStyled
                  info={"Enter Car Make:"}
                  value={carMake}
                  type="string"
                  passbackFunction={(e) => handleChange(e, changeCarMake)}
                />
                <TextFieldStyled
                  info={"Enter Car Model:"}
                  value={carModel}
                  type="string"
                  passbackFunction={(e) => handleChange(e, changeCarModel)}
                />
                <TextFieldStyled
                  info={"User Income ($):"}
                  value={userIncome}
                  adornment={"$"}
                  type="number"
                  passbackFunction={(e) => handleChange(e, changeUserIncome)}
                />
                <TextFieldStyled
                  info={"Enter your credit score:"}
                  value={userScore}
                  type="number"
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
