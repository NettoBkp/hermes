import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import LogoAs from './logoAS';
//import imaGem from "../img/google.png";
//<img src={imaGem} alt="React logo" min-width="560px" />
//import '../components/slide.css';
//<li><img src="https://img.icons8.com/color/144/000000/woody-woodpecker.png"></img></li>
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            volta: false
        }
        this.logout = this.logout.bind(this);
    }
    logout() {
        //    console.log('logout');
        sessionStorage.setItem('userData', '');
        sessionStorage.clear();
        this.setState({ redirect: true });
    }
    componentDidMount() {
        if (sessionStorage.getItem('userData')) {
            console.log('User Logged in');
        } else {
            this.setState({ redirect: true });
        }
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});

        });

    }
    render() {
        return (
            <body>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>                                                      
            <ul id="dropdown1" class="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" class="brand-logo">Logo</a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>

                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                </div>
            </nav>
            </body>  
            
        )
    }
};

export default NavBar;