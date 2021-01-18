import React, { Component } from 'react'
import {InfoConsumer} from '../Context'
import Service_info from '../Service_info'
import logo from '../images/logo-2.png'

class Home extends Component {
    render() {
        return (
            <div className="main-div">        
                <div className="big-image mt-5">
                    <div className="overlay">
                        <h1>Fabricating The Exigencies</h1>
                        <p></p>
                    </div>
                </div>
                <div className="service-heading mt-5">
                    <h1>Who we are</h1>
                    <h4><b>Bharat Industries</b> is a manufacturing company with strong capabilities in fabricating Steel products required for </h4>
                       <h4> chemical and pharmaceutical industries</h4>
                    <p></p>
                </div>
                <div className="service-heading mt-5">
                    <h1>What we offer?</h1>
                    <h4><b>Bharat Industries</b> established in year of 2011. We are very much glad to introduce ourselves as Engineers, Fabricators</h4>

                       <h4> for heavy as well as regular engineering industries in alloy steel, carbon steel &#38; stainless steel. We undertake fabrication of</h4>
                       <h4> various process equipment required for chemical and pharmaceutical industries which is mentioned in our profile. </h4>
                    
                    <p></p>
                </div>
                <div className="parallax-wrapper"> 
                    <div className="content">
                    <div className="container">
                          <div className= "row">    
                          <InfoConsumer>
                               {value => {
                                return value.home_services.map(item => {
                                 return <Service_info key={item.id} item={item}/>;
                                  });
                                 }} 
                           </InfoConsumer>
        
                         </div>
                     </div>  
                    </div>
                </div>
                <div className="big-image-contact-home">
                    <div className="overlay">
                        <div className="container" >
                        <div className="row">

                        <div className="col-md-3"> 
                        <a className="navbar-brand ml-5" href="#">
                      <img src={logo} alt="logo" style={{width:'100px',height:'200', background: 'transparent'}}/>
                          </a>
                          <h4 style={{textAlign :'center'}}>Bharat Indudtries</h4>
                         </div>


                        <div className="col-md-3">
                        <h4 style={{ color:'#00AAE4'}}>Call: +91-99252-46909 </h4>
                        <br></br>
                        <br></br>
                        <h6>Plot No 906/4, Gidc, Panoli, Bharuch Gujarat 394115 </h6>
                        <h6>bharatfabricationunit@gmail.com</h6>
                         </div>
                        
                        
                         <div className="col-md-3" style={{textAlign :'center'}}> 
                         <a href="" style={{color :'white'}}>Home</a><br></br>
                         <a href="" style={{color :'white'}}>About</a><br></br>
                         <a href="" style={{color :'white'}}>&nbsp;&nbsp;&nbsp; Products</a><br></br>
                         <a href="" style={{color :'white'}}>&nbsp;&nbsp;Contact</a><br></br>
                         <a href="" style={{color :'white'}}>Carrer</a>
                         </div>

                         <div className="col-md-3">
                        <h4 style={{textAlign :'center'}}></h4>
                         </div>

                         </div>
                        </div>
                    </div>
                </div>
              

            </div>

        )
    }
}
export default Home;
