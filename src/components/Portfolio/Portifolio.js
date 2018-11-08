import React, { Component, Fragment } from 'react';
import { Grid, Row, Col, PageHeader, Button, ButtonToolbar, OverlayTrigger } from 'react-bootstrap';
import './portifolio.css';
class Portifolio extends Component {
    
    state = [
        {
            projeto: 'Trabalho 04',
            link: 'https://github.com/nathielym/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta04/nathiely-laiane' 
        },

        {
            projeto: 'Trabalho 05',
            link: 'https://github.com/nathielym/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta05/nathiely-macedo' 
        }
    ]

     constroiPortifolio = () => {
        const state = this.state;
        

        const port = state.map((i) =>
            <Fragment>
                <ButtonToolbar>
                        <Button bsStyle="link" href={i.link}>{i.projeto}</Button>
                 
                </ButtonToolbar>
            </Fragment>  
        );
        return (
            <Grid>
                <Row><PageHeader>Portifólio
                    
                    <p><small>
                        Confira alguns trabalhos realizados:
                    </small></p></PageHeader></Row>
                <Row>
                    <Col>{port}</Col>
                </Row>
            </Grid>
           
        );
    }

    
    render(){
        return(
            
            <Fragment id = "portfolio">
                {this.constroiPortifolio()}
            </Fragment>
        );
    }
}
export default Portifolio;