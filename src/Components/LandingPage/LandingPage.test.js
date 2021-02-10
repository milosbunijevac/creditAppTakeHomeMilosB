import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { history } from "../App/App.js";
import store from "../../redux/store.js";
import LandingPage from "../LandingPage/LandingPage.js";
import NewAccountPage from "../NewAccount/NewAccount.js";

const wrapWithRedux = (component) => {
  return <Provider store={store}>{component}</Provider>;
};

describe("Landing Page tests", () => {
  it("renders correctly", () => {
    render(wrapWithRedux(<LandingPage />));
    const element = screen.getByTestId("carPriceField");
    expect(element).toBeTruthy();
  });

  it("updates carPriceField on change", () => {
    render(wrapWithRedux(<LandingPage />));

    const element = screen.getByTestId("carPriceField");
    fireEvent.change(element, { target: { value: "20000" } });

    expect(element.value).toBe("20000");
  });

  it("simulates a successful submission form process", () => {
    const mockHistoryPush = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useHistory: () => ({
        push: mockHistoryPush,
      }),
    }));

    render(
      wrapWithRedux(
        <Router history={history}>
          <Switch>
            <Route path="/newaccount">
              <NewAccountPage />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      )
    );

    const carPriceField = screen.getByTestId("carPriceField");
    fireEvent.change(carPriceField, { target: { value: "20000" } });

    const carMakeField = screen.getByTestId("carMakeField");
    fireEvent.change(carMakeField, { target: { value: "Ford" } });

    const carModelField = screen.getByTestId("carModelField");
    fireEvent.change(carModelField, { target: { value: "Fiesta" } });

    const userIncomeField = screen.getByTestId("userIncomeField");
    fireEvent.change(userIncomeField, { target: { value: "110000" } });

    const creditScoreField = screen.getByTestId("creditScoreField");
    fireEvent.change(creditScoreField, { target: { value: "650" } });

    const applyNowButton = screen.getByTitle("applyNowButton");
    fireEvent.click(applyNowButton);

    /* This would test for a successful submission by checking the final path 
    which should be /newaccount. I cant get this to work at the moment. */

    expect(mockHistoryPush).toHaveBeenCalled();
  });
});
