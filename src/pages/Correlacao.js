import React, { Component } from "react";
import { menu } from "../javascript/Scripts";
import Menu from "../components/Menu";

class Correlacao extends Component {
	componentDidMount() {
		menu();
	}
	render() {
		return (
			<div>
				<Menu></Menu>
				<h1>Correlação e Regressão</h1>
			</div>
		);
	}
}
export default Correlacao;
