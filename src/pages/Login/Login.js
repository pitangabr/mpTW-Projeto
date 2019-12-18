import React, { Component } from 'react';
import '../../assets/CSS/Login/Login.css';

import { parseJwt } from '../../services/auth'
import api from '../../services/Api';

import logo from '../../assets/imagens/logo1.png';
import { Link } from 'react-router-dom';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            erroMensagem: "",
            isLoading: false

        }
        this.loginUsuario = this.loginUsuario.bind(this);
    }

    loginUsuario = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    realizarLogin(event){
        event.preventDefault();

        this.setState({erroMensagem: ''})
        this.setState({isLoading: true})

        let usuario = {
            twmp_email: this.state.email,
            twmp_senha: this.state.senha
        }
            console.log(usuario);
       
            api.post ("http://localhost:5000/api/usuario", usuario)
            .then(response => {
            if(response.status === 200) {
                localStorage.setItem('usuario-Tw', response.data.token)
                this.setState({isLoading : false})

                console.log ("Meu token é: "+ response.data.token)

                var base64 = localStorage.getItem('usuario-Tw').split('.')[1]
                console.log(base64)

                console.log (window.atob(base64))

                console.log(JSON.parse(window.atob(base64)))

                console.log (parseJwt().Role)

                if (parseJwt().Role === 'Administrador') {
                    this.props.history.push('/PerfilAdm');
                }
                else{
                    this.props.history.push('/cadastro')
                }
            }
        })

        .catch(erro => {
            console.log("Erro:" , erro)
            this.setState({erroMensagem : 'E-mail ou senha inválido!'})
            this.setState({isLoading : false})
        })
        
    }
    
                    // {/* ------------------Login--------------- */}
    render() {
        return (
            <div>
                <main className="loginmain">

                    <section id="background">
                    {/* <!-- Parte principal do corpo do site --> */}

                        <div className="sessao">
                            {/* <!-- Sessão definida para dividir o campo de login --> */}

                            <div className="campo">
                            {/* <!-- Div definida para formatar o campo de login --> */}

                                <div className="logo_tw">
                                    <img src={logo}alt=""/>
                                    {  /* <!-- Div para imagem dentro do campo de login --> */}
                                </div>

                                <form className="Formulario2" >
                                {/* <!-- Tag criada para criar formulário --> */}

                                    <input type="name" name="email" id="iNome" placeholder="Email" size="15" required="required"  onChange = {this.loginUsuario}/> 
                                    {/* <!-- Input criado para usuário inserir o nome para acesso --> */}

                                    <input type="password" name="senha" placeholder="Senha" size="15" maxlength="60" required="required"  onChange = {this.loginUsuario}/> 
                                    {/* <!-- Input criado para usuário inserir senha dde acesso --> */}
                                </form>

                                <div className="check3">
                                    <a href="#">Esqueci a Senha</a>
                                </div>

                                <div className="entre1">
                                    <Link to = "/home"><button  class="border-0" onClick={this.realizarLogin.bind(this)} type = "submit">Entrar</button></Link>
                                </div>

                                <div className="cadastro">
                                    <Link to = "/cadastro">Cadastre-se Aqui</Link>
                                </div>

                                <div className="login_admin">
                                    <Link to= "/perfiladm">Login Admin</Link>
                                </div>

                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Login;