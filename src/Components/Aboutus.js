import React, { Component } from 'react'
import { InfoConsumer } from './Context';

class AboutUs extends Component {
    render() {
        const{
            id,
            abouttitle,
            textp1,
            textp2
        } =this.props.item; 

        return(
            <InfoConsumer>
                {value=>(                   
                     <div >
                    
                <div className="card" style={{width:'75rem'}}   >
                <div className= "card-body">
                    <h3 className="card-title text-uppercase">{abouttitle}</h3>
                    <h5 className="card-text">{textp1}</h5>
                    <h5 className="card-text">{textp2}</h5>
                    </div> 
                    </div>
                    </div>
                )}
            </InfoConsumer>
        )
    }
}
export default AboutUs;
