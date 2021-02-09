import React, { Component } from 'react'
import {InfoConsumer} from './Context'
import { Link } from 'react-router-dom';

class Service_info extends Component {
    render() {
        const{
            id,
            headerTitle,
            headerText,
            photo
        } =this.props.item;

        return (
          <InfoConsumer>
                {value =>(  
                            <div className="col-3 mb-5 ml-5 mr-3 mt-5" >
                             <div className="card image-box " style={{width:'20rem', borderRadius:'2px'}}>

                                <img src={photo} alt="photos" className="card-img-top " style={{height:'300px', position:"absolute"}}>
                                    </img>  
                                    
                                    <div className= "card-body overlay-1" style={{textAlign:"center", color:'#ffffff' }} >
                                    <h3 className="card-title text-uppercase mt-5" >{headerTitle}</h3>    
                                  </div >
                                  <Link to="/Products" className="overlay-1"><button style={{background:'#27233e', borderColor:"#27233e", color:'white', marginTop:'350px',marginBottom:'10px'}}>Learn More</button></Link>
                             </div>
                             
                            </div>
                   
                )}  
          </InfoConsumer>
        );
    }
}

export default Service_info;