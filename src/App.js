import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainHomePageLayout } from "./layouts/MainHomePageLayout";
import Homepage from "./pages/Homepage";
import { Registration } from "./pages/Registration";
import { UserProvider } from "./providers/UserProvider";
import Login from "./pages/Login";
import "./default.scss";

function App() {
  return (
    <UserProvider>
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
          <Route path="/login" render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
        </Switch>
      </div>
    </UserProvider>
  );
}

export default App;
