import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import { menu, verificaUsuarioLogado } from "../../javascript/Scripts";

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLogged: false
		}
	}
	componentDidMount() {
		menu();

		const isLogged = verificaUsuarioLogado();
		this.setState({ isLogged: isLogged })
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
								<p className="lead">Com três análises básicas e objetivas, você consegue tomar a melhor decisão para fazer seu negócio decolar.</p>
							</div>
							<div className="row">
								{
									!this.state.isLogged && (
										<Link className="btn btn-outline btn-start" to="/login">
											Comece Agora
										</Link>
									)
								}

							</div>
						</div>
						<div className="col-md-6 col-sm-12">
							<img className="main-img" src={require("../../imagens/Main.png")} alt="ImagemPrincipal" />
						</div>
					</div>
					<div className="row">
						<img className="onda-top" src={require("../../imagens/onda top.png")} alt="" />
					</div>
				</div>
				<div className="container works">
					<div className="row">
						<div className="col-12">
							<h1 className="txt-works">Como funciona</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-12">
							<div className="row">
								<img className="steps" src={require("../../imagens/Step1.png")} alt="Importação" />
							</div>
							<div className="row txt-steps">
								<h3>1. Importe ou insira os dados</h3>
								<p>Importe os dados no formato .csv ou os insira manualmente.</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-12">
							<div className="row">
								<img className="steps" src={require("../../imagens/Step2.png")} alt="Gráficos" />
							</div>
							<div className="row txt-steps">
								<h3>2. Gere os gráficos</h3>
								<p>De acordo com o tipo dos dados, os cálculos e os gráficos serão gerados automaticamente.</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-12">
							<div className="row">
								<img className="steps" src={require("../../imagens/Step3.png")} alt="Decisão" />
							</div>
							<div className="row txt-steps">
								<h3>3. Tome a melhor decisão</h3>
								<p>Por fim, é só analisar os resultados e tomar a melhor decisão.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="poligonos">
					<div className="container est-desc">
						<div className="row">
							<div className="col-md-6 col-sm-12">
								<img className="analysis" src={require("../../imagens/ED.png")} alt="ImagemDescritiva" />
							</div>
							<div className="col-md-6 col-sm-12">
								<div className="row">
									<h1 className="ed-txt">Estatística Descritiva</h1>
								</div>
								<div className="row">
									<h2>
										A Estatística Descritiva é a etapa inicial de uma análise de dados e é utilizada para resumi-los e compreendê-los melhor. Essa área da estatística é utilizada com frequência em
										situações em que nos deparamos com uma grande quantidade de informações e precisamos torná-las mais condensadas para um trabalho mais claro.
										<br />
										Com recursos como média, mediana, moda, desvio padrão e medidas separatrizes, conseguimos visualizar qual o melhor caminho a seguir.
									</h2>
								</div>
								<div className="row">
									<Link className="btn btn-outline btn-start" to="/descritiva">
										Comece Agora
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="container prob mt-4">
						<div className="row">
							<div className="col-md-6 col-sm-12 prob-text">
								<div className="row">
									<h1>Probabilidade</h1>
								</div>
								<div className="row">
									<h2>
										Probabilidade é o ramo da Matemática em que se calcula a chance de um experimento ocorrer. É por meio dela se descobre a possibilidade de sucesso ou fracasso de determinada
										atividade ou projeto.
										<br />
										No Granger, você conta com a Distribuição Binomial, a Distribuição Normal e também a Distribuição Uniforme, sendo então de grande ajuda para que você vá com tudo rumo aos seus
										objetivos.
									</h2>
								</div>
								<div className="row">
									<Link className="btn btn-outline btn-start" to="/probabilidade">
										Comece Agora
									</Link>
								</div>
							</div>
							<div className="col-md-6 col-sm-12">
								<img className="analysis" src={require("../../imagens/Prob.png")} alt="ImagemProbabilidade" />
							</div>
						</div>
					</div>
					<div className="container corr mt-4">
						<div className="row">
							<div className="col-md-6 col-sm-12">
								<img className="analysis" src={require("../../imagens/CR.png")} alt="ImagemCorrelacao" />
							</div>
							<div className="col-md-6 col-sm-12">
								<div className="row">
									<h1 className="corr-txt">Correlação e Regressão</h1>
								</div>
								<div className="row">
									<h2>
										Para situações nas quais há interesse em estudar o comportamento conjunto de uma ou mais variáveis para a ocorrência de determinado fenômeno ou ação, a Correlação e Regressão é a
										principal ferramenta.
										<br />
										Logo, disponibilizamos em nosso software a análise de duas variáveis. Você conseguirá estimar a relação entre elas de maneira fácil e também direcionar os recursos e estratégias
										com exatidão e impulsionar suas metas.
									</h2>
								</div>
								<div className="row">
									<Link className="btn btn-outline btn-start" to="/correlacao">
										Comece Agora
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid testimo mt-5">
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<h1 className="testimonial">Depoimentos</h1>
						</div>
						<div className="col-md-6 col-sm-12">
							<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img src={require("../../imagens/Testimonial1.png")} className="d-block w-100 carrousel-img" alt="..." />
									</div>
									<div className="carousel-item">
										<img src={require("../../imagens/Testimonial2.png")} className="d-block w-100 carrousel-img" alt="..." />
									</div>
									<div className="carousel-item">
										<img src={require("../../imagens/Testimonial3.png")} className="d-block w-100 carrousel-img" alt="..." />
									</div>
								</div>
								<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="sr-only">Anterior</span>
								</a>
								<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="sr-only">Próximo</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="container faq">
					<div className="row faq-title text-center">
						<h1>FAQ</h1>
					</div>
					<div className="row">
						<div className="accordion" id="accordionExample">
							<div className="card">
								<div className="card-header" id="headingOne">
									<button className="btn btn-link faq-btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										+ O que o sistema Granger oferece?
									</button>
								</div>
								<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
									<div className="card-body">
										O sistema Granger oferece um conjunto de soluções de análises, focadas na melhor tomada de decisão.
										Dentre as ferramentas oferecidas temos a Estatística Descritica, a Probabilidade e a Correlação e Regressão.
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingTwo">
									<button className="btn btn-link collapsed faq-btn" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										+ Qual a configuração miníma recomendada para uso do sistema?
									</button>
								</div>
								<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
									<div className="card-body">
										Por operar através da internet, é possível utilizar o sistema Granger mesmo em computadores e notebooks mais antigos. Nossa recomendação é ter uma conexão com a internet de boa qualidade e de preferência banda larga.
										Aconselhamos que você mantenha seu computador com as atualizações mais recentes e que utilize um sistema de segurança.
										Recomendamos também que o uso do sistema seja feito pelo navegador Chrome, para melhor velocidade e compatibilidade com o sistema.
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingThree">
									<button className="btn btn-link collapsed faq-btn" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										+ Qual o valor para utilizar o sistema?
									</button>
								</div>
								<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
									<div className="card-body">
										Para uma simulação de valor personalizada para as uas necessidades, nossa equipe de atendimento está a disposição.
										Contate-nos através das informações do rodapé dessa página, ou entre em contato através do e-mail: fatecfranca@fatecfranca.edu.br
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingThree">
									<button className="btn btn-link collapsed faq-btn" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
										+ Posso experimentar o Granger antes de me decidir?
									</button>
								</div>
								<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
									<div className="card-body">
										Sim, disponibilizamos uma versão de teste por até 15 dias.
										Assim, você consegue explorar as funcionalidades do sistema e observar se o Granger atende às suas necessidades.
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingFive">
									<button className="btn btn-link collapsed faq-btn" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										+ Por que um sistema Web seria o melhor para mim?
									</button>
								</div>
								<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
									<div className="card-body">
										Um sistema Web possui uma série de vantagens sobre um sistema instalado em um servidor no seu negócio.
										Com um sistema 100% Web, você possui mobilidade e consegue acessar os dados e resultados que quiser de qualquer lugar, e através de diversas plataformas, como tablets e smartphones.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid footer">
					<div className="row">
						<img className="onda-bottom" src={require("../../imagens/onda-bottom.png")} alt="" />
					</div>
					<div className="row row-granger">
						<div className="col-md-6 col-sm-12">
							<h3 className="gr-txt">GRANGER</h3>
							<hr />
						</div>
					</div>
					<div className="row row-footer">
						<div className="col-md-6 col-sm-12 text-center">
							<h5>Informações de Contato</h5>
							<p>
								Rua Irênio Grecco nº 4580, Vila Imperador - Franca/SP
								<br />
								Telefone: (16) 3702-3204 | fatecfranca@fatecfranca.edu.br
							</p>
						</div>
						<div className="col-md-6 col-sm-12 contacts">
							<div className="conjunto">
								<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
									<div className="elipse">
										<i className="fab fa-facebook-f" aria-hidden="true"></i>
									</div>
								</a>
								<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
									<div className="elipse">
										<i className="fab fa-instagram" aria-hidden="true"></i>
									</div>
								</a>
								<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
									<div className="elipse">
										<i className="fab fa-linkedin-in" aria-hidden="true"></i>
									</div>
								</a>
								<a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
									<div className="elipse">
										<i className="fab fa-github" aria-hidden="true"></i>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className="row row-footer">
						<Link className="btn btn-link footer-btn" to="/Stars">
							<i className="fas fa-feather-alt"></i>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
