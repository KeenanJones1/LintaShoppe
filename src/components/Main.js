import React from 'react';
import {ProductConsumer} from '../context';


const Main = () => {
 return (
   <ProductConsumer>
     {value => {
       const {img} = value.detailProduct
       return (
        <div className="md-lightbox">
           <div className="w-75 row product-gallery mx-1">
               <figure className="view overlay rounded z-depth-1">
                   <img src={img} alt="Hello"
                     className="img-fluid z-depth-1"/>
               </figure>
             </div>
         </div>
       )
     }}
   </ProductConsumer>
 )
}

export default Main
