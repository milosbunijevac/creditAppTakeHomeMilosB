import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextFieldStyled from "../TextFieldStyled/TextFieldStyled.js";

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
              {/* Text Fields */}
              <TextFieldStyled info={"Enter Car Price ($):"} />
              <TextFieldStyled info={"Enter Car Make:"} />
              <TextFieldStyled info={"Enter Car Model:"} />
              <TextFieldStyled info={"User Income ($):"} />
              <TextFieldStyled info={"Enter your credit score:"} />

              {/* Submit Button */}
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
