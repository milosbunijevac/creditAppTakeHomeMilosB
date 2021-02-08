import { Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { createBrowserHistory } from "history";
import Banner from "../Banner/Banner.js";
import LandingPage from "../LandingPage/LandingPage.js";
import NewAccountPage from "../NewAccount/NewAccount.js";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.js";
import DisqualificationPage from "../DisqualificationPage/DisqualificationPage.js";
import "./App.css";

export const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: "400px",
      padding: theme.spacing(2),
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Banner />
      <div id="mainSection" className={classes.root}>
        <ErrorBoundary>
          <Paper>
            <Router history={history}>
              <Switch>
                <Route path="/newaccount">
                  <NewAccountPage />
                </Route>
                <Route path="/disqualify">
                  <DisqualificationPage />
                </Route>
                <Route path="/">
                  <LandingPage />
                </Route>
              </Switch>
            </Router>
          </Paper>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
