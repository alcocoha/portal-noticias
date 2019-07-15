import React, { Component,  Fragment } from 'react';
import Header from './components/Header';

class App extends Component {
  state = { noticias : [] }

  async componentDidMount(){
    const key = '33c9387d9e614b62a99331b5a7fbcc3e';
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();


    this.setState({ noticias: noticias.articles })

    console.log('noticias', noticias)
  }

  render() { 
    return ( 
      <Fragment>
          <Header title="Noticias de mexico"/>
          <h1>hola noticias</h1>  
      </Fragment>
      
      );
  }

}
 
export default App;
