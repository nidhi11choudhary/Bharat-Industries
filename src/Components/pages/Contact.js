import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
    constructor(props) {
        super(props);this.state = {
          name: "",
          email: "",
          contact:"",
          message: "",
        };
      }handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        this.setState({ [name]: value });
      }

    render(){
        return (   

               <div className="main_div">
                    <div className="big-image-contact mt-5" >
                    <div className="overlay">
                        <h1>Know us, know the quality</h1>
                        <p></p>
                    </div>
                    </div>
               
            
            <section className="mt-5">
               
                <div className="container">
                <div className="row">
                <div className="well well-sm mb-5" >
                               
                        </div>

                    <div className="col-md-8">
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1jA44WV31bQv4Wggb8TZL38ERasjaEuxO" 
                        style={{frameBorder: '0', width:'100%', height:'450px', border:'0' }} allowFullScreen/>
                                            </div>

                                            
                                           
            <div className="col-md-4">
                <p><strong>Let us engineer your project needs.</strong></p>
                <p><strong>Tell us a little about your business, and we will get back to you with some ideas as soon as possible</strong></p>
                <h4><strong>Bharat Industries</strong></h4>
                    
                    <form
                    id={this.props.id}
                    name={this.props.name}
                    method={this.props.method}
                    action={this.props.action}
                    >
                        <div className="form-group">

                        <input type="text" className="form-control" 
                        id="name"
                       // name="name" 
                        placeholder="Name" 
                        required 
                       // value={this.state.name}
                       />
                        </div>  

                        <div className="form-group"> 
                        <input type="email" className="form-control" 
                        id="email"
                        //name="email" 
                        placeholder="Email"
                        required 
                        //value={this.state.email}
                        />
                        </div>

                        <div className="form-group"> 
                        <input type="tel" className="form-control" 
                        id="contact"
                      //  name="contact" 
                        placeholder="Contact No."
                        required 
                      //  value={this.state.contact}
                         />
                        </div>
                         
                        <textarea classname="form-control" cols="30" rows="3" className="form-control" 
                        id="message"
                        //name="message" 
                        placeholder="Message"
                        required 
                       // value={this.state.message}
                       />
                       
                    
                        <button className="btn btn-outline-primary text-uppercase mt-1">
                            <i className="fa-paper-plane-o" aria-hidden="true"/>
                            <i className="fab fa-telegram-plane"/>&nbsp; Send
                                                    </button>
                         </form>
                         </div>
                  </div>
              </div>
            </section>
            </div>  
        )
    }
}

export default Contact;