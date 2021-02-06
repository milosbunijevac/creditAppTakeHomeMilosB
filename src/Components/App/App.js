import Banner from "../Banner/Banner.js";
import Footer from "../Footer/Footer.js";
import LandingPage from "../LandingPage/LandingPage.js";
import { Button } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <div id="mainSection">
        {/* Make react router switch here. */}
        <LandingPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
