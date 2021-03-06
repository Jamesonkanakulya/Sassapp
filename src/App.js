import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Switch,Route} from 'react-router-dom'
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Pages from './pages/Pages';
import Gallery from './pages/Gallery';
import Errorpage from './pages/Errorpage';
import Animate from 'animate.css-react'
import SingleProduct from './pages/SingleProduct';
import Login from './components/Login';
import Chart from './components/Chart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about/' component={About}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/gallery' component={Gallery}/>
        <Route exact path='/gallery/:slug' component={SingleProduct}/>
        <Route exact path='/pages' component={Pages}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/chart' component={Chart}/>
        <Route exact path='/checkout' component={Checkout}/>
        <Route component={Errorpage}/>
        
      </Switch>
     <Footer/>
      
    </div>
  );
}

export default App;
