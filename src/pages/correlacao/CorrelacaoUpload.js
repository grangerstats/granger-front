import React, { Component } from "react";
import Menu from "../../components/Menu";
import axios from "axios";
import { URL } from "../../config/config";
import { mudaNome, abrirUpload } from "../../javascript/Scripts";
import Dispersao from "../../components/Dispersao";

export default class CorrelacaoUpload extends Component {
	constructor(props) {
		super(props);

		this.state = {
			resultado: {},
			nomeDependete: "",
			dados: "",
			nomeIndependente: "",
			projecaoX: "",
			projecaoY: "",
			nomeArquivo: "Escolha um arquivo",
		};

		this.handleChange = this.handleChange.bind(this);
		this.calcular = this.calcular.bind(this);
		this.handleDados = this.handleDados.bind(this);
	}
	componentDidMount() {
		mudaNome();
		abrirUpload();
	}

	handleDados() {
		let dados = this.nomeUpload.files[0];
		this.setState({ nomeArquivo: dados.name });
		let resultadoFinal = "";
		let fileReader = new FileReader();
		fileReader.onload = () => {
			resultadoFinal = fileReader.result;
			this.setState({ dados: resultadoFinal });
		};

		fileReader.readAsText(dados);
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

		if (this.state.dados === "") {
			return alert("Nenhum arquivo foi importado.")
		}

		const dados = this.state.dados.split("\n")

		const x = dados[0];
		const y = dados[1];

		console.log("dados", dados)
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
				alert("Ocorreu um erro no processamento.")
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
											<div className="input-group">
												<div className="custom-file">
													<input
														type="file"
														className="custom-file-input"
														id="inputGroupFile01"
														aria-describedby="inputGroupFileAddon01"
														ref={(input) => (this.nomeUpload = input)}
														onChange={this.handleDados}
													/>
													<label className="custom-file-label" htmlFor="inputGroupFile01" data-browse="Buscar">
														{this.state.nomeArquivo}
													</label>
												</div>
											</div>
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
										this.setState({ dados: "" })
										this.setState({ nomeArquivo: "Escolha um arquivo" })
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
