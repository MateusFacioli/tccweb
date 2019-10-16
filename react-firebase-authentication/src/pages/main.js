import React, {Component} from 'react';
//import api from '../../services/api'
import './style.css';
import {Link} from 'react-router-dom';
export default class Main extends Component{
    state={
        products:[],
        moreinfo:{},
    }
    componentDidMount(){
        this.loadProducts();
    }
    loadProducts=async()=>{
   // const response = await api.get('/products');
   // const {produto,...moreinfo}=response.data;
   //this.setState({products: produto, moreinfo})
    }
    render()
    {
        const {products} = this.state;
      return (
          <div className="product-list">
            {products.map(product=>(
            <article key={product._id}>
           <strong>{product.preco}</strong>
           <p>{product.descricao}</p> 
           <Link to="">Mais informações</Link>
            </article>
            ))}
          </div>
      );
    }
}