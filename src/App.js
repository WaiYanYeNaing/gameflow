import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React adwd
        </a>
      </header> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/detail" component={Detail} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
