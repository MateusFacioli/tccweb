import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebaseConfig';
import { className } from 'postcss-selector-parser';
import logo from '../transacao.svg';
import Date from '../components/Date';



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
  
    const advRef = firebase.database().ref('pedidos');
    advRef.on('value', (snapshot) => {
      let pedidos = snapshot.val();
      let newAdvState = [];
      let perc=0;
      let soma=0;
      //let tabela= document.getElementById("tabela");
      for ( let j in pedidos) {
      perc+= pedidos[j].produto.preco*0.1;
      soma+=(pedidos[j].produto.preco)-perc;
      //let td= document.createElement('td');
      //tabela.appendChild(td);
        newAdvState.push({
          id:  pedidos[j].key,
          preco: pedidos[j].produto.preco,
          descricao: pedidos[j].produto.descricao,
          percent:perc,
          total: soma,
          nomecom: pedidos[j].comerciante.nome,
          email: pedidos[j].comerciante.email,
          cliente:pedidos[j].cliente.nome
        });
       perc=0;
       soma=0;

      }

      this.setState({
        pedidos: newAdvState
      });
    });

  };
  Repasse() {
   //pegar  nome/email e mostar na mensagem de r
   // fazer a conta de fato
   var x;
   const r= window.confirm("Deseja fazer o repasse para");
   if (r===true)
     {
     x="Repasse concluído";
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
            {this.state.pedidos.map((ped) => {
              return(
                           
                      <div> 
                       <table align="center">
                         <tr>
                         <th>COMERCIANTE</th>
                         <th>EMAIL</th>
                         <th>VENDIDO</th>
                         <th>CLIENTE</th>
                         <th>DESCONTADO</th>
                         <th>TOTAL A RECEBER</th>
                         </tr>
                         <tr id="tabela">
                         <td align="center" valign="middle" height="100px"  >{ped.nomecom}</td>
                         <td align="center" valign="middle" height="100px"   >{ped.email}</td>
                         <td align="center" valign="middle" height="100px"   >{ped.descricao} por R$ {ped.preco}</td>
                         <td align="center" valign="middle" height="100px"   >{ped.cliente}</td>
                         <td align="center" valign="middle" height="100px"   >{ped.percent}</td>
                         <td align="center" valign="middle" height="100px"   >{ped.total}</td>
                         </tr>
                         
                       </table>
                       <button onClick={(e) => this.Repasse(e)}>Repasse</button>
                       <br/>
                       <br/>
                     </div>
              )
    
            })}
      </div>

    );
  }
}

export default ComponentToPrint;