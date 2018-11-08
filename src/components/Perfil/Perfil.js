import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonToolbar, Image } from 'react-bootstrap';
import avatar from '../../imagens/Perfil/avatar.svg';
import './perfil.css';
import curr from '../../documentos/curriculo.pdf';
class Perfil extends Component {
    render(){
        return(
            <div id = "perfil">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <Image id = "avatar" src={avatar} circle />
                        </Col>
                        <Col xs={12} md={8}>
                            <Row className="show-grid">
                                <Col>
                                    <div class="text">
                                    <p>Olá, meu nome é Nathiely, tenho 20 anos e nasci em Foz do Iguaçu - Pr. Sou uma desenvolvedora em formação </p>
                                    <p><ButtonToolbar>
                                        <Button bsSize="large" href={curr}>Conheça meu Currículo</Button>
                                    </ButtonToolbar></p>
                                    </div>
                                </Col>
                            </Row>
                            </Col>
                    </Row>
                </Grid>
                

            </div>
        );
    }
}
export default Perfil;