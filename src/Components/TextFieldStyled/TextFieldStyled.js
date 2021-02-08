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
    fullWidth,
    id,
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
      <Grid item xs={6}>
        <div className="labelFormatting">{info}</div>
      </Grid>
      <Grid item xs={6}>
        <TextField
          variant="outlined"
          onChange={passbackFunction}
          value={value}
          type={type}
          id={id}
          fullWidth={fullWidth}
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
          inputProps={{
            "data-testid": id,
          }}
        />
      </Grid>
    </Grid>
  );
};

TextFieldStyled.propTypes = {
  info: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  passbackFunction: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  error: propTypes.bool,
  fullWidth: propTypes.bool,
  adornment: propTypes.string,
  label: propTypes.string,
  helperText: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  required: propTypes.bool,
};

TextFieldStyled.defaultProps = {
  adornment: " ",
  label: " ",
  error: false,
  helperText: " ",
  required: false,
  fullWidth: true,
};

export default TextFieldStyled;
