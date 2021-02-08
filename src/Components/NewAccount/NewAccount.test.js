import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { history } from "../App/App.js";
import store from "../../redux/store.js";
import NewAccountPage from "../NewAccount/NewAccount.js";

const wrapWithRedux = (component) => {
  return <Provider store={store}>{component}</Provider>;
};

describe("New Account Page tests", () => {
  it("renders correctly", () => {
    render(wrapWithRedux(<NewAccountPage />));
    const element = screen.getByTestId("newAccountEmailAddress");
    expect(element).toBeTruthy();
  });

  it("updates carPriceField on change", () => {
    render(wrapWithRedux(<NewAccountPage />));

    const element = screen.getByTestId("newAccountEmailAddress");
    fireEvent.change(element, {
      target: { value: "milos.bunijevac@gmail.com" },
    });

    expect(element.value).toBe("milos.bunijevac@gmail.com");
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
              <NewAccountPage />
            </Route>
          </Switch>
        </Router>
      )
    );

    const carPriceField = screen.getByTestId("newAccountEmailAddress");
    fireEvent.change(carPriceField, {
      target: { value: "milos.bunijevac@gmail.com" },
    });

    const usernameField = screen.getByTestId("newAccountPassword");
    fireEvent.change(usernameField, { target: { value: "Test" } });

    const passwordField = screen.getByTestId("newAccountPasswordConfirm");
    fireEvent.change(passwordField, { target: { value: "Test" } });

    const createNewAccountButton = screen.getByTitle("createNewAccountButton");
    fireEvent.click(createNewAccountButton);

    /* This would test for a successful submission by checking if the textfields
    had any errors after the createNewAccount button was called. The test currently does
    not expect anything.*/
  });
});
