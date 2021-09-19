import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryNav from "../components/CategoryNav";
import "../styles/categories.css";
import CupCake from "./CupCake";
import PanCake from "./PanCake";
import RedVelvetCake from "./RedVelvetCake";

function Categories() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Router>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-3">
                    <CategoryNav/>
                  </div>
                  <div className="col-md-9">
                    <Switch>
                        <Route exact path="/categories" component={CupCake}></Route>
                        <Route exact path="/pancake" component={PanCake}></Route>
                        <Route exact path="/redvelvetcake" component={RedVelvetCake}></Route>
                    </Switch>
                  </div>
              </div>
          </div>
      </Router>

    </div>
  );
}

export default Categories;
