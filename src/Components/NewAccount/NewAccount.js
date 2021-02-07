import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextFieldStyled from "../TextFieldStyled/TextFieldStyled.js";
import * as actionTypes from "../../redux/actions/rootActions.js";
import { checkEmptyField } from "../../validators/validators.js";

const NewAccount = () => {
  const dispatch = useDispatch();
  const {
    changeUserEmail,
    changeUserPassword,
    changeUserPasswordConfirm,
  } = actionTypes;

  const { userEmail, userPassword, userPasswordConfirm } = useSelector(
    (state) => state
  );

  const [allErrors, setAllErrors] = useState({
    userEmailError: false,
    userPasswordError: false,
    userPasswordConfirmError: false,
  });

  const handleChange = useCallback(
    (e, type) => {
      dispatch({ type, payload: e.target.value });
      switch (type) {
        case changeUserEmail: {
          setAllErrors({
            ...allErrors,
            userEmailError: !checkEmptyField(e.target.value),
          });
          break;
        }
        case changeUserPassword: {
          setAllErrors({
            ...allErrors,
            userPasswordError: !checkEmptyField(e.target.value),
          });
          break;
        }
        case changeUserPasswordConfirm: {
          setAllErrors({
            ...allErrors,
            userPasswordConfirmError: !checkEmptyField(e.target.value),
          });
          break;
        }
        default:
          return null;
      }
    },
    [
      dispatch,
      allErrors,
      changeUserEmail,
      changeUserPassword,
      changeUserPasswordConfirm,
    ]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword !== userPasswordConfirm) {
      setAllErrors({
        ...allErrors,
        userPasswordConfirmError: true,
      });
      return;
    } else {
      // Handle submission of user and password here
    }
  };

  return (
    <div id="newAccount">
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <form onSubmit={handleSubmit}>
            <Grid container id="internalNewAccountForm" spacing={4}>
              {/* Text Fields */}
              <Grid item xs={12}>
                <TextFieldStyled
                  info={"Enter username (email):"}
                  value={userEmail}
                  type="email"
                  required
                  id="newAccountEmailAddress"
                  error={allErrors.userEmailError}
                  label="Email address"
                  helperText={
                    allErrors.userEmailError && "Please enter your email"
                  }
                  passbackFunction={(e) => handleChange(e, changeUserEmail)}
                />
                <TextFieldStyled
                  info={"Enter Password:"}
                  value={userPassword}
                  type="password"
                  required
                  label="Password"
                  id="newAccountPassword"
                  error={allErrors.userPasswordError}
                  helperText={
                    allErrors.userPasswordError && "Passwords must match"
                  }
                  passbackFunction={(e) => handleChange(e, changeUserPassword)}
                />
                <TextFieldStyled
                  info={"Confirm Password:"}
                  value={userPasswordConfirm}
                  type="password"
                  required
                  error={allErrors.userPasswordConfirmError}
                  label="Confirm Password"
                  id="newAccountPasswordConfirm"
                  helperText={
                    allErrors.userPasswordConfirmError && "Passwords must match"
                  }
                  passbackFunction={(e) =>
                    handleChange(e, changeUserPasswordConfirm)
                  }
                />
              </Grid>
              {/* Submit Button */}
              <Grid item xs={4} />
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  id="createNewAccountButton"
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
