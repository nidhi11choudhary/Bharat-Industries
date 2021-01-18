import React, { Component } from 'react'
import {InfoConsumer} from './Context'

class Info extends Component {
    render() {
        const{
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            photo
        } =this.props.item;

        return (
      
      <InfoConsumer>
                {value =>(  
                    <div className="row">
                        <div className="col-md-3">
                             <div className="mb-5 mt-5 " >
                             <div className="card" style={{width:'20rem', border:'none' }}>
                             <img src={photo} alt="photos" className="card-img-top" />      
                            
                             </div> 
                             </div>
                         </div>
                        <div className="col-md-7" >
                             <div className="mb-5 mt-5 ml-5" >
                             <div className="card" style={{width:'60rem', border:'none'}}>
                             <div className= "card-body bor">
                             <h3 className="card-title text-uppercase mt-2" >{headerTitle}</h3>
                             <h5 className="card-title">{headerSubTitle}</h5>
                             <p className="card-text">{headerText}</p> 
                             </div>
                             </div>
                             </div>
                        </div>
                    </div>
                )}
          </InfoConsumer>

        );
    }
}

export default Info;