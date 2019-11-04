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
  
    const advRef = firebase.database().ref('pedidos');//.orderByChild('comerciante/nome');
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
          nomecom:ref[j].comerciante.nome,
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

    const ref1 = firebase.database().ref('comerciante');
    ref1.on('value', (snapshot) => {
      let comerciante = snapshot.val();
    
      let newAdvState = [];
      
       for (let j in comerciante)
       {
        var listaSelect = document.getElementById('cbcomerciante');
        //saber quantos pedidos o comerciante[j] tem
        // enquanto tiver pedidos somar
         newAdvState.push({
             id:  comerciante[j].key,
             nomecom: comerciante[j].nome,
             email: comerciante[j].email,
             //vendido: soma,
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
                         <th>COMERCIANTES</th>
                         <th>PEDIDOS</th>
                         <th>DATA</th>
                         <th>LOCAL</th>
                        </tr>
                        <td>
                        <select name ="cbcomerciante">
                        <option value="default">Selecione um comerciante</option>  
                         {this.state.comerciante.map((ped) => (

                           <option value= {ped.key} >Nome: {ped.nomecom} **** Email: ({ped.email}) vendido: {ped.vendido}</option>
                         ))}
                        </select>
                        </td>

                        <table align="center">
                         <td>
                        <select name ="Pedidos">
                        <option value="default">Selecione um pedido</option>  
                         {this.state.pedidos.map((ped) => (

                           <option value="nome">comerciante: {ped.nomecom} preço R$ {ped.preco} descontado R$({ped.percent}) a receber R${ped.total}</option>
                           
                        
                         ))}
                            
                        </select>
                        <td><button onClick={(e) => this.Repasse(e)}>Repasse</button></td>
                        </td>
                        
                       </table>                       
                       </table>
                     </div>    
      </div>

    );
  }
}

export default ComponentToPrint;