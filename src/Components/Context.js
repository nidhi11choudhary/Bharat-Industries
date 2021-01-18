import React, { Component } from 'react'
import {product, about, home_service } from './data'

const InfoContext = React.createContext();

class InfoProvider extends Component {

    state ={
        aboutus: about,
        products: product,
        home_services:home_service

       // headerTitles: headerTitle,
        //headerSubTitle:headerSubTitle,
        //headerText:headerText
    }
    render() {
        return (
            <InfoContext.Provider 
            value={{ 
                aboutus:this.state.aboutus,
                products:this.state.products,
                headerTitle:this.state.headerTitle,
                headerSubTitle:this.state.headerSubTitle,
                headerText:this.state.headerText,
                photo:this.state.photo,
                textp1:this.state.textp1,
                textp2:this.state.textp2,
                abouttitle:this.state.abouttitle,
                home_services:this.state.home_services
               }}>

                {this.props.children}
            </InfoContext.Provider>
        )
    }
}


const InfoConsumer = InfoContext.Consumer;

export {InfoProvider, InfoConsumer};