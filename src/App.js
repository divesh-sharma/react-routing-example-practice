import React from "react";
import "./style.css";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import User from "./User";

export default function App() {
  const Name = () => {
    return <h1>Name is Divesh Sharma</h1>;
  };
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact/Name" component={Name} />
        <Route exact path="/user/:name/:lname" component={User} />

        <Route component={Error} />
      </Switch>
    </div>
  );
}
