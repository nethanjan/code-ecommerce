import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import store from "./store";

// import HomePage from "./components/pages/HomePage";

import "./App.css";

const history = createBrowserHistory();

const Homepage = React.lazy(() => import("./components/pages/HomePage"));
const NotFoundPage = lazy(() => import("./components/pages/404"));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<div className="loading-spinner" />}>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/404" exact element={NotFoundPage} />
              <Route
                path="*"
                exact
                render={() => {
                  window.location.href = "/404";
                  return <div />;
                }}
              />
            </Routes>
          </Suspense>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
