import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../page/dashboard/dashboard";
import About from "../page/about/about";
import Contact from "../page/contact/contact";
import Project from "../page/project/project";


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
            <Route path="/about" >
              <About />
            </Route>
          </Switch>
          <Switch>
            <Route path="/contact" >
              <Contact />
            </Route>
          </Switch>
          <Switch>
            <Route path="/project" >
              <Project />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};
export default Rout;
