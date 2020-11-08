import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import Product from './Product';

export default class Modal extends Component {


 render() {
  return (
   <ProductConsumer>
    {(value) => {
     const {modalOpen, closeModal} = value;
     const {img, title, price} = value.modalProduct;
     if(!modalOpen){
      return null;
     }
     else{
      return(
      <ModalContainer>
       <div className="container">
        <div className="row">
         <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-captialize p-5">
          <h5>Item added to cart </h5>
          <img src={img} className="img-fluid" alt="product"></img>
          <h5>{title}</h5>
          <h5 className="text-muted">
              <strong>
                Price: ${price}
              </strong>
          </h5>
          <Link to="/">
              <button onClick={() => closeModal()} className="btn btn-primary btn-md mr-1 mb-2">
                Continue Shopping
              </button>
          </Link>
          <Link to="/cart">
            <button className="btn btn-primary btn-md mr-1 mb-2" onClick={() => closeModal()}>
                Go To Cart
            </button>
          </Link>
         </div>
        </div>
       </div>
      </ModalContainer>
      )
     }
    }}
   </ProductConsumer>
  )
 }
}

const ModalContainer = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: rgba(0, 0, 0, 0.3);
 display: flex; 
 align-items: center; 
 justify-content: center;
 #modal{
  background: white;
 },
`;