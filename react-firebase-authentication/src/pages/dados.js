import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebaseConfig';
import { className } from 'postcss-selector-parser';
import logo from '../transacao.svg';

class ComponentToPrint extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comerciante: [],
      pedidos: [],
      activePage: 15
    };
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber })
  }

  componentDidMount() { 
    
    const wordRef = firebase.database().ref('comerciante');
    wordRef.on('value', (snapshot) => {
    
      let comerciante = snapshot.val();
      let newState = [];
      for (let i in comerciante) {
        
        newState.push({
          id:  snapshot.key,
          email: comerciante[i].email,
          nome: comerciante[i].nome,

          
        });

      }
      this.setState({
        comerciante: newState
      });
    });

    const advRef = firebase.database().ref('pedidos');
    advRef.on('value', (snapshot) => {
      let pedidos = snapshot.val();
      let newAdvState = [];
      
      let perc=0;
      let soma=0;
      for ( let j in pedidos) {
      perc+= pedidos[j].produto.preco*0.1;
      soma+=(pedidos[j].produto.preco)-perc;
        newAdvState.push({
          id:  pedidos[j].key,
          preco: pedidos[j].produto.preco,
          descricao: pedidos[j].produto.descricao,
          percent:perc,
          total: soma
        });
       perc=0;
       soma=0;

      }
      this.setState({
        pedidos: newAdvState
      });
    });

  };

  render() {
    return (
      
      <div className="App">   
        <header className="App-header">
        <br/>
        <br/>
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <br/>
          <br/>
          </header>
    
      <div>  
      <a href="https://thevatsalsaglani.xyz" target="_blank" class="uk-icon" uk-icon="icon: world; ratio: 1.3"></a>
      </div> 
      <div className="uk-container pos">
        <div className="navigation uk-visible@m" uk-sticky="bottom: #offset">
          <a id="js-scroll-trigger" className="uk-button uk-button-text uk-align-left" href="#normal" uk-scroll>Comerciantes</a>
          <a id="js-scroll-trigger" className="uk-button uk-button-text uk-align-right" href="#adv" uk-scroll>Arrecadado</a>

        </div>
        <div className="nav uk-hidden@m" uk-sticky="bottom: #offset">
          <a href="#normal" uk-tooltip="One" className="uk-icon uk-align-left" uk-icon="home"></a>
          <a href="#adv" uk-tooltip="Two" className="uk-icon uk-align-right" uk-icon="plus"></a>
        </div>


        <section id="normal">
          <div className="uk-container-small uk-center uk-align-center">
            <h1>Comerciantes</h1>

            {this.state.comerciante.map((com) => {
              return (

                // <li key={word.id}>
                //   <h2>{word.word}</h2>
                //   <p>{word.meaning}</p>
                // </li>

                <div className="cc">
                  <div className="uk-child-width-1-1@m">
                    <div className="uk-card uk-card-default uk-card-body card">
                      <h3 className="uk-card-title word"> nome: {com.nome}</h3>
                      <p className="meaning">email: {com.email}</p>
                      <p className="meaning">Total de Vendas: {com.vendas}</p>
                    </div>
                  </div>
                </div>



              )
            })}

          </div>
        </section>
        {/* <section>
          <div>
            <h1>Advanced Words</h1>
            <ul>
              {this.state.advanced_words.map((w) => {
                return (
                  <li key={w.id}>
                    <h2>{w.advWord}</h2>
                    <p>{w.advMeaning}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section> */}
        <section id="adv">
          <div className="uk-container-small uk-center uk-align-center">
            <h1>Arrecadado</h1>

            {this.state.pedidos.map((ped) => {
              return (
                <div className="cc">
                  <div className="uk-child-width-1-1@m">
                    <div className="uk-card uk-card-default uk-card-body card">
                      <h3 className="uk-card-title word"> Preço: {ped.preco}</h3>
                      <p className="meaning">Descrição: {ped.descricao}</p>
                      <p className="meaning">percentual descontado: {ped.percent}</p>
                      <p className="meaning">Total a receber: {ped.total}</p>

                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </section>
      </div>
      </div>

    );
  }
}

export default ComponentToPrint;