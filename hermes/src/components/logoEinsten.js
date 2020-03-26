import React, { Component, Fragment } from 'react';
import imaGem from "../img/Einstein234.gif";
import '../components/slide.css';

class Slide extends Component {
    render() {
        return (
            <Fragment>
                <div className="LogoEinst">                    
                    <img src={imaGem} alt="React logo" />                    
                </div>
            </Fragment>
        );
    }
};
//<img src={imaGem} alt="React logo" min-width="560px" />
export default Slide;