import React, { Component } from "react";
import { menu, verificaUsuarioLogado } from "../../javascript/Scripts";
import Menu from "../../components/Menu";
import { Link } from "react-router-dom";

import history from "../../History";

class Correlacao extends Component {
	componentDidMount() {
		menu();
		if (!verificaUsuarioLogado()) history.push("/login");
	}
	render() {
		return (
			<div className="background">
				<Menu />
				<div className="container descritiva-main form-custom formulario">
					<div className="row">
						<div className="col-md-12 col-sm-12 text-center">
							<blockquote className="blockquote">
								<p className="mb-0">Importe seus arquivos ou os insira manualmente</p>
								<footer className="blockquote-footer">A análise será feita automaticamente</footer>
							</blockquote>
							<Link className="btn btn-outline-secondary btn-custom mb-3" to="/correlacao/upload" style={{ width: "77%" }}>
								Importar
							</Link>
							<Link className="btn btn-outline-secondary btn-custom" to="/correlacao/manual" style={{ width: "77%" }}>
								Inserir manualmente
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Correlacao;
