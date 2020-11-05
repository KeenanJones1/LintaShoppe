import React, { Component } from 'react'
import {ProductList, detailProduct} from './ProductList';


const ProductContext = React.createContext();

class ProductProvider extends Component {
 state={
  products: [],
  detailProduct: detailProduct 
 }

 componentDidMount(){
  this.setProducts();
 }

 setProducts = () => {
  let tempProducts = [];
  ProductList.forEach(item => {
   const singleItem = {...item};
   tempProducts = [...tempProducts, singleItem];})
   this.setState(() => {
    return {products: tempProducts}
   })
 }

 handleDetail = () => {
  console.log("hello from Detail")
 }

 addToCart = () => {
  console.log("hello from addToCart")
 }

 render() {
  return (
   <ProductContext.Provider value={{
    ...this.state,
    handleDetail: this.handleDetail,
    addToCart: this.addToCart,
   }}>
    {this.props.children}
   </ProductContext.Provider>
  )
 }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }

