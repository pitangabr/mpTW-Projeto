import React, { Component } from 'react';
import '../../assets/CSS/DescricaoProduto/DescricaoProduto.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import { Link } from 'react-router-dom';

import aces1 from '../../assets/imagens/aces1.jpeg';

class Acessorios extends Component {
    render() {
      return <>
        <Menu></Menu>
        <main id="classificacaomain">

        {/* <!--COMEÇO DO PRODUTO--> */}
        <section id="produto">

            <div className="imagemG">

                <div className="imagem1">
                    <img src={aces1} alt=""/>
                </div>


            </div>

            <div className="tituloT">

                <div className="tituloNot">
                    <h1>Acessórios com USB-C</h1>
                </div>

                <p>R$1.774,00</p>

                <div className="btn">
                    <Link to = "/perfiladminteresse" className = "btn_tenhoInteresse"><span>Tenho Interesse</span></Link>
                </div>

            </div>

        </section>
        {/* <!--FIM DA SECTION--> */}

        <hr/>
        {/* <!--COMEÇO DO ARTICLE--> */}

        <article id="corpoanuncio">
            <h2>Descrição:</h2>
            <p>Nova linha de SSDs externos: a empresa americana traz três modelos, com 1TB, 500GB ou 250GB de armazenamento. 
               Os modelos com 1TB e 500GB pesam 61 gramas e possuem 1.9 cm de espessura. Já o modelo de 250GB pesa apenas 30 gramas e 
               possui 0.87 cm de espessura. Todos os modelos possuem garantia de três anos e possuem a cor “prata platinado”.</p>
            <h2>Especificações:</h2>

            <table id="tabela_esp">

                <tr>
                    <td rowspan="2" className="ce"> Memória</td>
                    <td className="cd">Modelos com Intel Coreaté 20GB de memória máxima 2400MHz DDR4 (4GB soldados + 1 slot)
                    </td>
                    <tr>
                        <td className="cd">Os modelos de 500GB e 1TB possuem conectividade Thunderbolt 3</td>
                    </tr>
                </tr>

                <tr>
                    <td className="ce">Armazenamento</td>
                    <td className="cd">Com 1TB, 500GB ou 250GB</td>
                </tr>

                <tr>
                    <td rowspan="2" className="ce">Bateria</td>
                    <td className="cd">2 células 30Wh </td>
                <tr>
                    <td className="cd">células 35Wh (modelos com placa de vídeo dedicada)</td>
                </tr>
                </tr>

                <tr>
                    <td className="ce">Cor</td>
                    <td className="cd">Prata</td>
                </tr>

            </table>
        </article>
        {/* <!--COMEÇO DO ARTICLE--> */}
    </main>
    {/* <!--FIM DO MAIN--> */}
        <Rodape/>
    </>
 }
}

export default Acessorios;