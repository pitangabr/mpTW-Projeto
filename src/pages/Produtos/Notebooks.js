import React, { Component } from 'react';
import '../../assets/CSS/HOME/Home.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import { Link } from 'react-router-dom';

import notebook from '../../assets/imagens/note1.jpg';
import note6 from '../../assets/imagens/note6.jpg'
import note7 from '../../assets/imagens/note7.jpg'
import note5 from '../../assets/imagens/note5.jpg'
import note4 from '../../assets/imagens/note4.jpg'
import note3 from '../../assets/imagens/note3.jpg'

class Notebooks extends Component {
    render() {
      return <>
        <Menu></Menu>
          <div className= "pai_container">
            <div id="containers">  
                <div className="Container">
                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={notebook} alt=""/></Link>
                        <span className="valor">R$4.300</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={note6} alt=""/></Link>
                        <span className="valor">R$1.500</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={note7} alt=""/></Link>
                        <span className="valor">R$300</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={note5} alt=""/></Link>
                        <span className="valor">R$2.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={note4} alt=""/></Link>
                        <span className="valor">R$20</span>
                    </div>

                    <div className="grid">   
                        <Link to = "/descricaoproduto"> <img src={notebook} alt=""/></Link>
                        <span className="valor">R$600</span>
                    </div> 

                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <Link to = "/descricaoproduto"><img src={note3} alt=""/></Link>
                    <span className="valor_Maior">R$1.700</span>
                </div>  
            </div>
          </div>
            <hr className="hr"/>
        
            <div className= "pai_container">
            <div id="containers"> 

                <div className="Container">
                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={notebook} alt=""/></Link>
                        <span className="valor">R$2.450</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={note6} alt=""/></Link>
                        <span className="valor">R$1.500</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={note7} alt=""/></Link>
                        <span className="valor">R$300</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={note5} alt=""/></Link>
                        <span className="valor">R$2.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={note4} alt=""/></Link>
                        <span className="valor">R$20</span>
                    </div>

                    <div className="grid">   
                        <Link to = "/descricaoproduto"> <img src={notebook} alt=""/></Link>
                        <span className="valor">R$600</span>
                    </div> 

                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <Link to = "/descricaoproduto"><img src={note3} alt=""/></Link>
                    <span className="valor_Maior">R$1.700</span>
                </div>  
            </div>
          </div>
            
        <Rodape/>
    </>
 }
}

export default Notebooks;