import React, { Component } from 'react'
import {InfoConsumer} from '../Context'
import Info from '../Info'

class Products extends Component {
    render() {
        return (

            <div className="main_div">
                
             <div className="big-image-pro mt-5" >
            <div className="overlay">
                <h1>What We Do?</h1>
            </div>
            </div>

            <div className="container">
            <div className= "row">    
                <InfoConsumer>
                    {value => {
                    return value.products.map(item => {
                        return <Info key={item.id} item={item}/>;
                    });
                    }} 
                </InfoConsumer>
        
            </div>
        </div>  
        </div> 
    );
    }
}
export default Products;