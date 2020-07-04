import React, { Component } from "react";
import Menu from "../../components/Menu";
import axios from "axios";
import { URL } from "../../config/config";
import Dispersao from "../../components/Dispersao";

export default class CorrelacaoManual extends Component {
	constructor(props) {
		super(props);

		this.state = {
			resultado: {},
			nomeDependete: "",
			dadosDependente: "",
			nomeIndependente: "",
			dadosIndependente: "",
			projecaoX: "",
			projecaoY: "",
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
		if (e.target.id === "projecaoX") {
			const value = Number(e.target.value);
			const valueY = value * Number(this.state.resultado.dados.regressaoResultado.a) + Number(this.state.resultado.dados.regressaoResultado.b);
			this.setState({ projecaoX: e.target.value });
			this.setState({ projecaoY: valueY });
		}
		if (e.target.id === "projecaoY") {
			const value = Number(e.target.value);
			const valueX = (value - Number(this.state.resultado.dados.regressaoResultado.b)) / Number(this.state.resultado.dados.regressaoResultado.a);
			this.setState({ projecaoY: e.target.value });
			this.setState({ projecaoX: valueX });
		}
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
				alert("Ocorreu um erro no processamento.")
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
												placeholder="Nome da variável independente (x)"
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
												placeholder="Dados de (x) separados por ';'"
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
												placeholder="Nome da variável dependente (y)"
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
												placeholder="Dados de (y) separados por ';'"
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

					{this.state.resultado.dados && (
						<div className="form-custom">
							<h1 className="text-center mb-5">Aqui está o resultado</h1>
							<div className="row">
								<div className="col-md-6 col-sm-12">
									<Dispersao dadosGrafico={this.state.resultado.dados.dadosGrafico} nomeIndependente={this.state.nomeIndependente} nomeDependete={this.state.nomeDependete} />
								</div>
								<div className="col-md-6 col-sm-12">
									<p className="h3 text-center"> Correlação: {this.state.resultado.dados.correlacaoResultado}% </p>
									<p className="h3 text-center">Tipo de Correlação: {this.state.resultado.dados.tipo}</p>
									<p className="h3 text-center">
										Equação: y = {this.state.resultado.dados.regressaoResultado.a} * x + {this.state.resultado.dados.regressaoResultado.b}
									</p>
									<p className="h3 text-center">
										Projeções: <input className="form-control correlacao-projecoes" placeholder="(x)" value={this.state.projecaoX} id="projecaoX" onChange={this.handleChange} /> -{" "}
										<input className="form-control correlacao-projecoes" placeholder="(y)" value={this.state.projecaoY} id="projecaoY" onChange={this.handleChange} />
									</p>
								</div>
							</div>
							<div className="row">
								<button
									onClick={() => {
										this.setState({ resultado: {} });
									}}
									className="btn btn-outline-secondary btn-custom"
									id="btnVoltar"
								>
									VOLTAR
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}
