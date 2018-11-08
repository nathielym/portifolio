import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image} from 'react-bootstrap'
import './rodape.css'
import git  from '../../imagens/Rodape/git.svg';
import fb  from '../../imagens/Rodape/fb.svg';

class Rodape extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect Bottom>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Nathiely Macedo</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href='https://github.com/nathielym'>
                        <Image id = "git" src={git} circle />
                        </NavItem>
                        <NavItem eventKey={2} href='https://www.facebook.com/nathiely.moraes'>
                        <Image id = "fb" src={fb} circle />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
export default Rodape;