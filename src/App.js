import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DescritivaManual from "./DescritivaManual";
import DescritivaUpload from "./DescritivaUpload";
import DescritivaMain from "./DescritivaMain";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/upload">
                        <DescritivaUpload />
                    </Route>
                    <Route path="/manual">
                        <DescritivaManual />
                    </Route>
                    <Route path="/">
                        <DescritivaMain />
                    </Route>
                </Switch>
            </Router>
        )

    }
}

export default App