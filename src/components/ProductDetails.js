import React, { Component } from 'react'
import Main from './Main'
import Details from './Details'

export default class ProductDetails extends Component {
 render() {
  return (
   <section className="pt-5 mt-5">
     <div className="row">
       <div className="col-md-6 mb-4 mb-md-0">
           <Main />
         </div>
          <Details />
     </div>
   </section>
  )
 }
}
