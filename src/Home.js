import React, { Component } from "react";
import {Link} from "react-router-dom";
import Menu from "./Menu";
import {menu} from "./JavaScript/Scripts"

class Home extends Component {
    componentDidMount(){
        menu();
    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <div className="container-fluid image">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 heading-text">
                            <div className="row">
                                <h1 className="main-txt">Prático e intuitivo</h1>
                            </div>
                            <div className="row">
                                <h2>Com três análises básicas e objetivas, você consegue tomar a melhor decisão para fazer seu
                                negócio
                                decolar.</h2>
                            </div>
                            <div className="row">
                                <Link className="btn btn-outline btn-start" to="/login">Comece Agora</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src={require("./imagens/main.svg")} alt="ImagemPrincipal" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid works">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="txt-works">Como funciona</h1>
                        </div>
                        <div className="row steps">
                            <div className="col-md-4 col-sm-12">
                                <h3>1. Importe ou insira os dados</h3>
                                <p>Importe os dados no formato .csv ou os insira manualmente.</p>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <h3>2. Gere os gráficos</h3>
                                <p>De acordo com o tipo dos dados, os cálculos e os gráficos serão gerados automaticamente.</p>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <h3>3. Tome a melhor decisão</h3>
                                <p>Por fim, é só analisar os resultados e tomar a melhor decisão.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid est-desc">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <img className="analysis" src={require("./imagens/ED.png")} alt="ImagemDescritiva"/>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="row">
                                <h1 className="ed-txt">Estatística Descritiva</h1>
                            </div>
                            <div className="row">
                                <h2>A estatística descritiva é um ramo da estatística que aplica várias técnicas para descrever e
                                sumarizar um conjunto de dados. Diferencia-se da estatística inferencial, ou estatística
                                indutiva, pelo objectivo: organizar, sumarizar dados ao invés de usar os dados em aprendizado
                                sobre a população. Esse princípio torna a estatística descritiva uma disciplina independente.
                                </h2>
                            </div>
                            <div className="row">
                                <Link className="btn btn-outline btn-start" to="/descritiva">Comece Agora</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container prob">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 prob-text">
                            <div className="row">
                                <h1>Probabilidade</h1>
                            </div>
                            <div className="row">
                                <h2>Probabilidade é um ramo da Matemática em que as chances de ocorrência de experimentos são
                                calculadas. É por meio de uma probabilidade, por exemplo, que podemos saber desde a chance de
                                obter cara ou coroa no lançamento de uma moeda até a chance de erro em pesquisas.
                                Começar</h2>
                            </div>
                            <div className="row">
                                <Link className="btn btn-outline btn-start" to="/probabilidade">Comece Agora</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img className="analysis" src={require("./imagens/Prob.png")} alt="ImagemProbabilidade"/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid corr">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <img className="analysis" src={require("./imagens/CR.png")} alt="ImagemCorrelacao" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="row">
                                <h1 className="corr-txt">Correlação e Regressão</h1>
                            </div>
                            <div className="row">
                                <h2>Em probabilidade e estatística, correlação, dependência ou associação é qualquer relação
                                estatística (causal ou não causal) entre duas variáveis e correlação é qualquer relação dentro
                                de uma ampla classNamee de relações estatísticas que envolva dependência entre duas variáveis. Por
                                exemplo, a correlação entre a estatura dos pais e a estatura dos pais e dos filhos.
                                </h2>
                            </div>
                            <div className="row">
                                <Link className="btn btn-outline btn-start" to="/correlacao">Comece Agora</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;