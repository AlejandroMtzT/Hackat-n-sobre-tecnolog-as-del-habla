import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Info from "./Info/Info";
import Contact from "./Contact/Contact";
import Entradas from "./Entrada/Entradas";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Info" component={Info} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Entradas" component={Entradas} />
                </Switch>
            </Router>
        )
    }
}
