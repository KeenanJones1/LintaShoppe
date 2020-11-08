import React, { Component } from 'react'
import CartColumns from './CartColumns'

export default class Cart extends Component {
 render() {
  return (
   <section className="mt-5 pt-5">
    <h1 className="text-center mb-5">Your Cart</h1>
    <CartColumns />
   </section>
  )
 }
}
