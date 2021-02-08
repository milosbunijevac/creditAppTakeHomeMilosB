import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer.js";

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
