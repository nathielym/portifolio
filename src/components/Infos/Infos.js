import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron, PageHeader, PageHeaderProps} from 'react-bootstrap'
import './infos.css'



class Infos extends Component {

    state = [
        {
            titulo: 'Biografia Completa',
            text: 'Nasci no dia 26 de setembro de 1998, na cidade de Foz do Iguaçu, no Paraná. Aos 14 anos, ingressei no Instituto Federal do Paraná, onde cursei o ensino médio integrado ao curso de Técnico em Informática, me fornei no ano letivo de 2015. Com a experiência obtida no IFPR, decidi continuar na área de TI, escolhendo o curso de Engenharia de Software, ofertado na Universidade Tecnológica Federal do Paraná (UTFPR), no campus de Cornélio Procópio. Aos 17 anos entrei na universidade, atualmente curso o 6º período.',
        },
        {
            titulo: 'Contato com a Profissão',
            text: 'Ainda não tive numa experiência profissional, apenas acadêmica. O interesse em seguir a profissão foi despertado ainda no ensino médio, no 3º ano, foi quando construímos um sistema web como projeto de final de curso',
        }
    ]

    informa = () => {
        const state = this.state;
        const inf = state.map((i) =>
            <Fragment>
                <PageHeader><small>{i.titulo}</small></PageHeader>
                <p>{i.text}</p>
            </Fragment>

        );
        return (
            <Jumbotron>
                <div>
                    {inf}
                </div>
            </Jumbotron>

        );
    }

    render() {
        return (
            <Fragment id = "portfolio">
                {this.informa()}
            </Fragment>
        );
    }

}
export default Infos;