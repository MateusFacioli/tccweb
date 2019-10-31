import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {Menubar} from 'primereact/menubar';
import {withRouter, useHistory} from 'react-router-dom';
//import firebaseAppAuth from './pages/login';
//import { isAuthenticated } from './pages/auth';
import { Routes } from './routes';


class App extends Component {

 
  render() {
    const {
      user,
      history
    } = this.props;
 
    const menuitems = [
      {
         label:'Home',
         icon:'pi pi-fw pi-home',
         command:() => history.push('/')
      },
      {
         label:'Login',
         icon:'pi pi-fw pi-user',
         command:()=> history.push('/login')
      },
      {
         label:'Dados',
         icon:'pi pi-fw pi-comment',
         command:() => user ? history.push('/dados') : history.push('/login')
      }
   ];
   //route funciona mas como por as rotas do route dentro de this.props.history.push
    return (
      <div className="App">
        <Menubar model={menuitems}/>
      
        <Header/>
        <div id="main">
            <main>
                <div className="content" id="content">
                    {this.props.children}
                </div>
            </main>
        </div>
        <Footer/>
        
      </div>
    );
  }
}

const firebaseAppAuth = firebase.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(withRouter(App));