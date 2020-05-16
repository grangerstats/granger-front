import React, { Component } from "react";
import Menu from "./Menu";
import axios from "axios";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import Histograma from "./Histrograma";
import { mudaNome, abrirUpload } from "./JavaScript/Scripts";
import Tabela from "./Tabela";

const URL = "http://localhost:3030";
// const URL = "https://grangerapi-com.umbler.net"

class Descritiva extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nomeVariavel: "",
			resultado: {},
			dados: "",
			amostra: true,
			populacao: false,
		};

		this.handleNomeVariavel = this.handleNomeVariavel.bind(this);
		this.handleDados = this.handleDados.bind(this);
		this.handleAmostra = this.handleAmostra.bind(this);
		this.handlePopulacao = this.handlePopulacao.bind(this);
		this.calcular = this.calcular.bind(this);
	}

	componentDidMount() {
		mudaNome();
		abrirUpload();
	}

	handleNomeVariavel() {
		this.setState({ nomeVariavel: this.nomeVariavel.value });
	}

	handleDados() {
		let dados = this.nomeUpload.files[0];
		let resultadoFinal = "";
		let fileReader = new FileReader();
		fileReader.onload = () => {
			resultadoFinal = fileReader.result;
			this.setState({ dados: resultadoFinal });
		};

		fileReader.readAsText(dados);
	}

	handleAmostra() {
		this.setState({ amostra: !this.state.amostra });
		this.setState({ populacao: !this.state.populacao });
	}

	handlePopulacao() {
		this.setState({ populacao: !this.state.populacao });
		this.setState({ amostra: !this.state.amostra });
	}

	calcular(evento) {
		evento.preventDefault();
		let body = this.state;
		body = JSON.stringify(body);
		let header = {
			"Content-type": "application/json",
		};
		axios
			.post(URL + "/descritiva", body, { headers: header })
			.then((res) => {
				this.setState({ resultado: res.data });
			})
			.catch((res) => {
				console.log("Erro", res);
			});
	}

	render() {
		let fac = 0;
		let facPerc = 0;

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
												id="nomeVariavel"
												placeholder="Nome da variável"
												className="form-control"
												required
												value={this.state.nomeVariavel}
												onChange={this.handleNomeVariavel}
												ref={(input) => (this.nomeVariavel = input)}
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
														Escolha o arquivo
													</label>
												</div>
											</div>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col-12 text-center d-flex flex-column">
											<div className="btn-group btn-group-toggle" data-toggle="buttons">
												<label className="btn btn-secondary active">
													{" "}
													Amostra
													<input type="radio" name="options" id="amostra" defaultChecked onClick={this.handleAmostra} ref={(input) => (this.amostra = input)}></input>
												</label>
												<label className="btn btn-secondary">
													{" "}
													População
													<input type="radio" name="options" id="populacao" onClick={this.handlePopulacao} ref={(input) => (this.populacao = input)}></input>
												</label>
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
					<div className="row">
						<div className="col-md-12 col-sm-12">
							{this.state.resultado.dados && (
								<div className="form-custom">
									<div className="row">
										<div className="col-md-6 col-sm-12">
											{this.state.resultado.tipo === "qualitativa" && <PieChart dataGrafico={this.state.resultado.dados} />}
											{this.state.resultado.tipo === "quantitativaDiscreta" && <BarChart dataGrafico={this.state.resultado.dados} nomeLegenda={this.state.resultado.variavel} />}
											{this.state.resultado.tipo === "quantitativaContinua" && <Histograma dataGrafico={this.state.resultado.dados} nomeLegenda={this.state.resultado.variavel} />}
										</div>
										<div className="col-md-6 col-sm-12">
											<div className="table-responsive">
												<Tabela resultado={this.state.resultado} />
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Descritiva;
