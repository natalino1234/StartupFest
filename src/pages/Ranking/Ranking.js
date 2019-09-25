import React, { Component } from 'react';
import './Ranking.css';
import Accordion from '../../components/Accordion/Accordion';
import AccordionPanel from '../../components/AccordionPanel/AccordionPanel';
import EmpresaRanking from '../../components/EmpresaRanking/EmpresaRanking';
import { ExecutarQuery, GET_STARTUPS } from '../../client/RestClient';

class Ranking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            proposta: [],
            apresentacao: [],
            desenvolvimento: []
        }

        this.loadStartups = this.loadStartups.bind(this);
        this.loadStartups();
    }

    loadStartups() {
        let callback = (result) => {
            console.log(result);
            let allStartups = result.data.allStartups;
            let temp = allStartups.map((value) => {
                value.proposta = Math.random() * 5;
                value.apresentacao = Math.random() * 5;
                value.desenvolvimento = Math.random() * 5;
                return value;
            });
            let prop = [...temp].sort((a, b) => a.proposta < b.proposta);
            let apres = [...temp].sort((a, b) => a.apresentacao < b.apresentacao);
            let desenv = [...temp].sort((a, b) => a.desenvolvimento < b.desenvolvimento);
            this.setState({ proposta: prop, apresentacao: apres, desenvolvimento: desenv });
        }
        ExecutarQuery(GET_STARTUPS, callback);
    }

    render() {

        console.log(this.state);

        return (
            <div className="Ranking">
                <Accordion>
                    <AccordionPanel title="Proposta">
                        <div className="listaEmpresas">
                            {this.state.proposta.map((value, index) => {
                                return (<EmpresaRanking
                                    key={index}
                                    nome={value.name}
                                    logo={value.imageUrl}
                                    nota={value.proposta}
                                    tipo={value.Segment.name}
                                />);
                            })}
                        </div>
                    </AccordionPanel>
                    <AccordionPanel title="Apresentação">
                        <div className="listaEmpresas">
                            {this.state.apresentacao.map((value, index) => {
                                return (<EmpresaRanking
                                    key={index}
                                    nome={value.name}
                                    logo={value.imageUrl}
                                    nota={value.apresentacao}
                                    tipo={value.Segment.name}
                                />);
                            })}
                        </div>
                    </AccordionPanel>
                    <AccordionPanel title="Desenvolvimento">
                        <div className="listaEmpresas">
                            {this.state.desenvolvimento.map((value, index) => {
                                return (<EmpresaRanking
                                    key={index}
                                    nome={value.name}
                                    logo={value.imageUrl}
                                    nota={value.desenvolvimento}
                                    tipo={value.Segment.name}
                                />);
                            })}
                        </div>
                    </AccordionPanel>
                </Accordion>
            </div>
        );
    }
}

export default Ranking;
