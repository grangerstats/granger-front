import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DescritivaManual from "./DescritivaManual";
import DescritivaUpload from "./DescritivaUpload";
import DescritivaMain from "./DescritivaMain";
import Home from "./Home";
import Login from "./Login";
import Probabilidade from "./Probabilidade";
import Correlacao from "./Correlacao";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/descritiva">
                        <DescritivaMain/>
                    </Route>
                    <Route path="/upload">
                        <DescritivaUpload/>
                    </Route>
                    <Route path="/manual">
                        <DescritivaManual/>
                    </Route>
                    <Route path="/correlacao">
                        <Correlacao/>
                    </Route>
                    <Route path="/probabilidade">
                        <Probabilidade/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )

    }
}

export default App