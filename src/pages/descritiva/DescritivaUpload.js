import React, { Component } from "react";
import Menu from "../../components/Menu";
import axios from "axios";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";
import Histograma from "../../components/Histrograma";
import { mudaNome, abrirUpload } from "../../javascript/Scripts";
import Tabela from "../../components/Tabela";
import DesvioPadrao from "../../components/DesvioPadrao";
import { URL } from "../../config/config";

class Descritiva extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nomeVariavel: "",
			resultado: {},
			dados: "",
			nomeArquivo: "Escolha um arquivo",
			amostra: true,
			populacao: false,
			exibeMedidas: false,
			opcaoesMedidas: [],
			resposta: "",
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
		this.setState({ nomeArquivo: dados.name });
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

	async handleUp(linha) {
		let vetor = this.state.resultado.dados;
		let indexLinha = vetor.indexOf(linha);
		let indexTroca = indexLinha - 1;
		let auxLinha = vetor[indexTroca];

		vetor = vetor.filter((item) => item !== linha);
		vetor = vetor.filter((item) => item !== auxLinha);

		vetor.splice(indexTroca, 0, linha);
		vetor.splice(indexLinha, 0, auxLinha);

		let novoResultado = this.state.resultado;
		novoResultado.dados = vetor;

		this.setState({ resultado: novoResultado });

		let body = {
			tipo: this.state.resultado.tipo,
			dados: [],
		};

		this.state.resultado.dados.forEach((item) => {
			for (let index = 0; index < item.value; index++) {
				body.dados.push(item.name);
			}
		});

		body = JSON.stringify(body);
		let header = {
			"Content-type": "application/json",
		};
		await axios
			.post(`${URL}/mediana`, body, { headers: header })
			.then((response) => {
				novoResultado = this.state.resultado;
				novoResultado.mediana = response.data;
				this.setState({ resultado: novoResultado });
			})
			.catch((erro) => alert("Ocorreu um erro no processamento."));

		body = {
			tipo: this.state.resultado.tipo,
			dados: this.state.resultado.dados,
		};
		body = JSON.stringify(body);
		header = {
			"Content-type": "application/json",
		};

		if (this.separatriz.value.trim() !== "" && this.medida && this.medida.value.trim() !== "") {
			axios
				.post(`${URL}/${this.separatriz.value.toLowerCase()}/${this.medida.value.toLowerCase()}`, body, { headers: header })
				.then((res) => {
					console.log("res");
					this.setState({ resposta: res.data });
				})
				.catch((erro) => {
					alert("Ocorreu um erro no processamento.")
					console.log("erro", erro);
				});
		}
	}

	async handleDown(linha) {
		let vetor = this.state.resultado.dados;
		let indexLinha = vetor.indexOf(linha);
		let indexTroca = indexLinha + 1;
		let auxLinha = vetor[indexTroca];

		vetor = vetor.filter((item) => item !== linha);
		vetor = vetor.filter((item) => item !== auxLinha);

		vetor.splice(indexLinha, 0, auxLinha);
		vetor.splice(indexTroca, 0, linha);

		let novoResultado = this.state.resultado;
		novoResultado.dados = vetor;

		this.setState({ resultado: novoResultado });
		let body = {
			tipo: this.state.resultado.tipo,
			dados: [],
		};

		this.state.resultado.dados.forEach((item) => {
			for (let index = 0; index < item.value; index++) {
				body.dados.push(item.name);
			}
		});

		body = JSON.stringify(body);
		let header = {
			"Content-type": "application/json",
		};
		await axios
			.post(`${URL}/mediana`, body, { headers: header })
			.then((response) => {
				novoResultado = this.state.resultado;
				novoResultado.mediana = response.data;
				this.setState({ resultado: novoResultado });
			})
			.catch((erro) => alert("Ocorreu um erro no processamento."));

		body = {
			tipo: this.state.resultado.tipo,
			dados: this.state.resultado.dados,
		};
		body = JSON.stringify(body);
		header = {
			"Content-type": "application/json",
		};

		if (this.separatriz.value.trim() !== "" && this.medida && this.medida.value.trim() !== "") {
			axios
				.post(`${URL}/${this.separatriz.value.toLowerCase()}/${this.medida.value.toLowerCase()}`, body, { headers: header })
				.then((res) => {
					console.log("res");
					this.setState({ resposta: res.data });
				})
				.catch((erro) => {
					alert("Ocorreu um erro no processamento.")
					console.log("erro", erro);
				});
		}
	}

	renderizaMedidaCentral() {
		if (this.state.resultado.media.trim() && !this.state.resultado.moda.trim() && !this.state.resultado.mediana.trim())
			return (
				<div className="medidas">
					<span className="text-capitalize ">{this.state.resultado.media}</span>
				</div>
			);

		if (!this.state.resultado.media.trim() && this.state.resultado.moda.trim() && !this.state.resultado.mediana.trim())
			return (
				<div className="medidas">
					<span className="text-capitalize ">{this.state.resultado.moda}</span>
				</div>
			);

		if (!this.state.resultado.media.trim() && !this.state.resultado.moda.trim() && this.state.resultado.mediana.trim())
			return (
				<div className="medidas">
					<span className="text-capitalize ">{this.state.resultado.mediana}</span>
				</div>
			);

		if (this.state.resultado.media.trim() && this.state.resultado.moda.trim() && this.state.resultado.mediana.trim())
			return (
				<div className="medidas">
					<span className="text-capitalize ">
						{this.state.resultado.media} - {this.state.resultado.moda} - {this.state.resultado.mediana}
					</span>
				</div>
			);
		if (!this.state.resultado.media.trim() && this.state.resultado.moda.trim() && this.state.resultado.mediana.trim())
			return (
				<div className="medidas">
					<span className="text-capitalize ">
						{this.state.resultado.moda} - {this.state.resultado.mediana}
					</span>
				</div>
			);
		if (this.state.resultado.media.trim() && !this.state.resultado.moda.trim() && this.state.resultado.mediana.trim())
			return (
				<div className="medidas">
					<span className="text-capitalize ">
						{this.state.resultado.media} - {this.state.resultado.mediana}
					</span>
				</div>
			);
		if (this.state.resultado.media.trim() && this.state.resultado.moda.trim() && !this.state.resultado.mediana.trim())
			return (
				<div className="medidas">
					<span className="text-capitalize ">
						{this.state.resultado.media} - {this.state.resultado.moda}
					</span>
				</div>
			);
	}

	calcular(evento) {
		evento.preventDefault();

		if (this.state.dados === "") {
			return alert("Nenhum arquivo foi importado.")
		}
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
				alert("Ocorreu um erro no processamento.")
				console.log("Erro", res);
			});
	}

	handleChangeSeparatriz(e) {
		let opcoes = [];
		if (this.separatriz.selectedIndex === 1) {
			for (let index = 1; index <= 4; index++) {
				const element = { value: index, name: `${index}` };
				opcoes.push(element);
			}
		}
		if (this.separatriz.selectedIndex === 2) {
			for (let index = 1; index <= 5; index++) {
				const element = { value: index, name: `${index}` };
				opcoes.push(element);
			}
		}
		if (this.separatriz.selectedIndex === 3) {
			for (let index = 1; index <= 10; index++) {
				const element = { value: index, name: `${index}` };
				opcoes.push(element);
			}
		}
		if (this.separatriz.selectedIndex === 4) {
			for (let index = 1; index <= 100; index++) {
				const element = { value: index, name: `${index}` };
				opcoes.push(element);
			}
		}
		this.setState({ exibeMedidas: true });
		this.setState({ opcaoesMedidas: opcoes });
	}

	handleChangeMedidas(e) {
		let body = {
			tipo: this.state.resultado.tipo,
			dados: this.state.resultado.dados,
		};
		body = JSON.stringify(body);
		let header = {
			"Content-type": "application/json",
		};

		axios
			.post(`${URL}/${this.separatriz.value.toLowerCase()}/${e.target.value.toLowerCase()}`, body, { headers: header })
			.then((res) => {
				this.setState({ resposta: res.data });
			})
			.catch((erro) => {
				alert("Ocorreu um erro no processamento.")
				console.log("erro", erro);
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
														{this.state.nomeArquivo}
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
												<Tabela resultado={this.state.resultado} {...this.props} handleUp={this.handleUp.bind(this)} handleDown={this.handleDown.bind(this)} />
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-12">
											<p className="h3 text-center">Medidas de Tendência Central</p>
										</div>
										{this.renderizaMedidaCentral()}
									</div>

									<DesvioPadrao {...this} />

									<div className="row mb-4">
										<div className="col-12">
											<div className="row">
												<div className="col-12">
													<p className="h3 text-center">Medidas Separatrizes</p>
												</div>
											</div>
											<div className="d-flex justify-content-center">
												<div className="col-md-2">
													<select className="form-control" ref={(input) => (this.separatriz = input)} onChange={(e) => this.handleChangeSeparatriz(e)}>
														<option value="Selecione">Selecione...</option>
														<option value="Quartil">Quartil</option>
														<option value="Quintil">Quintil</option>
														<option value="Decil">Decil</option>
														<option value="Porcentil">Porcentil</option>
													</select>
												</div>
												{this.state.exibeMedidas && (
													<>
														<div className="col-md-2">
															<select className="form-control" ref={(input) => (this.medida = input)} onChange={(e) => this.handleChangeMedidas(e)}>
																<option>Selecione...</option>
																{this.state.opcaoesMedidas.map((op) => (
																	<option value={op.value} key={op.value}>
																		{op.name}
																	</option>
																))}
															</select>
														</div>
														<div>
															<div className="medidas">
																<span className="text-capitalize ">{this.state.resposta}</span>
															</div>
														</div>
													</>
												)}
											</div>
										</div>
									</div>
									{/* <div className="row mb-2">
										<button id="btnVoltar" className="btn btn-outline-secondary btn-custom text-uppercase" onClick={() => this.saveAsPDF()}>
											Salvar Resultado
										</button>
									</div> */}
									<div className="row">
										<button
											onClick={() => {
												this.setState({ resultado: {} });
												this.setState({ exibeMedidas: false });
												this.setState({ opcaoesMedidas: [] });
												this.setState({ resposta: "" });
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
				</div>
			</div>
		);
	}
}
export default Descritiva;
