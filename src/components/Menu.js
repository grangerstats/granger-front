import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { verificaUsuarioLogado, removeUsuarioLogado } from '../javascript/Scripts'

class Granger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false
        }
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount(){
        this.handleLogout();
    }

    componentDidUpdate() {
        this.handleLogout();
    }

    handleLogout() {
        const isLogged = verificaUsuarioLogado();
        if (isLogged !== this.state.isLogged) this.setState({ isLogged });
        // console.log("state", this.state);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">GRANGER</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link slide-left-right" to="/descritiva">Estatística Descritiva</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link slide-left-right" to="/probabilidade">Probabilidade</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link slide-left-right" to="/correlacao">Correlação e Regressão</Link>
                            </li>
                            {
                                !this.state.isLogged && (
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-outline-secondary btn-login" to="/login">LOGIN</Link>
                                    </li>
                                )
                            }

                            {
                                this.state.isLogged && (
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-outline-secondary btn-login" to="/" onClick={() => {
                                            this.handleLogout();
                                            removeUsuarioLogado();
                                        }}>LOGOUT</Link>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Granger;
