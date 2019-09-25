import React, { Component } from 'react';
import './StarBar.css';

class StarBar extends Component {

    render() {
        return (
            <div className={"StarBar " + this.props.className}>
                <div className="Star">
                </div>
                <div className="StarInner" style={{ width: (this.props.nota * (125.00 / 5.00)) + 'px' }}>
                    {"\u2605\u2605\u2605\u2605\u2605"}
                </div>
                <span>{this.props.nota.toFixed(2)}</span>
            </div>
        );
    }
}

export default StarBar;
