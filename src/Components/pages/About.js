import React, { Component } from 'react'
import {InfoConsumer} from '../Context'
import Aboutus from '../Aboutus'

class About extends Component {
    render() {
        return (

            <div className="main_div">
           
            <div className="big-image-about mt-5" >
            <div className="overlay">
                <h1>Building A Better Tomorrow</h1>
                <p></p>
            </div>
            </div>


            <div className="service-heading mt-5">
                    <h1>Bharat Industries </h1>
                    <p></p>
                </div>

                <div className="parallax-wrapper-about"> 
                    <div className="content-about">
                    <div className="container">
                          <div className= "row">    
                          <h4><b>Bharat Industries</b> established in year of 2011. We are very much glad to introduce ourselves as Engineers, Fabricators for heavy as well as regular engineering industries in alloy steel, carbon steel & stainless steel. We undertake fabrication of various process equipment required for chemical and pharmaceutical industries which is mentioned in our profile.</h4>
                         </div>
                     </div>  
                    </div>
                </div>

            </div>
        )
    }
}
export default About;
