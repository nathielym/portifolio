import React, { Component, Fragment } from 'react';
import { Grid, Row, PageHeader, Col } from 'react-bootstrap';
import './detalhes.css';
import Habilidades from '../Habilidades/Habilidades'

class Perfil extends Component {

    state = [
        {
            secao: 'Idiomas',
            conteudo: ['Português', 'Inglês Básico', 'Espanhol Básico']
        },
        {
            secao: 'Interesses',
            conteudo: ['Big Data', 'Revisão Sistemática', 'Engenharia de Software']
        },
        {
            secao: 'Formação',
            conteudo: ['Ensino Fundamental - Colégio Estadual Barão do Rio Branco - 2012 ',
                'Ensino Médio Integrado ao Técnico em Informática - IFPR Campus Foz do Iguaçu - 2015',
                'Cursando Graduação em Engenharia de Software - UTFPR Campus Cornélio Procópio']
        },
        {
            secao: 'Atividades Desenvolvidas',
            conteudo: ['Monitoria Matemática Computacional - 2017.2 - atualmente',
                'Iniciação Cientifica']
        },
    ]

    constroiDetalhes = () => {
        const state = this.state;
        const det = state.map((i) =>
            <Fragment class="card"><ul>{i.secao}
                {
                    i.conteudo.map((li) =>
                        <li>{li}</li>
                    )
                }
            </ul>
            </Fragment>

        );
        return (
            <Grid>
                <Row><PageHeader>Detalhes</PageHeader></Row>
                <Row>
                    {det}
                </Row>
            </Grid>

        );
    }


    render() {
        return (
            <div id="detalhes">
            <Grid>
                <Row>
                    <Col xs={12} md={6}>{this.constroiDetalhes()}</Col>
                    <Col xs={12} md={6}><Habilidades /></Col>
                </Row>
            </Grid>   
            </div>
        );
    }
}
export default Perfil;