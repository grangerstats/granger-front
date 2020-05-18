import React, { Component } from "react";
import Axios from "axios";

// const URL = "http://localhost:3001";
const URL = "https://grangerapi-com.umbler.net";

class Separatrizes extends Component {
	constructor(props) {
		super(props);

		this.state = {
			exibeMedidas: false,
			opcaoesMedidas: [],
			resposta: "",
		};
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
		console.log("sep", this.separatriz.value, e.target.value);
		let body = {
			tipo: this.props.state.resultado.tipo,
			dados: this.props.state.resultado.dados,
		};
		body = JSON.stringify(body);
		let header = {
			"Content-type": "application/json",
		};

		Axios.post(`${URL}/${this.separatriz.value.toLowerCase()}/${e.target.value.toLowerCase()}`, body, { headers: header })
			.then((res) => {
				console.log("res");
				this.setState({ resposta: res.data });
			})
			.catch((erro) => {
				console.log("erro", erro);
			});
	}
	render() {
		return (
			<>
				<div className="col-md-3">
					<select className="form-control" ref={(input) => (this.separatriz = input)} onChange={(e) => this.handleChangeSeparatriz(e)}>
						<option value="Selecione">Selecione uma opção...</option>
						<option value="Quartil">Quartil</option>
						<option value="Quintil">Quintil</option>
						<option value="Decil">Decil</option>
						<option value="Porcentil">Porcentil</option>
					</select>
				</div>
				{this.state.exibeMedidas && (
					<div className="col-md-3">
						<select className="form-control" onChange={(e) => this.handleChangeMedidas(e)}>
							<option>Selecione uma opção...</option>
							{this.state.opcaoesMedidas.map((op) => (
								<option value={op.value} key={op.value}>
									{op.name}
								</option>
							))}
						</select>
					</div>
				)}
				<div className="col-md-4">
					<div className="medida-central">
						<span className="text-capitalize ">{this.state.resposta}</span>
					</div>
				</div>
			</>
		);
	}
}

export default Separatrizes;
