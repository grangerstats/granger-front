import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Granger extends Component {
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
                    <li className="nav-item">
                        <Link className="nav-link btn btn-outline-secondary btn-login" to="/login">LOGIN</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
  }
}
export default Granger;
