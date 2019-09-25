import React, { Component } from 'react';
import './AccordionTab.css';
import { Link } from 'react-router-dom';

class AccordionTab extends Component {
    render() {
        return (
            <div onClick={this.props.onClick} className={"tab " + (this.props.selected ? "selected" : "")}>
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default AccordionTab;
