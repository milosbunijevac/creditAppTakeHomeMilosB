import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextFieldStyled from "../TextFieldStyled/TextFieldStyled.js";
import * as actionTypes from "../../redux/actions/rootActions.js";

const NewAccount = () => {
  const dispatch = useDispatch();
  const {
    changeUserEmail,
    changeUserPassword,
    changeUserPasswordConfirm,
  } = actionTypes;

  const handleChange = useCallback(
    (e, type) => {
      dispatch({ type, payload: e.target.value });
    },
    [dispatch]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted new account");
  };

  const { userEmail, userPassword, userPasswordConfirm } = useSelector(
    (state) => state
  );

  return (
    <div id="newAccount">
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <form onSubmit={handleSubmit}>
            <Grid container id="internalNewAccountForm" spacing={4}>
              {/* Text Fields */}
              <TextFieldStyled
                info={"Enter username (email):"}
                value={userEmail}
                type="email"
                passbackFunction={(e) => handleChange(e, changeUserEmail)}
              />
              <TextFieldStyled
                info={"Enter Password:"}
                value={userPassword}
                type="password"
                passbackFunction={(e) => handleChange(e, changeUserPassword)}
              />
              <TextFieldStyled
                info={"Confirm Password:"}
                value={userPasswordConfirm}
                type="password"
                passbackFunction={(e) =>
                  handleChange(e, changeUserPasswordConfirm)
                }
              />
              {/* Submit Button */}
              <Grid item xs={4} />
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  onSubmit={handleSubmit}
                >
                  Create New Account
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

export default NewAccount;
