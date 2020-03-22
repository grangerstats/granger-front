import React, { Component } from "react";
import Menu from "./Menu";
import {Link} from "react-router-dom";



class DescritivaMain extends Component {
    render() {
        return (

            <div>
                <Menu />
                <div className="container-fluid descritiva-main">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <img alt="Dados" src={require("./imagens/data.svg")} className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="import">
                                <blockquote className="blockquote">
                                    <p className="mb-0">Importe seus arquivos ou os insira manualmente</p>
                                    <footer className="blockquote-footer">A análise será feita automaticamente
                                </footer>
                                </blockquote>
                                <Link className="btn shadow bg-white btn-custom btn-import" to="/upload">Importar</Link>
                                <Link className="btn shadow bg-white btn-custom btn-import" to="/manual">Inserir manualmente</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DescritivaMain