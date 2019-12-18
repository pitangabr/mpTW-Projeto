import React, { Component } from 'react';
import '../../assets/CSS/ADM/PerfilUsuario.css';
import '../../assets/CSS/ADM/PerfilAdm.css';
import MenuAdm from '../../Componentes/MenuADM';
import { Link } from 'react-router-dom';
import note5 from '../../assets/imagens/note5.jpg';

import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class CadastrarNovoP extends Component {
    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
                                      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
                                                                                                        }));
    };
    
    render() {
        return(
        <>
            <MenuAdm></MenuAdm>
            <main id="perfilmain">
                <section id="menu_lateral_esquerdo">
                    <div class="perfil">
                        <div class="nome_usuario">
                            <p>Carlos Eduardo</p>
                        </div>
                    </div>
                    <ul>
                        <li><Link to = "/perfiladm">Perfil</Link></li>
                        <li><Link to ="/perfiladminteresse">Interesses</Link></li>
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
                        <h1>Cadastrar Produtos</h1>
                    </div>
                    <div class="canto_direito">
                        <form id="box-form">
                            <div id="form1">
                                <label>Nome do Produto:</label>
                                <input type="text" name="nomeCompleto" className="nomeUser" placeholder=" Nome do Produto"/> 
                                        
                                <label>Marca:</label>
                                <input type="text" name="alterEmail" className="emailUser" placeholder="Marca"/>
                    
                                <label>Descrição:</label>
                                <input type="descricao" name="alterConfEmail" className="descricaoP" placeholder=" Descrição"/>

                                <label>Foto:</label>
                                <div className = "photo">
                                    <img src={note5} alt=""/>
                                </div>
                            </div>
                                    
                            <div id="form2">
                                                                        
                                <label id="idEmail">Modelo:</label>
                                <input type="text" name="senhaUser" className="alterarSenha" placeholder="Modelo"/>
                                        
                                <label id="idConfEmail">Ano de Fabricação:</label>
                                <input type="text" name="confirsenha" className="confSenha" placeholder="Ano de Frabricação"/>
                                        
                                <div className="botaofinal">
                                    <button className="btnFinal"><p>Cadastrar</p></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <Router>
        <MDBContainer>
          <MDBNavbar
            color='light-blue lighten-4'
            style={{ marginTop: '20px' }}
            light
          >
            <MDBContainer>
              <MDBNavbarBrand>Navbar</MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to='#!'> 
                        Nome Completo:Carlos Vieira Santos.
                        ID: 23387432784732.
                        Cargo: Administrador RH.
                        Status: Aguardando Aprovação.
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      </Router>
        </>
        )
    }
}

export default CadastrarNovoP;