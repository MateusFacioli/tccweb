import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebaseConfig';
import { className, COMBINATOR } from 'postcss-selector-parser';
import logo from '../transacao.svg';
import Date from '../components/Date';
import Geocode from "react-geocode";


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
  /*
    const advRef = firebase.database().ref('pedidos');//.orderByChild('comerciante');
    advRef.on('value', (snapshot) => {
      let ref = snapshot.val();
      let newAdvState = [];
      let perc=0;
      let soma=0;
      
      for ( let j in ref) {
      perc+= ref[j].produto.preco*0.1;
      soma+=(ref[j].produto.preco)-perc;
      
        newAdvState.push({
          id:  ref[j].key,
         preco: ref[j].produto.preco,
         descricao: ref[j].produto.descricao,
         percent:perc,
         total: soma,
          nomecom:"",
          email: "",
          cliente:""
        });
        
       perc=0;
       soma=0;

      }

      this.setState({
        pedidos: newAdvState
      });
    });
*/
    const ref1 = firebase.database().ref('comerciante');
    ref1.on('value', (snapshot) => {
      let comerciante = snapshot.val();
      let newAdvState = [];
      
       for (let j in comerciante)
       {
        /*var total=0;
        let soma=0;
        var perc=0;
        const ref2 = firebase.database().ref('comerciante').child('pedidos');//ou ref pedidos
        ref2.on('value', (snapshot) => {
          let pedidos = snapshot.val();
         for (let k in pedidos)
         {
           soma+=pedidos[k].produto.preco;//somatoria total de todos os produtos do sistema
           perc+=pedidos[k].produto.preco*0.1;
         }
         //soma=0;
         perc=0;
         total+=soma-perc;
        });*/
         
           newAdvState.push({
             id:  comerciante[j].key,
             nomecom: comerciante[j].nome,
             email: comerciante[j].email,
             vendido: "bla",
             descontado: "ba",
             total: "baa"
           });
          
       }  
       this.setState({
        comerciante: newAdvState
      });
    });
};

  
  
  Repasse() {
   //pegar  nome/email e a posicao do vetor pedidos[j]
   // fazer a conta de fato
   var x;
   const r= window.confirm("Deseja fazer o repasse para"+this.state.pedidos.nomecom);
   if (r===true)
     {
       
     }
   else
     {
     x="Ainda não estou pronto";
     }
  }
  render() {
    return (
      
      <div className="App">   
        <header className="App-header">
        <br/>
        <br/>
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <h1>Repasse aos comerciantes da plataforma EasyMeal-web</h1>
          <br/>
          </header>
          <h1>Data em avaliação</h1>
          <p> <strong><Date/></strong></p>                           
                      
                      <div>
                       <table align="center">
                         <tr>
                         <th>COMERCIANTE</th>
                         <th>EMAIL</th>
                         <th>TOTAL DE VENDAS</th>
                         <th>DESCONTADO</th>
                         <th>TOTAL A RECEBER</th>
                         <th>ACÃO</th>
                         </tr>
                         {this.state.comerciante.map((ped) => (
                         <tr id="tabela">
                            <td align="center" valign="middle" height="100px"  >{ped.nomecom}</td>
                            <td align="center" valign="middle" height="100px"   >{ped.email}</td>
                            <td align="center" valign="middle" height="100px"   >{ped.vendido}</td>
                            <td align="center" valign="middle" height="100px"   >{ped.descontado}</td>
                            <td align="center" valign="middle" height="100px"   >{ped.total}</td>
                            <td><button onClick={(e) => this.Repasse(e)}>Repasse</button></td>
                         </tr> 
                         ))}
                       
                       </table>                       
                     </div>    
      </div>

    );
  }
}

export default ComponentToPrint;