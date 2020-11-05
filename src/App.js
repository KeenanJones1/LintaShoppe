import './App.css';
import React from 'react';
import Layout from './hocs/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './components/Details'
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {

  render(){
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route exact path='/cart' render={() => <Cart />} />
            <Route exact path="/details" render={() => <ProductDetails />} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
