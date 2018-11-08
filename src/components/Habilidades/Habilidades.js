import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import './habilidades.css';
class Habilidades extends Component {
    
    state = [
        {
            secao: 'Linguagens de Programação',
            conteudo: ['C', 'Java', 'PHP, HTML', 'JavaScript']
        },

        {
            secao: 'Conhecimento em Processos de Produção de Software',
            conteudo: []
        },
        {
            secao: 'Conhecimentos em Banco de Dados',
            conteudo: []
        },
        {
            secao: 'Conhecimento em Redes de Computadores',
            conteudo: []
        }
    ]

     constroiHabilidades = () => {
        const state = this.state;
        
        
        const lista = state.map((i) =>
            <div><ul class = "card">{i.secao}
                {
                    i.conteudo.map((li)=>
                        <li>{li}</li>
                    )
                }
            </ul></div>
        );
        return (
            <Grid>
                <Row><PageHeader>Habilidades</PageHeader></Row>
                <Row>
                    <Col>{lista}</Col>
                </Row>
            </Grid>
           
        );
    }

    
    render(){
        return(
            
            <div id = "habilidades">
                {this.constroiHabilidades()}
            </div>
        );
    }
}
export default Habilidades;