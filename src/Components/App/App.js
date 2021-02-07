import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "../Banner/Banner.js";
import LandingPage from "../LandingPage/LandingPage.js";
import NewAccountPage from "../NewAccount/NewAccount.js";
import DisqualificationPage from "../DisqualificationPage/DisqualificationPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <div id="mainSection">
        <Router>
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
      </div>
    </div>
  );
}

export default App;
