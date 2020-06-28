import React, { Component } from "react";
import "../../css/Stars.css";
import { stars } from "../../javascript/Scripts";

class Stars extends Component {
	componentDidMount() {
		stars();
	}
	render() {
		return (
			<div className="container-fluid stars info-stars">
				<div className="row "></div>
				<div className="row">
					<h1 className="wingard">Wingardium Leviosa</h1>
					<img className="stars-img" src={require("../../imagens/hermione.gif")} alt="HermioneGif" />
				</div>
			</div>
		);
	}
}
export default Stars;
