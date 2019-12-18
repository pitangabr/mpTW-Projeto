import React from 'react';
import '../assets/CSS/ADM/PerfilUsuario.css';

import { Link } from 'react-router-dom';

import logo from '../assets/imagens/logo1.png';
import lupa from  '../assets/imagens/pesquisa.png';

function MenuAdm() {
    return (
        <header>
            <div className="menu">
                <section id="barra_acessibilidade">
                {/* <!--Barra de acessibilidade--> */}
                    <ul className="barra_conteudo">
                        <li><a href="#">Acessibilidade</a></li>
                        <li><a href="#">A-</a></li>
                        <li><a href="#">A+</a></li>
                        <li><a href="#">Modo Noturno</a></li>
                    </ul>
                </section>
            
                <section>
                {/* <!--Menu superior--> */}
                    <nav id="menu_base1">
                        <div className="logo1">
                            <Link to="/home"><img src={logo} alt="Logo TWmarketplace"/></Link>
                        </div>
            
                        <div className="BarraPesquisa1">
                            <form action="Busca" method="GET" id="buscar1">
                            {/* <!--Barra de pesquisa--> */}
                                <input type="search" name="Busca" className="buscar1" placeholder="Buscar..."/>
                                <img src={lupa} alt="Pesquisar"/>
                            </form>
                        </div>
            
                        <div className="barramenu1">
                            <ul>
                                <li><Link to = "/home" className="minhaconta1">Home</Link></li>
                                <li><Link to= "/" className="sair1">Sair</Link></li>
                            </ul>
                        </div>
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default MenuAdm;