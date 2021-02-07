import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import propTypes from "prop-types";

import "./TextFieldStyled.css";

const TextFieldStyled = (props) => {
  const { passbackFunction, value, info, adornment, type } = props;

  const adornmentCheck = () => {
    if (adornment !== " ") {
      return <div>{adornment}</div>;
    } else {
      return " ";
    }
  };

  return (
    <>
      <Grid item xs={2}>
        <div className="labelFormatting">{info}</div>
      </Grid>
      <Grid item xs={4}>
        <TextField
          onChange={passbackFunction}
          value={value}
          type={type}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {adornmentCheck()}
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6} />
    </>
  );
};

TextFieldStyled.propTypes = {
  info: propTypes.string.isRequired,
  value: propTypes.oneOf([String, Number]).isRequired,
  passbackFunction: propTypes.func.isRequired,
  adornment: propTypes.string,
  type: propTypes.string.isRequired,
};

TextFieldStyled.defaultProps = {
  adornment: " ",
};

export default TextFieldStyled;
