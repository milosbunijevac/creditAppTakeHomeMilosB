import React from "react";
import Grid from "@material-ui/core/Grid";

const NewAccount = () => {
  return (
    <div id="newAccount">
      <Grid container spacing={2}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <div>This is the new account page.</div>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
};

export default NewAccount;
