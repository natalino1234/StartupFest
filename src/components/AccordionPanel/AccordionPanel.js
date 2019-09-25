import React, { Component } from 'react';
import './AccordionPanel.css';

class AccordionPanel extends Component {
    render() {
        return (
            <div title={this.props.title}>
                {this.props.children}
            </div>
        );
    }
}

export default AccordionPanel;
