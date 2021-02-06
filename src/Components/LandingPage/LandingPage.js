import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const LandingPage = () => {
  return (
    <div id="landingPage">
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container id="internalForm" spacing={4}>
            <Grid item xs={2}>
              Enter Car Price ($):
            </Grid>
            <Grid item xs={4}>
              <TextField />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={2}>
              Enter Car Make:
            </Grid>
            <Grid item xs={4}>
              <TextField />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={2}>
              Enter Car Model:
            </Grid>
            <Grid item xs={4}>
              <TextField />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={2}>
              User Income ($):
            </Grid>
            <Grid item xs={4}>
              <TextField />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={2}>
              Enter your credit score:
            </Grid>
            <Grid item xs={4}>
              <TextField />
            </Grid>
            <Grid item xs={6} />
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
};

export default LandingPage;
