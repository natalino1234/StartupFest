import React, { Component } from 'react';
import './EmpresaRanking.css';
import StarBar from '../StarBar/StarBar';

class EmpresaRanking extends Component {

    render() {
        return (
            <div className="empresa">
                <div className="logo" style={{ backgroundImage: "url(" +  this.props.logo  + ")" }}/>
                <div className="nome">{this.props.nome}</div>
                <div className="tipo">{this.props.tipo}</div>
                <StarBar className="nota" nota={this.props.nota} />
            </div>
        );
    }
}

export default EmpresaRanking;
