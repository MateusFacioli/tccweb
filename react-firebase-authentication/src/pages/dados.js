import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebaseConfig';
import { className, COMBINATOR, id } from 'postcss-selector-parser';
import logo from '../transacao.svg';
import Date from '../components/Date';
// import Geocode from "react-geocode";
//   // set response language. Defaults to english.
//   Geocode.setLanguage("pt");
//   // set response region. Its optional.
//   // A Geocoding request with region=es (Spain) will return the Spanish city.
//   Geocode.setRegion("br");
   
//   // Enable or disable logs. Its optional.
//   Geocode.enableDebug();
   
//   // Get address from latidude & longitude.
//   //pegar dados do firebase e por aqui
//   Geocode.fromLatLng("-22.832621666666668", "-47.053733333333334").then(
//     response => {
//       const address = response.results[0].formatted_address;
//       console.log(address);
//       debugger
//     },
//     error => {
//       console.error(error);
//     }
//   );
class ComponentToPrint extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comerciante: [],
      pedidos: [],
      vetoraux:[],
      value:"",
      numcomex:0
    };
    this.handleChange = this.handleChange.bind(this); 
  };
  componentDidMount() {
    //consulta 2 pegar os dados do comerciante (nome, email)
     //nao mostra comerciantes sem nome
    const ref2 = firebase.database().ref('comerciante').on('value', (snapshot) => { 
      let comerciante = snapshot.val();
      //let pedidos = snapshot.child('pedidos');
      let newAdvState = [];
      var cont=0;
     for (let j in comerciante)
      { 
         if(comerciante[j].nome!==undefined|| comerciante[j].email!==undefined)
         {
           if(comerciante[j].pedidos!==undefined){
          var listaSelect = document.getElementById('cbcomerciante');  
          cont++;
         newAdvState.push({
          id:  comerciante[j].key,
          nomecom: comerciante[j].nome,
          email: comerciante[j].email
        });
        this.setState({comerciante: newAdvState});
        this.setState({numcomex:cont});
      }
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

if(this.state.value!=="")
{
 
  var botao = document.getElementById('botao');
   const r= window.confirm("Deseja fazer o repasse para o comerciante "+this.state.value+" ? ");
   if (r===true)
     { 
      window.confirm("Valores repassados");
      botao.setAttribute("disabled", "disabled"); 
    }
   else
     {
 
     }
     
  if(this.state.vetoraux.find(v=> v===this.state.value))
  {
    botao.removeAttribute("disabled", "disabled");   
 }
  }
  
}

  handleChange(event) {
    this.setState({value:event.target.value});
    if(event.target.value==="default")
    {
      for(let i=0; i<this.state.vetoraux.length;i++)
      {
        this.state.pedidos.pop();
      }
     // document.getElementById('botao').setAttribute("disabled", "disabled");   
    }
    if(this.state.vetoraux.length<this.state.numcomex)
    {
      
    this.state.vetoraux.push(this.state.value);
    document.getElementById('botao').removeAttribute("disabled", "disabled"); 
    }
let cont=0;
let comex=0;
let vetor2=[];

    //consulta 1 pegar total de pedidos por comerciante
   const ref1 = firebase.database().ref('comerciante').on('child_added', (snapshot) => {
     let comerciante = snapshot.val();
     let newAdvState = [];  
     let vetor3=[];
     if(snapshot.hasChild('pedidos'))
     {
       cont++;//num de comerciantes que tem pedidos
       //vetor2[cont-1]=this.snapshotToArray(snapshot.child('pedidos'));
       vetor3=[this.snapshotToArray(snapshot.child('pedidos'))];
       var email =comerciante.email;
    }
    if(event.target.value===email)
       {
           let  soma=0;
           let perc=0;
           let total=0;
          for(let i=0; /*i<vetor2.length;*/ i<1; i++)
        { 
         for(let j=0; j<vetor3[i].length;j++)
       {
          soma+=vetor3[i][j].produto.preco;
       }
         perc=soma*0.1;
         total=soma-perc;
       
        newAdvState.push({ descontado: perc, vendido: soma, receber: total, comerciante:email});
        this.setState({pedidos: newAdvState});
      }
        soma=0;
        total=0;
        perc=0;
    }
    });
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
                         <th>TOTAL</th>
                        </tr>
                        <td> 
                        <select  name ="cbcomerciante" value={this.state.value} onChange={this.handleChange}>
                        <option value="default">Selecione um comerciante</option>  
                         {this.state.comerciante.map((ped) => (
                           <option value= {ped.key}>{ped.email}</option>
                         ))}
                        </select>
                        </td>
                        <table align="center">
                         <td>
                        <select name ="cbpedidos">
                         {this.state.pedidos.map((ped) => (
  <option value="nome"> Total vendido: R${ped.vendido}, descontado: R${ped.descontado} a receber: R${ped.receber}</option>
                         ))}
                        </select>
                        <td><button id="botao" name="botao" onClick={(e) => this.Repasse(e)}>Repasse</button></td>
                        </td>
                       </table>                       
                      </table>
                     </div>    
      </div>

    );
  }
}

export default ComponentToPrint;