import React, { Component } from 'react';
import '../../assets/CSS/ADM/PerfilUsuario.css';
import '../../assets/CSS/ADM/PerfilAdm.css';
import MenuAdm from '../../Componentes/MenuADM';
import { Link } from 'react-router-dom';
import note5 from '../../assets/imagens/note5.jpg';

class CadastrarNovoP extends Component {
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
        </>
        )
    }
}

export default CadastrarNovoP;