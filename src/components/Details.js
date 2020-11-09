import React from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
 return (
      <ProductConsumer>
        {value => {
         const {id, company, info, price, title, inCart, color, category, count, delivery } = value.detailProduct;
         return (
        <div className="col-md-6">
         <h5>{title}</h5>
         <p className="mb-2 text-muted text-uppercase small">Shirts</p>
         <p><span className="mr-1"><strong> {`$ ${price}`}</strong></span></p>
         <p className="pt-1">{info}</p>
         <div className="table-responsive">
           <table className="table table-sm table-borderless mb-0">
             <tbody>
               <tr>
                 <th className="pl-0 w-25" scope="row"><strong>Model</strong></th>
                <td>{category}</td>
               </tr>
               <tr>
                 <th className="pl-0 w-25" scope="row"><strong>Color</strong></th>
                 <td>{color}</td>
               </tr>
               <tr>
                 <th className="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
                 <td>{delivery}</td>
               </tr>
             </tbody>
           </table>
         </div>
         <hr/>
         

          <div className="row">
            <Link to='/'>
              <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Return Home</button>
            </Link>
           
            {
              !inCart ? (<button onClick={() => value.addToCart(id)} type="button" className="btn btn-secondary btn-md mr-1 mb-2"> 
                Add To Cart <span/>
                <FontAwesomeIcon icon={faCartPlus}/>
              </button>) : (
                <button type="button" className="btn btn-light btn-md mr-1 mb-2" disabled>
                <FontAwesomeIcon icon={faShoppingCart}/> <span/>
                  In Cart
                </button>)
            }
          </div>
       </div>
         )
        }}
      </ProductConsumer>
 )
}

export default Details



