import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const LandingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div id="landingPage">
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <form onSubmit={handleSubmit}>
            <Grid container id="internalForm" spacing={4}>
              <Grid item xs={2}>
                Enter Car Price ($):
              </Grid>
              <Grid item xs={4}>
                <TextField />
              </Grid>
              <Grid item xs={6} />
              {/* ------ */}
              <Grid item xs={2}>
                Enter Car Make:
              </Grid>
              <Grid item xs={4}>
                <TextField />
              </Grid>
              <Grid item xs={6} />
              {/* ------ */}
              <Grid item xs={2}>
                Enter Car Model:
              </Grid>
              <Grid item xs={4}>
                <TextField />
              </Grid>
              <Grid item xs={6} />
              {/* ------ */}
              <Grid item xs={2}>
                User Income ($):
              </Grid>
              <Grid item xs={4}>
                <TextField />
              </Grid>
              <Grid item xs={6} />
              {/* ------ */}
              <Grid item xs={2}>
                Enter your credit score:
              </Grid>
              <Grid item xs={4}>
                <TextField />
              </Grid>
              <Grid item xs={6} />
              {/* ------ */}
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
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
};

export default LandingPage;
