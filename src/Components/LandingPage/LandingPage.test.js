import React from "react";
import {
  render,
  fireEvent,
  screen,
  cleanup,
  waitFor,
} from "@testing-library/react";
import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import store from "../../redux/store.js";
import LandingPage from "../LandingPage/LandingPage.js";
import NewAccountPage from "../NewAccount/NewAccount.js";

afterEach(() => {
  cleanup();
});

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

  it("simulates a successful submission form process", async () => {
    const history = createMemoryHistory();
    const pushSpy = await jest.spyOn(history, "push");

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

    await waitFor(() => expect(pushSpy).toHaveBeenCalledWith("/newaccount"));
  });
});
