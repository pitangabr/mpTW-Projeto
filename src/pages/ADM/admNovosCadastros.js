import React, { Component } from 'react';
import '../../assets/CSS/ADM/PerfilUsuario.css';
import MenuAdm from '../../Componentes/MenuADM';
import { Link } from 'react-router-dom';

import { MDBBtn, MDBCollapse } from "mdbreact";

class admNovosCadastros extends Component {
    state = {
        collapseID: ""
      }
      
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }
    
    render() {
        return(
        <>
            <MenuAdm></MenuAdm>
            <main id="perfilmain">
                <section id="menu_lateral_esquerdo">
                    <div class="perfil">
                        <div class="nome_usuario">
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
                    <div class="topo_direito">
                        <h1>Novos Cadastros</h1>
                    </div>
                    <div class="canto_direito">
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
                </section>
            </main>

            <MDBBtn
        color="primary"
        href="!#"
        onClick={this.toggleCollapse("basicCollapse")}
        style={{ marginBottom: "1rem" }}
    >
      COLLAPSE LINK
    </MDBBtn>
    <MDBBtn
      color="primary"
      onClick={this.toggleCollapse("basicCollapse")}
      style={{ marginBottom: "1rem" }}
    >
      COLLAPSE BUTTON

    </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </MDBCollapse>
        </>
        );
    }
}

export default admNovosCadastros;