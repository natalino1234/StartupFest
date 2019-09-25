import React, { Component } from 'react';
import './Lista.css';
import Accordion from '../../components/Accordion/Accordion';
import AccordionPanel from '../../components/AccordionPanel/AccordionPanel';
import EmpresaRanking from '../../components/EmpresaRanking/EmpresaRanking';
import { ExecutarQuery, GET_STARTUPS } from '../../client/RestClient';
import EmpresaItem from '../../components/EmpresaItem/EmpresaItem';

class Lista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lista: []
        }

        this.loadStartups = this.loadStartups.bind(this);
        this.loadStartups();
    }

    loadStartups() {
        let callback = (result) => {
            console.log(result);
            let allStartups = result.data.allStartups;
            this.setState({ lista: allStartups });
        }
        ExecutarQuery(GET_STARTUPS, callback);
    }

    render() {

        console.log(this.state);

        return (
            <div className="Lista">
                <div className="listaEmpresas">
                    {this.state.lista.map((value, index) => {
                        return (<EmpresaItem
                            key={index}
                            nome={value.name}
                            logo={value.imageUrl}
                            description={value.description}
                            tipo={value.Segment.name}
                        />);
                    })}
                </div>
            </div>
        );
    }
}

export default Lista;
