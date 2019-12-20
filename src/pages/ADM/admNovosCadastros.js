import React, { Component } from 'react';
import '../../assets/CSS/ADM/PerfilUsuario.css';
import MenuAdm from '../../Componentes/MenuADM';
import { Link } from 'react-router-dom';

// import imaX from '../../assets/imagens/imaX.png';

class admNovosCadastros extends Component {
    render() {
        return(
        <>
            <MenuAdm></MenuAdm>
            <main id="perfilmain">
                <section id="menu_lateral_esquerdo">
                    <div className="perfil">
                        <div className="nome_usuario">
                            <p>Cássio Vincent</p>
                        </div>
                    </div>
                    <ul>
                        <li><Link to = "/perfiladm">Perfil</Link></li>
                        <li><Link to = "/perfiladminteresse">Interesses</Link></li>
                        <li><Link to = "/perfiladmnotificacoes">Notificações</Link></li>
                        <li><Link to = "/perfiladmprodutos">Produtos</Link></li>
                        <li className= "tabulatura">Usuarios</li>
                        <li><Link to = "/perfiladmnovoscadastros">Novos Cadastros</Link></li>
                        <li><Link to = "/perfiladmlistadeusuarios">Lista de usuários</Link></li>
                        <li><Link to = "/cadastrarprodutos">Cadastrar Produtos</Link></li>
                    </ul>
                </section>

                <section id="lateral_direita">
                    <div className="topo_direito">
                        <h1>Novos Cadastros</h1>
                    </div>
                    <div className="canto_direito">
                        <ul>
                            <li><a href="#">> Carlos Vieira Santos - Solicita aprovação de cadastro</a></li>
                            <li><a href="#">> Carlos Vieira Santos - Solicita aprovação de cadastro</a></li>
                            <li><a href="#">> Carlos Vieira Santos - Solicita aprovação de cadastro</a></li>
                            <li><a href="#">> Carlos Vieira Santos - Solicita aprovação de cadastro</a></li>
                            <li><a href="#">> Carlos Vieira Santos - Solicita aprovação de cadastro</a></li>
                            <li><a href="#">> Carlos Vieira Santos - Solicita aprovação de cadastro</a></li>
                            <li><a href="#">> Carlos Vieira Santos - Solicita aprovação de cadastro</a></li>
                            <li><a href="#">> Carlos Vieira Santos - Solicita aprovação de cadastro</a></li>
                            <li><a href="#">> Carlos Vieira Santos - Solicita aprovação de cadastro</a></li>
                            <li><a href="#">> Carlos Vieira Santos - Solicita aprovação de cadastro</a></li>
                        </ul>
                    </div>

                    <button className = "BTN2">
                        <i className="fas fa-check"></i>
                    </button>

                    <button className = "BTN3">
                        <i className="fas fa-ban"></i>
                    </button>

                </section>
            </main>
        </>
        );
    }
}

export default admNovosCadastros;