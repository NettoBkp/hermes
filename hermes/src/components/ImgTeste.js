import React, { Component, Fragment } from 'react';
import ImgB from '../img/Einstein2.gif'

class MyImgteste extends Component {
    render() {
        return (
            <Fragment>                
                <div className="card-panel hoverable sm">
                    <a href="#"><img src={ImgB}></img></a>                    
                </div>                
            </Fragment>
        )
    }
}
export default MyImgteste;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;