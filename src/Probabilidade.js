import React, { Component } from "react";
import Menu from "./Menu";
import { menu } from "./JavaScript/Scripts"

class Probabilidade extends Component {
    componentDidMount() {
        menu();
    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <h1>Probabilidade</h1>
            </div>
        )
    }
}
export default Probabilidade;