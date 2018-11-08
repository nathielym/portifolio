import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem} from 'react-bootstrap'
import './menu.css'



class Menu extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#perfil">Nathiely Macedo</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#perfil">
                            Perfil
                        </NavItem>
                        <NavItem eventKey={2} href="#detalhes">
                            Habilidades
                        </NavItem>
                        
                        <NavItem eventKey={3} href="#blog">
                            Blog
                        </NavItem>
                        <NavItem eventKey={4} href="#portifolio">
                            Portfólio
                        </NavItem>
                        <NavItem eventKey={5} href="#info">
                            Informações
                        </NavItem>
                        <NavItem eventKey={6} href="#form">
                            Contato
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
export default Menu;