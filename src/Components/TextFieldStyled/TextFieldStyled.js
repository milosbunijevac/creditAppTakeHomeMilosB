import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import propTypes from "prop-types";

import "./TextFieldStyled.css";

const TextFieldStyled = (props) => {
  const { passbackFunction, value, info } = props;
  return (
    <>
      <Grid item xs={2}>
        <div className="labelFormatting">{info}</div>
      </Grid>
      <Grid item xs={4}>
        <TextField onChange={passbackFunction} />
      </Grid>
      <Grid item xs={6} />
    </>
  );
};

TextFieldStyled.propTypes = {
  info: propTypes.string.isRequired,
  value: propTypes.oneOf([String, Number]).isRequired,
  passbackFunction: propTypes.func.isRequired,
};

export default TextFieldStyled;
