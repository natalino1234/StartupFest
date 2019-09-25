import React, { Component } from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';

class MenuItem extends Component {
    render() {
        return (
            <Link to={this.props.path}>
                <i className={"fas "+this.props.icon} />
                <span>{this.props.nome}</span>
            </Link>
        );
    }
}

export default MenuItem;
