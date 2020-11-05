import React from 'react';
import {ProductConsumer} from '../context';


const Main = () => {
 return (
   <ProductConsumer>
     {value => {
       const {img} = value.detailProduct
       return (
        <div className="md-lightbox">
           <div className="row product-gallery mx-1">
               <figure className="view overlay rounded z-depth-1">
                 <a href={img}
                   data-size="710x823">
                   <img src={img} alt="Hello"
                     className="img-fluid z-depth-1"/>
                 </a>
               </figure>
             </div>
         </div>
       )
     }}
   </ProductConsumer>
 )
}

export default Main
