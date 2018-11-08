import React, { Component, Fragment } from 'react';
import Menu from './components/Menu/Menu';
import Perfil from './components/Perfil/Perfil';
import Detalhes from './components/Detalhes/Detalhes';
import Blog from './components/Blog/Blog';
import Portifolio from './components/Portfolio/Portifolio'
import Infos from './components/Infos/Infos'
import Formulario from './components/Formulario/Formulario'
import Rodape from './components/Rodape/Rodape'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
         <div id = "nav"><Menu /></div>
         <div id = "perfil"><Perfil  /></div>
         <div id="detalhes"><Detalhes  /></div>
         <div id="blog"><Blog  /></div>
         <div id= "portifolio"><Portifolio  /></div>
         <div id="info"><Infos /></div>
         <div id= "form"><Formulario /></div>
         <div id="rodape"><Rodape /></div>
      </Fragment>
    );
    
  }
  
}

export default App;
