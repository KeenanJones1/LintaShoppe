import React from 'react'
import Product from './Product'
import {ProductConsumer} from '../context'


const Products = () => {


 return (
  <div className="row">
   <ProductConsumer>
     {value => {
       return value.products.map(
         product => {
          return <Product key={product.id} product={product} />
         })
     }}
   </ProductConsumer>
  </div>
 )
}
export default Products;