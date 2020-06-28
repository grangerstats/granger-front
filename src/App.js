import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import DescritivaManual from "./pages/descritiva/DescritivaManual";
import DescritivaUpload from "./pages/descritiva/DescritivaUpload";
import DescritivaMain from "./pages/descritiva/DescritivaMain";
import Probabilidade from "./pages/probabilidade/Probabilidade";
import Correlacao from "./pages/correlacao/CorrelacaoMain";
import CorrelacaoManual from "./pages/correlacao/CorrelacaoManual";
import Stars from "./pages/stars/Stars";

import history from "./History";

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/descritiva">
						<DescritivaMain />
					</Route>
					<Route exact path="/descritiva/upload">
						<DescritivaUpload />
					</Route>
					<Route exact path="/descritiva/manual">
						<DescritivaManual />
					</Route>
					<Route exact path="/correlacao">
						<Correlacao />
					</Route>
					<Route exact path="/correlacao/manual">
						<CorrelacaoManual />
					</Route>
					<Route exact path="/probabilidade">
						<Probabilidade />
					</Route>
					<Route exact path="/stars">
						<Stars />
					</Route>
					<Route path="/">
						<Home />
					</Route>
					<Redirect to="/" from="*" />
				</Switch>
			</Router>
		);
	}
}

export default App;
