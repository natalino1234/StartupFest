import React, { Component } from 'react';
import './Accordion.css';
import AccordionTab from '../AccordionTab/AccordionTab';

class Accordion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        }

        this.getTabs = this.getTabs.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    getTabs() {
        try {
            return this.props.children.map((value, index) => {
                return (
                    <AccordionTab
                        key={index}
                        onClick={() => { this.setState({ selected: index }) }}
                        selected={(this.state.selected === index)}
                        title={value.props.title}
                    />
                );
            });
        } catch (e) {
            console.log(e);
            return;
        }
    }

    getContent() {
        try {
            return this.props.children[this.state.selected]
        } catch (e) {
            console.log(e);
            return;
        }
    }

    render() {
        return (
            <div className="Accordion">
                <div className="tabs">
                    {this.getTabs()}
                </div>
                <div className="content">
                    {this.getContent()}
                </div>
            </div>
        );
    }
}

export default Accordion;
