import React, { Component } from "react";
import { menu, loginScripts, setUsuarioLogado } from "../../javascript/Scripts";
import "../../css/Login.css";
import Menu from "../../components/Menu";
import Axios from "axios";
import { URL } from "../../config/config";
import history from "../../History";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			newNome: "",
			newEmail: "",
			newSenha: "",
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.handleInscreva = this.handleInscreva.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		menu();
		loginScripts();
	}

	handleLogin(e) {
		e.preventDefault();

		const body = JSON.stringify({
			email: this.state.email,
			senha: this.state.password,
		});

		const header = {
			"Content-type": "application/json",
		};

		Axios.post(URL + "/login", body, { headers: header })
			.then((res) => {
				if (res.data !== "Usuário não cadstrado!") {
					setUsuarioLogado(JSON.stringify(res.data));
					console.log(history);
					history.goBack();
				} else {
					alert(res.data);
				}
			})
			.catch((res) => {
				console.log("Erro", res);
			});
	}

	handleInscreva(e) {
		e.preventDefault();
		e.preventDefault();

		const body = JSON.stringify({
			email: this.state.newEmail,
			senha: this.state.newPassword,
			nome: this.state.newNome,
		});

		const header = {
			"Content-type": "application/json",
		};

		Axios.post(URL + "/cadastrar", body, { headers: header })
			.then((res) => {
				if (res.data !== "Usuário não cadstrado!") {
					setUsuarioLogado(JSON.stringify(res.data));
					history.push(-1);
				} else {
					alert(res.data);
				}
			})
			.catch((res) => {
				console.log("Erro", res);
			});
	}

	handleChange(e) {
		if (e.target.id === "password") this.setState({ password: e.target.value });
		if (e.target.id === "email") this.setState({ email: e.target.value });

		if (e.target.id === "newNome") this.setState({ newNome: e.target.value });
		if (e.target.id === "newEmail") this.setState({ newEmail: e.target.value });
		if (e.target.id === "newSenha") this.setState({ newSenha: e.target.value });
	}

	render() {
		return (
			<>
				<Menu />
				<div className="body">
					<div className="container-login" id="container-login">
						<div className="row">
							<div className="form-container sign-up-container">
								<form className="form-login" onSubmit={(e) => this.handleInscreva(e)}>
									<h1 className="h1-login">Crie sua conta</h1>
									{/* <div className="social-container">
								<a className="a-login"   href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a className="a-login"   href="http://google.com" className="social" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-google-plus-g"></i>
								</a>
								<a className="a-login"   href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div> */}
									<input type="text" value={this.state.newNome} onChange={this.handleChange} id="newNome" required className="input-login mt-4" placeholder="Name" autoComplete="off" />
									<input type="email" value={this.state.newEmail} onChange={this.handleChange} id="newEmail" className="input-login" placeholder="Email" required autoComplete="off" />
									<input type="password" value={this.state.newSenha} onChange={this.handleChange} id="newSenha" className="input-login" placeholder="Password" required autoComplete="off" />
									<button type="submit" className="button-login mt-2">
										Inscreva-se
									</button>
								</form>
							</div>
							<div className="form-container sign-in-container">
								<form className="form-login" onSubmit={(e) => this.handleLogin(e)}>
									<h1 className="h1-login">Login</h1>
									{/* <div className="social-container">
								<a className="a-login"   href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a className="a-login"   href="http://google.com" className="social" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-google-plus-g"></i>
								</a>
								<a className="a-login"   href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div> */}
									<input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="input-login mt-4" required placeholder="E-mail" autoComplete="off" />
									<input type="password" id="password" value={this.state.password} onChange={this.handleChange} className="input-login" required placeholder="Senha" autoComplete="off" />
									<a className="a-login" href="http://google.com">
										Esqueci minha senha
									</a>
									<button className="button-login" type="submit">
										Login
									</button>
								</form>
							</div>
							<div className="overlay-container">
								<div className="overlay">
									<div className="overlay-panel overlay-left">
										<h1 className="h1-login">Bem vindo de volta!</h1>
										<p className="p-login"> Entre com seus dados e faça login</p>
										<button className="button-login ghost" id="signIn">
											Login
										</button>
									</div>
									<div className="overlay-panel overlay-right">
										<h1 className="h1-login">Não tem cadastro?</h1>
										<p className="p-login">Cadastre-se e comece sua jornada no Granger</p>
										<button className="button-login ghost" id="signUp">
											Inscreva-se
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Login;
