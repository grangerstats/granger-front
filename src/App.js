import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DescritivaManual from "./pages/descritiva/DescritivaManual";
import DescritivaUpload from "./pages/descritiva/DescritivaUpload";
import DescritivaMain from "./pages/descritiva/DescritivaMain";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Probabilidade from "./pages/probabilidade/Probabilidade";
import Correlacao from "./pages/Correlacao";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/descritiva">
						<DescritivaMain />
					</Route>
					<Route path="/upload">
						<DescritivaUpload />
					</Route>
					<Route path="/manual">
						<DescritivaManual />
					</Route>
					<Route path="/correlacao">
						<Correlacao />
					</Route>
					<Route path="/probabilidade">
						<Probabilidade />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
