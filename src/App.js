
import Dropdown from "./components/sources/Sources";
import Headlines from "./components/headlines/Headlines";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/edit">Edit Sources</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/edit">
            <Dropdown />
          </Route>
    
          <Route path="/">
            <Headlines />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Headlines</h2>;
}

function About() {
  return <h2>Edit Sources</h2>;
}
