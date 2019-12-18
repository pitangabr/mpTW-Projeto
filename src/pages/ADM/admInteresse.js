import React, { Component } from 'react';
import '../../assets/CSS/ADM/PerfilUsuario.css';
import MenuAdm from '../../Componentes/MenuADM';
import { Link } from 'react-router-dom';

class admInteresse extends Component {
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
                        <h1>Interesses</h1>
                    </div>
                    <div class="canto_direito">
                        <ul>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                            <li><a href="#">> Product name  -  productcode:#12121212 - Tem um novo interesse</a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
        )
    }
}

export default admInteresse;