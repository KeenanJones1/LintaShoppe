import React from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShoppingCart, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
 return (
      <ProductConsumer>
        {value => {
         const {id, company, info, price, title, inCart, color, category, delivery } = value.detailProduct;
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
         <div className="table-responsive mb-2">
           <table className="table table-sm table-borderless">
             <tbody>
               <tr>
                 <td className="pl-0 pb-0 w-25">Quantity</td>
                 <td className="pb-0">Select size</td>
               </tr>
               <tr>
                 <td className="pl-0">
                   <div className="def-number-input number-input safari_only mb-0">
                     <input className="quantity" min="1" defaultValue="1" name="quantity"  type="number"/>
                   </div>
                 </td>
                 <td>
                   <div className="mt-1">
                     <div className="form-check form-check-inline pl-0">
                       <input type="radio" className="form-check-input" id="small" name="materialExampleRadios"
                         checked/>
                       <label className="form-check-label small text-uppercase card-link-secondary"
                         for="small">Small</label>
                     </div>
                     <div className="form-check form-check-inline pl-0">
                       <input type="radio" className="form-check-input" id="medium" name="materialExampleRadios"/>
                       <label className="form-check-label small text-uppercase card-link-secondary"
                         for="medium">Medium</label>
                     </div>
                     <div className="form-check form-check-inline pl-0">
                       <input type="radio" className="form-check-input" id="large" name="materialExampleRadios"/>
                       <label className="form-check-label small text-uppercase card-link-secondary"
                         for="large">Large</label>
                     </div>
                   </div>
                 </td>
               </tr>
             </tbody>
           </table>
         </div>

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



