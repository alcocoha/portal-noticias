import React, { Component,  Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Buscador from './components/Buscador';

class App extends Component {
  state = { 
    noticias : []
  }

  componentDidMount() {
    this.consultarNoticias();
  }
  
  consultarNoticias = async (category = 'general') => {

    const key = '33c9387d9e614b62a99331b5a7fbcc3e';
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${key}`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
  
    this.setState({ noticias: noticias.articles });
  }


  render() { 
    return ( 
        <Fragment>
          <Header title="Noticias de mexico"/>
          <div className="container white contenedor-noticias">
            <Buscador consultar={ this.consultarNoticias }/>
            <ListaNoticias noticias={ this.state.noticias }/>
          </div> 
        </Fragment>
      );
  }

}
 
export default App;
