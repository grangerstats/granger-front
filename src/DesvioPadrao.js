import React from "react";

const DesvioPadrao = (props) => {
	if (props.state.resultado.tipo.includes("quantitativa"))
		return (
			<div className="row">
				<div className="col-12">
					<p className="h3 text-center">Medidas de Dispersão</p>
				</div>
				<div className="col-12 text-center">
					<p className="medidas"> {props.state.resultado.desvio}</p>
				</div>
			</div>
		);
	return <div></div>;
};

export default DesvioPadrao;
