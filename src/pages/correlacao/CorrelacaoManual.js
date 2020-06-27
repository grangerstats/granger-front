import React, { Component } from "react";
import Menu from "../../components/Menu";
import axios from "axios";
import { URL } from "../../config/config";

export default class CorrelacaoManual extends Component {
	constructor(props) {
		super(props);

		this.state = {
			resultado: {},
			nomeDependete: "",
			dadosDependente: "",
			nomeIndependente: "",
			dadosIndependente: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.calcular = this.calcular.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		if (e.target.id === "nomeDependete") this.setState({ nomeDependete: e.target.value });
		if (e.target.id === "dadosDependente") this.setState({ dadosDependente: e.target.value });
		if (e.target.id === "nomeIndependente") this.setState({ nomeIndependente: e.target.value });
		if (e.target.id === "dadosIndependente") this.setState({ dadosIndependente: e.target.value });
	}

	calcular(e) {
		e.preventDefault();

		const x = this.state.dadosIndependente;
		const y = this.state.dadosDependente;

		const body = JSON.stringify({
			x,
			y,
		});

		const header = {
			"Content-type": "application/json",
		};

		axios
			.post(URL + "/correlacao", body, { headers: header })
			.then((res) => {
				this.setState({ resultado: res.data });
			})
			.catch((res) => {
				console.log("Erro", res);
			});
	}

	render() {
		return (
			<div className="background">
				<Menu />
				<div className="container-fluid">
					{!this.state.resultado.dados && (
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<form className="form-custom formulario" onSubmit={this.calcular}>
									<div className="form-row">
										<div className="form-group col-12">
											<input
												type="text"
												id="nomeIndependente"
												placeholder="Nome da variável de (x)"
												className="form-control"
												required
												value={this.state.nomeIndependente}
												onChange={this.handleChange}
												autoComplete="on"
											></input>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col-12">
											<input
												type="text"
												id="dadosIndependente"
												placeholder="Dados (x) separados por ';'"
												className="form-control"
												required
												value={this.state.dadosIndependente}
												onChange={this.handleChange}
												autoComplete="on"
											></input>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col-12">
											<input
												type="text"
												id="nomeDependete"
												placeholder="Nome da variável de (y)"
												className="form-control"
												required
												value={this.state.nomeDependete}
												onChange={this.handleChange}
												autoComplete="on"
											></input>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col-12">
											<input
												type="text"
												id="dadosDependente"
												placeholder="Dados (y) separados por ';'"
												className="form-control"
												required
												value={this.state.dadosDependente}
												onChange={this.handleChange}
												autoComplete="on"
											></input>
										</div>
									</div>
									<div className="form-row mt-0.5">
										<div className="col-12 text-center">
											<input type="submit" className="btn btn-outline-secondary btn-custom" id="btnCalcular" value="Calcular"></input>
										</div>
									</div>
								</form>
							</div>
						</div>
					)}

					{this.state.resultado.dados && <div>{JSON.stringify(this.state.resultado.dados)}</div>}
				</div>
			</div>
		);
	}
}
