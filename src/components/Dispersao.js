import React, { Component } from "react";
import { ResponsiveContainer, ComposedChart, Line, Legend, Scatter, Tooltip, YAxis, XAxis, CartesianGrid } from "recharts";

export default class Dispersao extends Component {
	render() {
		return (
			<div>
				<ResponsiveContainer minHeight={300}>
					<ComposedChart data={this.props.dadosGrafico} width={530} height={250} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
						<XAxis dataKey="x" name={this.props.nomeIndependente} />
						<YAxis dataKey="y" name={this.props.nomeDependete} />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip cursor={{ strokeDasharray: "3 3" }} />
						<Legend />
						<Scatter name={`${this.props.nomeIndependente} x ${this.props.nomeDependete}`} fill="#1a639e" />
						<Line type="monotone" name="Linha de Regressão" dataKey="l" connectNulls={true} stroke="#34c2eb" fill="#34c2eb" />
					</ComposedChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
