import React, { Component } from 'react';
import './EmpresaItem.css';
import StarBar from '../StarBar/StarBar';

class EmpresaItem extends Component {

    render() {
        return (
            <div className="empresa">
                <div className="logo" style={{ backgroundImage: "url(" +  this.props.logo  + ")" }}/>
                <div className="nome">{this.props.nome}</div>
                <div className="tipo">{this.props.tipo}</div>
                <div className="description">{this.props.description}</div>
            </div>
        );
    }
}

export default EmpresaItem;
