import React, { Component } from 'react';
import '../../assets/CSS/HOME/Home.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import { Link } from 'react-router-dom';

import acessorio from '../../assets/imagens/mouse.jpg';
import aces1 from '../../assets/imagens/aces1.jpeg';
import aces2 from '../../assets/imagens/aces2.jpg';
import aces3 from '../../assets/imagens/aces3.jpg';
import aces5 from '../../assets/imagens/aces5.jpg';

class Acessorio extends Component {
    render() {
      return <>
        <Menu></Menu>
          <div className= "pai_container">
            <div id="containers">  
                <div className="Container">

                    <div className="grid">
                        <Link to = "/DescricaoAcessorio"><img src={acessorio} alt=""/></Link>
                        <span className="valor">R$200</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoAcessorio"><img src={aces1} alt=""/></Link>
                        <span className="valor">R$390</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoAcessorio"><img src={aces3} alt=""/></Link>
                        <span className="valor">R$100</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoAcessorio"><img src={aces2} alt=""/></Link>
                        <span className="valor">R$50</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoAcessorio"><img src={aces5} alt=""/></Link>
                        <span className="valor">R$90</span>
                    </div>

                    <div className="grid">   
                        <Link to = "/DescricaoAcessorio"> <img src={aces1} alt=""/></Link>
                        <span className="valor">R$780</span>
                    </div> 

                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <Link to = "/DescricaoAcessorio"><img src={aces3} alt=""/></Link>
                    <span className="valor_Maior">R$200</span>
                </div>  

            </div>
          </div>
            <hr className="hr"/>
        
            <div className= "pai_container">
            <div id="containers">  
                <div className="Container">

                    <div className="grid">
                        <Link to = "/DescricaoAcessorio"><img src={aces3} alt=""/></Link>
                        <span className="valor">R$289</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoAcessorio"><img src={acessorio} alt=""/></Link>
                        <span className="valor">R$590</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoAcessorio"><img src={aces1} alt=""/></Link>
                        <span className="valor">R$87</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoAcessorio"><img src={aces2} alt=""/></Link>
                        <span className="valor">R$590</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoAcessorio"><img src={aces5} alt=""/></Link>
                        <span className="valor">R$590</span>
                    </div>

                    <div className="grid">   
                        <Link to = "/DescricaoAcessorio"><img src={aces3} alt=""/></Link>
                        <span className="valor">R$590</span>
                    </div>  

                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <Link to = "/DescricaoAcessorio"><img src={aces2} alt=""/></Link>
                    <span className="valor_Maior">R$590</span>
                </div>  

            </div>
          </div>
            

        <Rodape/>
    </>
 }
}

export default Acessorio;