import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainHomePageLayout } from "./layouts/MainHomePageLayout";
import Homepage from "./pages/Homepage";
import { Registration } from "./pages/Registration";
import "./default.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <MainHomePageLayout>
            <Homepage />
          </MainHomePageLayout>
        )} />
        <Route path="/registration" render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
