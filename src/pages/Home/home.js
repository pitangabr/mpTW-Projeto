import React, { Component } from 'react';
import '../../assets/CSS/HOME/Home.css';
import Menu from '../../Componentes/Menu';
import Rodape from '../../Componentes/Rodape';
import CarouselPage from '../../Componentes/Carrossel';

import smartphone from '../../assets/imagens/phone7.jpg';
import phone6 from '../../assets/imagens/phone6.jpg';
import phone5 from '../../assets/imagens/phone5.jpg';
import phone4 from '../../assets/imagens/phone4.jpg';
import phone3 from '../../assets/imagens/phone3.jpg';
import phone1 from '../../assets/imagens/phone1.jpg';

import notebook from '../../assets/imagens/note1.jpg';
import note6 from '../../assets/imagens/note6.jpg'
import note7 from '../../assets/imagens/note7.jpg'
import note5 from '../../assets/imagens/note5.jpg'
import note4 from '../../assets/imagens/note4.jpg'
import note3 from '../../assets/imagens/note3.jpg'

import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
      return <>
      <Menu />
      <main id="home_main">
        <div id= "banner">
       
            <CarouselPage/>
        </div>
        {/* <!--Fim home_banner--> */}
        <hr className="hr"/>
  
        <section id="img1">
        {/* <!--Seção img1 = uma area do site onde os produtos podem ser classificados/ Local onde ficaram os produtos divididos (ex. fotos de varios notebooks)--> */}
            <nav className="filtro">
                    <h2>Notebooks</h2>

            </nav>
            <div id="containers">  
                <div className="Container">
                    <div className="grid">
                        <Link to = "/descricaoproduto"><img src={notebook} alt=""/></Link>
                        <span className="valor">R$200</span>
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
                        <a href="#"> <img src={notebook} alt=""/></a>
                        <span className="valor">R$600</span>
                    </div>             
                </div>
                {/* <!--Fim container--> */}
                <div className="grid-8">    
                    <Link to = "/descricaoproduto"><img src={note3} alt=""/></Link>
                    <span className="valor_Maior">R$1.700</span>
                </div>  
            </div>
              <Link to ="/notebooks">Ver mais >>></Link>
        </section>
        {/* <!--Fim img1--> */}
        <hr className="hr"/>
  
        <section id="img2">
        {/* <!--Seção img2 = uma area do site onde os produtos podem ser classificados/ Local onde ficaram os produtos divididos (ex. fotos de varios smartphones)--> */}
            <nav className="filtro">
                <h2>Smartphones</h2>
            </nav>
            <div id="containers"> 

                <div className="Container">
                    <div className="grid">
                        <Link to = "/descricaosmatphones"><img src={smartphone} alt="" /></Link>
                        <span className="valor">R$1.700</span>
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
            <Link to ="/smartphones">Ver mais >>></Link>
        </section>
        {/* <!--Fim img2--> */}
    </main>
    <Rodape/>
    </>
    }
  }
  
  export default Home;
  