import React, { Component } from "react";
import "../css/Stars.css";
import { Stage, Sprite } from '@inlet/react-pixi';

class Stars extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <Stage>
            <Sprite image="./bunny.png" x={100} y={100} />
          </Stage>
            // <div className="container-fluid stars">
            //     <div className="row stars-row">
            //         <img className="stars-img" src={require("../imagens/hermione.gif")} alt="HermioneGif" />
            //     </div>
            // </div>
        );
    }
}
export default Stars;