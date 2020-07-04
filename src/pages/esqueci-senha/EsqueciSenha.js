import React, { Component } from 'react';
import Menu from "../../components/Menu";
import "../../css/Login.css";
import { menu, esqueciSenhaScript, descriptografar, criptografar } from "../../javascript/Scripts";
import Axios from "axios";
import history from "../../History";
import { URL } from "../../config/config";

export default class EsqueciSenha extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			newEmail: "",
			newSenha: "",
			isEsqueciSenha: true
		};

		this.handleEsqueci = this.handleEsqueci.bind(this);
		this.handleNovaSenha = this.handleNovaSenha.bind(this);
		this.handleChange = this.handleChange.bind(this)
	}
	componentDidMount() {
		menu();
		const email = history.location.search;
		if (email) {
			this.setState({ isEsqueciSenha: false })
			esqueciSenhaScript();
			const descptoEmail = descriptografar(email.split("=")[1])
			this.setState({ newEmail: descptoEmail })
		}
	}

	handleEsqueci(e) {
		e.preventDefault();

		const body = JSON.stringify({
			email: this.state.email,
		});

		const header = {
			"Content-type": "application/json",
		};

		console.log("1.0", URL)

		Axios.post(URL + "/esqueci-senha", body, { headers: header })
			.then((res) => {
				if (typeof res.data !== "string") {
					alert(res.data.mensagem);
					history.push("/");
				} else {
					alert(res.data);
				}
			})
			.catch((res) => {
				alert("Ocorreu um erro no processamento.")
				console.log("Erro", res);
			});
	}

	handleNovaSenha(e) {
		e.preventDefault();

		const body = JSON.stringify({
			email: this.state.newEmail,
			senha: criptografar(this.state.newSenha),
		});

		const header = {
			"Content-type": "application/json",
		};

		Axios.post(URL + "/esqueci-senha", body, { headers: header })
			.then((res) => {
				if (typeof res.data !== "string") {
					alert(res.data.mensagem);
					history.push("/login");
				} else {
					alert(res.data);
				}
			})
			.catch((res) => {
				alert("Ocorreu um erro no processamento.")
				console.log("Erro", res);
			});
	}

	handleChange(e) {
		if (e.target.id === "email") this.setState({ email: e.target.value });
		if (e.target.id === "newSenha") this.setState({ newSenha: e.target.value });
	}

	render() {
		return (
			<>
				<Menu />
				<div className="body">
					<div className="container-login" id="container-login">
						<div className="row">
							{
								this.state.isEsqueciSenha && (
									<div className="form-container sign-in-container">
										<form className="form-login" onSubmit={(e) => this.handleEsqueci(e)}>
											<h1 className="h2"><b>Digite seu e-mail</b></h1>
											<input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="input-login mt-4" required placeholder="E-mail" autoComplete="off" />
											<button className="button-login mt-3" type="submit">
												Enviar
									</button>
										</form>
									</div>
								)
							}
							{
								!this.state.isEsqueciSenha && (
									<div className="form-container sign-up-container">
										<form className="form-login" onSubmit={(e) => this.handleNovaSenha(e)}>
											<h1 className="h1-login">Cadatre nova senha</h1>
											<input type="email" value={this.state.newEmail} id="newEmail" className="input-login" placeholder="Email" disabled autoComplete="off" />
											<input type="password" value={this.state.newSenha} onChange={this.handleChange} id="newSenha" className="input-login" placeholder="Password" required autoComplete="off" />
											<button type="submit" className="button-login mt-2">
												Salvar
											</button>
										</form>
									</div>
								)
							}

							<div className="overlay-container">
								<div className="overlay">
									{
										this.state.isEsqueciSenha && (
											<div className="overlay-panel overlay-right">
												<h1 className="h1">Esqueceu sua senha?</h1>
												<p className="h6">Informe seu e-mail para recuperar sua senha</p>
											</div>
										)
									}

									{
										!this.state.isEsqueciSenha && (
											<div className="overlay-panel overlay-left">
												<h1 className="h1-login">Nova senha!</h1>
												<p className="p-login">Cadastre uma nova senha para acessar o sistema</p>
											</div>
										)
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}