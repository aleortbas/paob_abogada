import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Routes, Route, } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>
                <Header/>
            </div>
        )
    }
}

export default Main;