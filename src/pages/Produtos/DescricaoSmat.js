import React, { Component } from 'react';
import '../../assets/CSS/DescricaoProduto/DescricaoProduto.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import { Link } from 'react-router-dom';

import phone3 from '../../assets/imagens/phone3.jpg';

class Phone extends Component {
    render() {
      return <>
        <Menu></Menu>
        <main id="classificacaomain">

        {/* <!--COMEÇO DO PRODUTO--> */}
        <section id="produto">

            <div className="imagemG">

                <div className="imagem1">
                    <img src={phone3} alt=""/>
                </div>


            </div>

            <div className="tituloT">

                <div className="tituloNot">
                    <h1>Motog7 PLUS - Moto G7 Plus - Índigo</h1>
                </div>

                <p>R$1.104,15</p>

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
            <p>Câmera profissional dupla com estabilização óptica Tire fotos profissionais mesmo em baixa luminosidade com o moto g7 plus. 
               A câmera dupla com estabilização óptica (OIS) e a inteligência artificial garantem fotos excepcionais.</p>
            <h2>Especificações:</h2>

            <table id="tabela_esp">

                <tr>
                    <td rowspan="2" className="ce"> Memória</td>
                    <td className="cd">TurboPower™ de 27 W da Motorola, que carrega de 0 a 100% da bateria em menos de 1 hora.
                    </td>
                    <tr>
                        <td className="cd">Modelos com Intel Celeron até 8GB de memória máxima 2400MHz DDR4 (1 slot).</td>
                    </tr>
                </tr>

                <tr>
                    <td className="ce">Armazenamento</td>
                    <td className="cd">processador Qualcomm® Snapdragon™636 octa-core</td>
                </tr>

                <tr>
                    <td className="ce">Câmera</td>
                    <td className="cd">0,3 MP (VGA)</td>
                </tr>

                <tr>
                    <td rowspan="2" className="ce">Bateria</td>
                    <td className="cd">TurboPower™ de 27 W da Motorola</td>
                <tr>
                    <td className="cd">que carrega de 0 a 100% da bateria em menos de 1 hora.</td>
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

export default Phone;