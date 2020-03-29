import React, { Component } from "react";
import { menu } from "./JavaScript/Scripts";
import Menu from "./Menu";

class Login extends Component {
    componentDidMount() {
        menu();
    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <h1>Login</h1>
            </div>
        )
    }
}
export default Login;