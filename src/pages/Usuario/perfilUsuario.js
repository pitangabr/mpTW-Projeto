import React, { Component } from 'react';
import '../../assets/CSS/ADM/PerfilUsuario.css';
import MenuAdm from '../../Componentes/MenuADM';
import { Link } from 'react-router-dom';

class usuarioInteresse extends Component {
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
                        <li><Link to = "/perfilusuario">Perfil</Link></li>
                        <li><Link to = "/perfilusuariointeresse">Interesses</Link></li>
                        <li><Link to = "/perfilusuarionotificacoes">Notificações</Link></li>

                    </ul>
                </section>

                <section id="lateral_direita">
                    <div class="topo_direito">
                        <h1>Perfil</h1>
                    </div>
                    <div class="canto_direito">
                    <form id="box-form">
                            <div id="form1">
                                <label>Nome:</label>
                                <input type="text" name="nomeCompleto" className="nomeUser" placeholder=" Nome Completo" />

                                <label>Alterar E-mail:</label>
                                <input type="text" name="alterEmail" className="emailUser" placeholder=" Insira uma nova senha" />

                                <label>Confirme seu E-mail:</label>
                                <input type="text" name="alterConfEmail" className="cEmailUser" placeholder=" Confirme  sua senha" />
                            </div>

                            <div id="form2">

                                <label id="idEmail">Alterar Senha:</label>
                                <input type="text" name="senhaUser" className="alterarSenha" placeholder=" Insira um novo e-mail" />

                                <label id="idConfEmail">Confirme sua Senha:</label>
                                <input type="text" name="confirsenha" className="confSenha" placeholder=" Confirme seu e-mail" />

                                <div className="botaofinal">
                                    <button className="btnFinal"><p>Atualizar</p></button>
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

export default usuarioInteresse;