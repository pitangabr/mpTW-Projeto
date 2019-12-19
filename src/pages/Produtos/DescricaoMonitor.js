import React, { Component } from 'react';
import '../../assets/CSS/DescricaoProduto/DescricaoProduto.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import { Link } from 'react-router-dom';

import comp3 from '../../assets/imagens/comp3.jpg';

class Monitor extends Component {
    render() {
      return <>
        <Menu></Menu>
        <main id="classificacaomain">

        {/* <!--COMEÇO DO PRODUTO--> */}
        <section id="produto">

            <div className="imagemG">

                <div className="imagem1">
                    <img src={comp3} alt=""/>
                </div>


            </div>

            <div className="tituloT">

                <div className="tituloNot">
                    <h1>Computador Samsung All in One Intel Core i5, 8(GB)</h1>
                </div>

                <p>R$2.999,00</p>

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
            <p>O all in one samsung é a nova palavra em computadores. Sua solução tudo em um, que combina computador com tv em uma tela de alta 
               resolução full hd de 21.5 polegadas, oferece uma solução completa para conteúdos e multimídia. Seu design moderno e elegante 
               harmoniza com todo tipo de ambiente, seja em casa ou no escritório.</p>
            <h2>Especificações:</h2>

            <table id="tabela_esp">

                <tr>
                    <td rowspan="2" className="ce"> Memória</td>
                    <td className="cd">Modelos com Intel Coreaté 20GB de memória máxima 2400MHz DDR4 (4GB soldados + 1 slot)
                    </td>
                    <tr>
                        <td className="cd">Modelos com Intel Celeron até 8GB de memória máxima 2400MHz DDR4 (1 slot).</td>
                    </tr>
                </tr>

                <tr>
                    <td className="ce">Armazenamento</td>
                    <td className="cd">HD 500GB (5400 rpm) HD 1TB (5400 rpm) SSD 256GB</td>
                </tr>

                <tr>
                    <td className="ce">Câmera</td>
                    <td className="cd">0,3 MP (VGA)</td>
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
                    <td className="cd">Preta</td>
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

export default Monitor;