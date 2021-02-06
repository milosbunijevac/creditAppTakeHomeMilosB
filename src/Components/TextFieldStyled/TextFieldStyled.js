import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import propTypes from "prop-types";

import "./TextFieldStyled.css";

const TextFieldStyled = (props) => {
  return (
    <>
      <Grid item xs={2}>
        <div className="labelFormatting">{props.info}</div>
      </Grid>
      <Grid item xs={4}>
        <TextField />
      </Grid>
      <Grid item xs={6} />
    </>
  );
};

TextFieldStyled.propTypes = {
  info: propTypes.string.isRequired,
  passbackFunction: propTypes.func.isRequired,
};

export default TextFieldStyled;
