import React, { Component } from "react";
import Menu from "../../components/Menu";
import { menu, mask } from "../../javascript/Scripts";
import Axios from "axios";
import { URL } from "../../config/config";

class Probabilidade extends Component {
	constructor(props) {
		super(props);

		this.state = {
			resultados: {},
			sucesso: "",
			fracasso: "",
			tipo: "exatamente",
			amostra: "",
			evento: "",
		};

		this.handleOnChange = this.handleOnChange.bind(this);
	}
	componentDidMount() {
		menu();
		mask();
	}

	async calcular(e) {
		e.preventDefault();
		const n = this.amostra.value;
		const p = this.sucesso.value.split(",").join(".");
		const q = this.fracasso.value.split(",").join(".");
		const k = this.evento.value;
		const tipo = this.state.tipo;

		const body = JSON.stringify({
			n,
			p,
			q,
			k,
			tipo,
		});
		let header = {
			"Content-type": "application/json",
		};
		await Axios.post(`${URL}/probabilidade`, body, { headers: header })
			.then((response) => {
				console.log("response", response);
				this.setState({ resultados: response.data });
			})
			.catch((erro) => console.log(erro));
	}

	handleOnChange(e) {
		const newValue = Number(e.target.value.split(",").join("."));
		if (e.target.id === "sucesso") {
			this.setState({ sucesso: e.target.value });
			this.setState({
				fracasso: parseFloat(1 - newValue)
					.toPrecision(2)
					.toString()
					.split(".")
					.join(","),
			});
		}
		if (e.target.id === "fracasso") {
			this.setState({ fracasso: e.target.value });
			this.setState({
				sucesso: parseFloat(1 - newValue)
					.toPrecision(2)
					.toString()
					.split(".")
					.join(","),
			});
		}
		if (e.target.id === "amostra") {
			this.setState({ amostra: e.target.value });
		}
		if (e.target.id === "evento") {
			this.setState({ evento: e.target.value });
		}
	}

	handleEvento(e) {
		this.setState({ tipo: e.target.name });
	}

	render() {
		return (
			<div className="background">
				<Menu />
				<div className="container-fluid">
					{!this.state.resultados.dados && (
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<form className="form-custom formulario" onSubmit={this.calcular.bind(this)}>
									<div className="form-row">
										<div className="form-group col-12">
											<input
												type="text"
												id="amostra"
												placeholder="Informe o valor da Amostra (N)"
												className="form-control numerico"
												required
												ref={(input) => (this.amostra = input)}
												value={this.state.amostra}
												onChange={(e) => this.handleOnChange(e)}
												autoComplete="off"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col-12">
											<input
												type="text"
												id="sucesso"
												placeholder="Informe o valor do Sucesso (p) em decimal"
												className="form-control"
												required
												ref={(input) => (this.sucesso = input)}
												value={this.state.sucesso}
												onChange={(e) => this.handleOnChange(e)}
												autoComplete="off"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col-12">
											<input
												type="text"
												id="fracasso"
												placeholder="Informe o valor do Fracasso (q) em decimal"
												className="form-control"
												required
												value={this.state.fracasso}
												onChange={(e) => this.handleOnChange(e)}
												ref={(input) => (this.fracasso = input)}
												autoComplete="off"
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col-12 text-center d-flex flex-column">
											<div className="btn-group btn-group-toggle" data-toggle="buttons">
												<label className="btn btn-secondary">
													Menor que
													<input type="radio" name="menor" onClick={(e) => this.handleEvento(e)}></input>
												</label>
												<label className="btn btn-secondary active">
													Exatamente
													<input type="radio" name="exatamente" defaultChecked onClick={(e) => this.handleEvento(e)}></input>
												</label>
												<label className="btn btn-secondary">
													Maior que
													<input type="radio" name="maior" onClick={(e) => this.handleEvento(e)}></input>
												</label>
											</div>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col-12">
											<input
												type="text"
												id="evento"
												value={this.state.evento}
												onChange={(e) => this.handleOnChange(e)}
												placeholder="Informe o valor do Evento (K)"
												className="form-control numerico"
												required
												ref={(input) => (this.evento = input)}
												autoComplete="off"
											/>
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
					{this.state.resultados.dados && (
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<div className="form-custom formulario">
									<h1 className="text-center mb-5">Aqui está o resultado</h1>
									<div className="row">
										<div className="col-12">
											<p className="h3 text-center">Probabilidade: {this.state.resultados.dados.resultado}%</p>
										</div>
									</div>
									<div className="form-row mt-3">
										<div className="col-12 text-center">
											<button
												style={{ maxWidth: "50%" }}
												onClick={() => {
													this.setState({ resultados: {} });
												}}
												className="btn btn-outline-secondary btn-custom"
												id="btnVoltar"
											>
												VOLTAR
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}
export default Probabilidade;
