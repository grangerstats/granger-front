import React, { Component } from "react";

class Tabela extends Component {
	render() {
		let fac = 0;
		let facPerc = 0;

		return (
			<table className="table">
				<thead className="thead-dark text-center">
					<tr>
						{this.props.resultado.tipo === "qualitativa" && <th style={{ width: "40px" }} scope="col"></th>}
						<th scope="col" className="text-capitalize">
							{this.props.resultado.variavel}
						</th>
						<th scope="col">Frequência Simples (Fi)</th>
						<th scope="col">Frequência simples % (Fr%)</th>
						<th scope="col">Frequência acumulada (Fac)</th>
						<th scope="col">Frequência acumulada % (Fac%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.resultado.dados.map((item) => {
						fac = fac + item.value;
						facPerc = facPerc + item.fr;

						return (
							<tr className="text-center" key={item.name}>
								{this.props.resultado.tipo === "qualitativa" && (
									<td className="btn-up-down">
										{this.props.resultado.dados.indexOf(item) > 0 && (
											<span style={{ marginTop: "9px" }} onClick={() => this.props.handleUp(item)}>
												<i className="fas fa-sort-up"></i>
											</span>
										)}

										{this.props.resultado.dados.indexOf(item) < this.props.resultado.dados.length - 1 && (
											<span onClick={() => this.props.handleDown(item)}>
												<i className="fas fa-sort-down"></i>
											</span>
										)}
									</td>
								)}
								<td className="text-capitalize">{item.name}</td>
								<td>{item.value}</td>
								<td>{item.fr}%</td>
								<td>{fac}</td>
								<td>{facPerc}%</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}
export default Tabela;
