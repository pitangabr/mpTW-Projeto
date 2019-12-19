import React, { Component } from 'react';
import '../../assets/CSS/HOME/Home.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import { Link } from 'react-router-dom';

import monitor from '../../assets/imagens/monitor.jpg';
import comp2 from '../../assets/imagens/comp2.jpg';
import comp3 from '../../assets/imagens/comp3.jpg';
import comp4 from '../../assets/imagens/comp4.jpg';
import comp5 from '../../assets/imagens/comp5.jpg';

class Monitor extends Component {
    render() {
      return <>
        <Menu></Menu>
          <div className= "pai_container">
            <div id="containers">  
                <div className="Container">
                    <div className="grid">
                        <Link to = "/DescricaoMonitor"><img src={monitor} alt=""/></Link>
                        <span className="valor">R$500</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoMonitor"><img src={comp2} alt=""/></Link>
                        <span className="valor">R$9.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoMonitor"><img src={comp3} alt=""/></Link>
                        <span className="valor">R$10.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoMonitor"><img src={comp4} alt=""/></Link>
                        <span className="valor">R$.2000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoMonitor"><img src={comp5} alt=""/></Link>
                        <span className="valor">R$4.700</span>
                    </div>

                    <div className="grid">   
                        <Link to = "/DescricaoMonitor"> <img src={comp2} alt=""/></Link>
                        <span className="valor">R$8.700</span>
                    </div> 

                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <Link to = "/DescricaoMonitor"><img src={comp3} alt=""/></Link>
                    <span className="valor_Maior">R$3.700</span>
                </div> 

            </div>
          </div>
            <hr className="hr"/>
        
            <div className= "pai_container">
            <div id="containers">  
                <div className="Container">
                <div className="grid">
                        <Link to = "/DescricaoMonitor"><img src={monitor} alt=""/></Link>
                        <span className="valor">R$500</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoMonitor"><img src={comp5} alt=""/></Link>
                        <span className="valor">R$9.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoMonitor"><img src={comp3} alt=""/></Link>
                        <span className="valor">R$10.000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoMonitor"><img src={comp4} alt=""/></Link>
                        <span className="valor">R$.2000</span>
                    </div>

                    <div className="grid">
                        <Link to = "/DescricaoMonitor"><img src={comp5} alt=""/></Link>
                        <span className="valor">R$4.700</span>
                    </div>

                    <div className="grid">   
                        <Link to = "/DescricaoMonitor"> <img src={comp2} alt=""/></Link>
                        <span className="valor">R$8.700</span>
                    </div>  

                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <Link to = "/DescricaoMonitor"><img src={monitor} alt=""/></Link>
                    <span className="valor_Maior">R$3.700</span>
                </div> 

            </div>
          </div>
            

        <Rodape/>
    </>
 }
}

export default Monitor;