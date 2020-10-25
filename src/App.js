import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/karsal" component={ HomePage } />
      </Switch>
    </div>
  );
}

export default App;
