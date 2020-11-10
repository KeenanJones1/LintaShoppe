import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import {Carousel} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'



 function Hero(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

 return (
<Carousel activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item>
    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
    <Carousel.Caption>
      <div className="container">

        <div className="row justify-content-md-center align-items-start">
          <div>
            <h3>Linta Shoppe</h3>
          </div>

        </div>
        <div className="row justify-content-md-center ">
          <h5 className="text-center">All Collections</h5>
        </div>
        <div className="row justify-content-md-center">
          <div className="py-6">
          <h5 className="text-center">Fast USA Shipping</h5>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div>
          <h5 className="text-center">Free Shipping Worldwide</h5>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
    <Carousel.Caption>
      <h3>About us</h3>
        <p>
          LintaShoppe.com was created out of a vision that has been developing for over 3 years. It founders with collectively over 3 years of accessory experience dreamed of a place where customers could find the greatest selection and lowest priced accessories for their daily life. We want to help you find all the essential accessories you need.

          {/* Our professional customer service team is always here to help you. Your satisfaction is our top priority!
          Moreover, you can easily get your order anywhere in the world to our worldwide Free shipping service!

          Let us show you why so many customers are truly satisfied with our customer service and quality of products. We are looking forward to serving you to the best of our abilities and hope you become a returning customer.

          Enjoy your shopping at LintaShoppe.com */}
          </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
    <Carousel.Caption>
      <h3>Contact Us</h3>
      <p>
      For any questions on products, please feel free to email us at support@lintashoppe.com
       We will get back to you within 24 hours!
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Link>
              <span className="mr-2">
                Call us
              </span>
              <span>
                <FontAwesomeIcon icon={faPhone}/>
              </span>
            </Link>
          </div>

          <div className="col-sm">
            <Link>
              <span className="mr-2">
                Email us
              </span>
              <span>
                <FontAwesomeIcon icon={faEnvelope}/>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 )
}

export default Hero;


     


{/* <div className="col-4">
          <h5 className="text-center">All Collections</h5>
          </div>

          <div className="col-4">
            
          </div>

          <div className="col-4">
            
          </div>


          <div className="col-4">
            
          </div> */}