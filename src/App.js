import './App.css';
import React from 'react';
import Layout from './hocs/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Modal from './components/Modal';
import Default from './components/Default'

class App extends React.Component {

  render(){
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route exact path='/cart' render={() => <Cart />} />
            <Route exact path="/details" render={() => <ProductDetails />} />
            <Route component={Default} />
          </Switch>
        </Layout>
        <Modal />
      </Router>
    );
  }
}

export default App;
