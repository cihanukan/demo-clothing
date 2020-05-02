import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//This delays the rendering of our app’s UI until our persisted state has been retrieved and saved to redux.
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

//With this configuration, we now have access redux inside of our application
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
