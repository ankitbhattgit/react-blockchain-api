import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./layout/Navbar";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Home />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
