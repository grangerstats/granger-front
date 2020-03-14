import React, { Component } from 'react';

class Granger extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">GRANGER</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav navbar-right ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Estatística Descritiva <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Probabilidade</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Correlação e Regressão</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">LOGIN</a>
            </li>
          </ul>
        </div>
      </nav>)
  }
}
export default Granger;
