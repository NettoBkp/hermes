import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import imaGemA from "../img/atomo5.gif";
//import 'bootstrap/dist/css/bootstrap.min.css';
import LogoAs from '../components/logoAS';
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
                <body className="navC">                
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <nav>
                    <div className="nav-wrapper black darken-3">
                    <a href="/" className="brand-logo"><LogoAs/></a>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger pulse"><i className="material-icons"><i class="material-icons">view_list</i></i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">Início</a></li>                         
                            <img src={imaGemA} width="65px" ></img>
                            <li><a href="/taking">Conversa</a></li>
                            <li><a href="/tempo">Tempo Agora</a></li>
                            <li><a href="/slide">Slide Show</a></li>
                            <li><a onClick={this.logout} href="/logout">out</a></li>                                                        
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav grey grey lighten-1 accent-4" id="mobile-demo">                    
                    <li><img src="https://img.icons8.com/color/120/000000/teacher.png"></img></li>
                    <li><a href="/"><i class="material-icons">android</i>Início</a></li>
                    <li><a href="/taking"><i class="material-icons">eco</i>Conversa</a></li>
                    <li><a href="/tempo"><i class="material-icons">credit_card</i>Tempo Agora</a></li>
                    <li><a href="/slide"><i class="material-icons">person</i>Slide Show</a></li>
                    <li><a onClick={this.logout}  href="/logout"><i class="material-icons">logout</i>Sair</a></li>                    
                </ul>    
                </body>                    
        )
    }
};

export default NavBar;