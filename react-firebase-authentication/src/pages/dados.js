import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebaseConfig';
import { className, COMBINATOR } from 'postcss-selector-parser';
import logo from '../transacao.svg';
import Date from '../components/Date';


class ComponentToPrint extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comerciante: [],
      pedidos: [],
      vetoraux:[],
      numcomex:0,
      somaaux:[]
    };
  };
  componentDidMount() {
let cont=0;
let comex=0;
let vetor2=[];

    //consulta 1 pegar total de pedidos por comerciante
   const ref1 = firebase.database().ref('comerciante').on('child_added', (snapshot) => {
     let ped = snapshot.hasChild('pedidos');
     let comerciante = snapshot.val();
     let vendidos=snapshot.child('pedidos').val();
     let newAdvState = [];  
     if(snapshot.hasChild('pedidos'))
     {cont++;
       vetor2[cont-1]=this.snapshotToArray(snapshot.child('pedidos'));// tem tudo agora com tamanho 3 salvar em outro vet ?
    }
    let  soma=0;
       let perc=0;
      let total=0;
    for(let i=0; i<vetor2.length; i++)
    { 
       for(let j=0; j<vetor2[i].length;j++)
       {
         soma+=vetor2[i][j].produto.preco;
       }
       perc=soma*0.1;
       total=soma-perc;
       var listaSelect = document.getElementById('cbpedidos');  
       newAdvState.push({ descontado: perc, vendido: soma, receber: total});
       this.setState({pedidos: newAdvState});
       soma=0;
       total=0;
       perc=0;
    }
    });
    //consulta 2 pegar os dados do comerciante (nome, email)
     //nao pega comerciantes sem nome
    const ref2 = firebase.database().ref('comerciante').on('value', (snapshot) => { 
      let comerciante = snapshot.val();
      let vetor1 =[this.snapshotToArray(snapshot)];
      let newAdvState = [];
     for (let j in comerciante)
      { 
        
         if(comerciante[j].nome!==undefined|| comerciante[j].email!==undefined)
         {
          var listaSelect = document.getElementById('cbcomerciante');  
          //var itemsel= listaSelect.options[listaSelect.select]
         newAdvState.push({
          id:  comerciante[j].key,
          nomecom: comerciante[j].nome,
          email: comerciante[j].email,
        });
        this.setState({
          comerciante: newAdvState
        });
       // var listaSelect2 = document.getElementById('cbpedidos');
    }
  }
     
     });

};

snapshotToArray(snapshot) {
  var returnArr = [];
  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
}
 
Repasse(e) {
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
  handleChange(event) {
   // this.setState({value: event.target.value});
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
                        <select onClick={this.handleChange} name ="cbcomerciante">
                        <option value="default">Selecione um comerciante</option>  
                         {this.state.comerciante.map((ped) => (
                           <option value= {ped.key} >Nome: {ped.nomecom} **** Email: ({ped.email})</option>
                         ))}
                        </select>
                        </td>

                        <table align="center">
                         <td>
                        <select name ="cbpedidos" >
                        <option value="default">Selecione um pedido</option>  
                         {this.state.pedidos.map((ped) => (
                           <option value="nome">Total vendido: R${ped.vendido}, descontado: R${ped.descontado} a receber: R${ped.receber}</option>
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