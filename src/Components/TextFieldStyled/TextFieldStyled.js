import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import propTypes from "prop-types";

import "./TextFieldStyled.css";

const TextFieldStyled = (props) => {
  const {
    passbackFunction,
    value,
    info,
    adornment,
    type,
    label,
    error,
    helperText,
    required,
  } = props;

  const adornmentCheck = () => {
    if (adornment !== " ") {
      return <div>{adornment}</div>;
    } else {
      return " ";
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={2} />
      <Grid item xs={4}>
        <div className="labelFormatting">{info}</div>
      </Grid>
      <Grid item xs={4}>
        <TextField
          variant="outlined"
          onChange={passbackFunction}
          value={value}
          type={type}
          required={required}
          label={label}
          error={error}
          helperText={helperText}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {adornmentCheck()}
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={2} />
    </Grid>
  );
};

TextFieldStyled.propTypes = {
  info: propTypes.string.isRequired,
  value: propTypes.oneOf([String, Number]).isRequired,
  passbackFunction: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
  error: propTypes.bool,
  adornment: propTypes.string,
  label: propTypes.string,
  helperText: propTypes.string,
  required: propTypes.bool,
};

TextFieldStyled.defaultProps = {
  adornment: " ",
  label: " ",
  error: false,
  helperText: " ",
  required: false,
};

export default TextFieldStyled;
