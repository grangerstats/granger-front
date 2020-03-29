import React, { Component } from "react";
import { menu } from "./JavaScript/Scripts";
import Menu from "./Menu";

class Correlacao extends Component {
    componentDidMount() {
        menu();
    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <h1>Correlação e Regressão</h1>
            </div>
        )
    }
}
export default Correlacao;