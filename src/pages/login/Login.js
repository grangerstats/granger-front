import React, { Component } from "react";
import { menu } from "../../javascript/Scripts";
import Menu from "../../components/Menu";

class Login extends Component {
	componentDidMount() {
		menu();
	}
	render() {
		return (
			<div>
				<Menu></Menu>
				<h1>Login</h1>
			</div>
		);
	}
}
export default Login;
