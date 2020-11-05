import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ProductConsumer } from "../context";
import styled from 'styled-components'
import PropTypes from 'prop-types';

export default class Product extends Component {
 render() {
     const {id, title, img, price, inCart} = this.props.product
  return (
      <ProductConsumer>
          {(value) => {
              return(
                <ProductWrapper className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div onClick={ () => value.handleDetail(id)} className="product-image">
                        {/* product img 1 */}
                        <Link to="/details">
                            <img className="pic-1" src={img} alt="product-img"/>
                        </Link>
                    </div>
                <div className="product-content">
                    <button className="cart-btn" 
                    onClick={() => value.addToCart(id), () => value.openModal(id)}
                    disabled={inCart ? true : false}>
                        { inCart ? (<p className="h5 text-capitalize mb-0">in Cart</p>) : 
                        (<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                      </svg>) }
                    </button>
                    <h3 className="title"><Link to="/details">{title}</Link></h3>
                    <Link to="/details">View Details</Link>
                    <h4>{`$ ${price}`}</h4>
                </div>
            </div>
        </ProductWrapper>
              )
          }}
      </ProductConsumer>
  )
 }
}


Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
    product-content{
        position: relative;
        overflow: hidden;
    }

    .cart-btn{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: lightBlue;
        border: none;
        color: black;
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, -80%);
        transition: all 0.3s linear;
    }

    .cart-btn:hover{
        color: yellow;
        cursor: pointer;
    }

    .product-grid:hover .cart-btn{
        transform: translate(0, 0);
    }
`