import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import '../styles/stylesheet.css'

class Main extends Component{

    constructor(){
        super()
    }
    render(){
        return ( 
            
                <div >
                    <Navbar/>
                   <Switch>
                       <Route exact path ="/" component={Home}/>
                       <Route path ="/about" component={About}/>
                       <Route path ="/products" component={Products}/>
                       <Route path ="/contact" component={Contact}/>
                       <Route component={NotFoundPage}/>
                       </Switch>
                     <Footer/>
                </div>
             )
         }
}


export default Main

