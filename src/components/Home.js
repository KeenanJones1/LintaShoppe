import React, { Component } from 'react'
import Hero from './Hero'
import {ProductList} from '../ProductList'
import Products from './Products'

export default class Home extends Component {

 constructor(){
  super()
  this.state={
   products : ProductList
  }
 }
 render() {
  return (
   <main className="home-container">
    <Hero />
    <Products products={this.state.products}/>
   </main>
  )
 }
}
