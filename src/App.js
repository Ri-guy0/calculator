import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Calc from "./components/Calc";

const App = () => (
  <Router>
    <Route path="/" exact component={Calc} />
  </Router>
);

export default App;
