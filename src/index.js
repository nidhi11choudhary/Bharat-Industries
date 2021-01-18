import React from 'react'
import ReactDOM from 'react-dom' 
import Main from  './Components/Main'
import {  BrowserRouter as Router  } from 'react-router-dom'
import {InfoProvider} from './Components/Context'


ReactDOM.render(
<InfoProvider>
    <Router>
        <Main/>
    </Router>
</InfoProvider>
,document.getElementById('root'));