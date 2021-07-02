import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Result from "./Result";
import Home from "./Home";

import "./styles.css";

createStore({
  data: {}
});

function App() {
  return (
    <StateMachineProvider>
      <h1>Grupo Integrando Soluções</h1>

      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/step1" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/result" component={Result} />
      </Router>
    </StateMachineProvider>
  );
}

export default App;