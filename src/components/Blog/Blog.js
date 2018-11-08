import React, { Component, Fragment } from 'react';
import { Grid, Row, Col, PageHeader, ButtonToolbar, Button, Image } from 'react-bootstrap';
import './blog.css';
import tec1 from '../../imagens/Blog/tec1.svg';
import tec2 from '../../imagens/Blog/tec2.svg';
import tec3 from '../../imagens/Blog/tec3.svg';

class Blog extends Component {

    state = [
        {
            titulo: 'Programe com o Node.js',
            link: 'https://www.devmedia.com.br/nodejs/',
            imagem: tec1,
        },

        {
            titulo: 'Data Science: Por onde começar?',
            link: 'https://imasters.com.br/carreira-dev/data-science-por-onde-comecar',
            imagem: tec2,
        },
        {
            titulo: 'Conhecendo o @supports do CSS',
            link: 'https://tableless.com.br/conhecendo-regra-support-css/?utm_source=moreLinksHome',
            imagem: tec3,
        }
    ]
  
        constroiBlog = () => {
            const state = this.state;
            
            
            const bl = state.map((i) =>
                <Col xs={6} md={4}>
                    <a href={i.link}><div class = "img" ><Image src={i.imagem}/></div></a>
                    <ButtonToolbar>
                    <Button bsStyle="link" href={i.link}>{i.titulo}</Button>
                    </ButtonToolbar>
                </Col>
            );
            return (
                <Grid>
                    <Row><PageHeader>Blog</PageHeader></Row>
                        {bl}
                </Grid>
               
            );
        }
        render(){
            return(
                
                <Fragment id = "blog">
                    {this.constroiBlog()}
                </Fragment>
            );
        }
    }
export default Blog;