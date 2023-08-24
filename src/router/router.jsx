import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../page/dashboard/dashboard";
import About from "../page/about/about";


const Rout = () => {


  return (
    <>
      <BrowserRouter>
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};
export default Rout;
