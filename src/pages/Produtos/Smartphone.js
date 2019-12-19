import React, { Component } from 'react';
import '../../assets/CSS/HOME/Home.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import { Link } from 'react-router-dom';

import smartphone from '../../assets/imagens/phone7.jpg';
import phone6 from '../../assets/imagens/phone6.jpg';
import phone5 from '../../assets/imagens/phone5.jpg';
import phone4 from '../../assets/imagens/phone4.jpg';
import phone3 from '../../assets/imagens/phone3.jpg';
import phone1 from '../../assets/imagens/phone1.jpg';

class Smartphone extends Component {
    render() {
      return <>
        <Menu></Menu>
          <div className= "pai_container">
            <div id="containers">  
                <div className="Container">
                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={smartphone} alt=""/></Link>
                        <span className="valor">R$11.900</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={phone6} alt=""/></Link>
                        <span className="valor">R$2.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={phone5} alt=""/></Link>
                        <span className="valor">R$5.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={phone4} alt=""/></Link>
                        <span className="valor">R$5.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={phone3} alt=""/></Link>
                        <span className="valor">R$5.000</span>
                    </div>

                    <div className="grid">   
                        <Link to = "/descricaosmatphones"> <img src={phone1} alt=""/></Link>
                        <span className="valor">R$5.000</span>
                    </div> 

                </div>
                {/* <!--Fim container--> */}
                    <div className="grid-8">    
                        <Link to = "/descricaosmatphones"><img src={smartphone} alt=""/></Link>
                        <span className="valor_Maior">R$5.000</span>
                    </div>
            </div>
          </div>
            <hr className="hr"/>
        
            <div className= "pai_container">
            <div id="containers">  
                <div className="Container">

                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={smartphone} alt=""/></Link>
                        <span className="valor">R$9.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={phone6} alt=""/></Link>
                        <span className="valor">R$2.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={phone5} alt=""/></Link>
                        <span className="valor">R$5.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={phone4} alt=""/></Link>
                        <span className="valor">R$5.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={phone3} alt=""/></Link>
                        <span className="valor">R$5.000</span>
                    </div>

                    <div className="grid">   
                        <Link to = "/descricaosmatphones"> <img src={phone1} alt=""/></Link>
                        <span className="valor">R$5.000</span>
                    </div> 

                </div>
                {/* <!--Fim container--> */}
                    <div className="grid-8">    
                        <Link to = "/descricaosmatphones"><img src={smartphone} alt=""/></Link>
                        <span className="valor_Maior">R$5.000</span>
                    </div>
            </div>
          </div>
            

        <Rodape/>
    </>
 }
}

export default Smartphone;