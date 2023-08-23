import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../page/dashboard/dashboard";


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
        </div>
      </BrowserRouter>
    </>
  );
};
export default Rout;
