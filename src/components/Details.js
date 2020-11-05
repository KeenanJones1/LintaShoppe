import React from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
 return (
      <ProductConsumer>
        {value => {
         const {id, company, info, price, title, inCart, color, category, delivery } = value.detailProduct;
         return (
        <div className="col-md-6">
         <h5>{title}</h5>
         <p className="mb-2 text-muted text-uppercase small">Shirts</p>
         <ul className="rating">
           <li>
             <FontAwesomeIcon icon={faStar} />
           </li>
           <li>
             <FontAwesomeIcon icon={faStar} />
           </li>
           <li>
             <FontAwesomeIcon icon={faStar} />
           </li>
           <li>
             <FontAwesomeIcon icon={faStar} />
           </li>
           <li>
           <FontAwesomeIcon icon={faStar} />
           </li>
         </ul>
         <p><span className="mr-1"><strong>{price}</strong></span></p>
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
                     <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                       className="minus"></button>
                     <input className="quantity" min="0" name="quantity" value="1" type="number"/>
                     <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                       className="plus"></button>
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
         <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
         <button type="button" className="btn btn-light btn-md mr-1 mb-2"><i
             className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
       </div>
         )
        }}
      </ProductConsumer>
 )
}

export default Details



