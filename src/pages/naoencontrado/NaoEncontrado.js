import React, { Component } from 'react';
import '../../assets/CSS/NaoEncontrado/naoencontrado.css';
import robo from '../../assets/imagens/robo.png';

class NaoEncontrado extends Component {
    render(){
        return (
            <div className = "defect">
                <div className = "erro">
                    <h6>Página não encontrada</h6>
                </div>

                <img className="robo" src={robo} alt=""/>
            </div>
        );
    }
}

export default NaoEncontrado;

