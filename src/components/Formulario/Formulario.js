import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Checkbox, Button, Col, PageHeader, ControlLabel, FormControl } from 'react-bootstrap'
import './form.css'



class Formulario extends Component {
    render() {
        return (
            <Form horizontal>
                <PageHeader><small>Entre em Contato:</small></PageHeader>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        E-mail
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalNome">
                    <Col componentClass={ControlLabel} sm={2}>
                        Nome
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Nome" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalAssunto">
                    <Col componentClass={ControlLabel} sm={2}>
                        Assunto
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Assunto" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalMensagem">
                    <Col componentClass={ControlLabel} sm={2}>
                        Mensagem
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Mensagem" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Receber Notícias no meu e-mail</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Enviar</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }

}
export default Formulario;

