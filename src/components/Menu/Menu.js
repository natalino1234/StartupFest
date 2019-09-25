import React, { Component } from 'react';
import './Menu.css';
import { Route } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav className="Menu">
                {this.props.children}
            </nav>
        );
    }
}

export default Menu;
