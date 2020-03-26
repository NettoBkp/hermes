import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import imaGemA from "../img/atomo5.gif";
import imaGemB from "../img/Einstein234.gif";
import imaGemBk from "../img/fisica9.png";

//import 'bootstrap/dist/css/bootstrap.min.css';
//import imaGem from "../img/google.png";
//<img src={imaGem} alt="React logo" min-width="560px" />
//import '../components/slide.css';
//<li><img src="https://img.icons8.com/color/144/000000/woody-woodpecker.png"></img></li>

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            volta: false,            
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
            //console.log('User Logged in');
        } else {
            this.setState({ redirect: true });
        }
        document.addEventListener('DOMContentLoaded', function () {            
            var elems = document.querySelectorAll('.sidenav');
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/5e7406c4eec7650c332149ae/1e3qmhts5';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
            var instances = M.Sidenav.init(elems, {
                fullWidth: true,
                indicators: true,
                duration: 300,                
            });
        });
    }
    render() {
        return (
            <Fragment>            
                

                <body className="box9">     
                
                <link href="https://fonts.googleapis.com/css?family=Baloo|Fredoka+One|Paytone+One&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>            

                <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="#!">three</a></li>
                </ul>

                    <nav className="nav-extended">
                        <div className="nav-wrapper blue darken-2">
                            <a href="/" className="brand-logo">Física</a>
                            <a href="/" data-target="mobile-demo" className="sidenav-trigger pulse"><i className="material-icons"><i className="material-icons">view_list</i></i></a>
                            <ul className="right hide-on-med-and-down" >
                                <li><a href="/"><i className="material-icons">home</i></a></li>
                                <img src={imaGemA} width="64px" ></img>
                                <li><a href="/docentes"><i className="material-icons">school</i></a></li>
                                <li><a href="/talking"><i className="material-icons">forum</i></a></li>
                                <li><a href="/eventos"><i className="material-icons">event_note</i></a></li>
                                <li><a href="/utils">Útil</a></li>
                                <li><a onClick={this.logout} href="/logout"><i className="material-icons">logout</i></a></li>
                                
                            </ul>
                        </div>
                    </nav>

                    <ul className="sidenav grey grey lighten-1 accent-4" id="mobile-demo">                   
                        <li><div className="user-view" >
                            <div className="background">
                                <img src={imaGemBk} width="250"></img><img src={imaGemA}></img>
                            </div>
                            <a href="/"><img className="circle" src={imaGemB} width="64px" /></a>
                            <a href="#name"><span className="CardB white-text name">CEFET | NF</span></a>
                            <a href="http://www.cefet-rj.br/"><span className="CardB white-text email">Cefet-RJ</span></a>
                        </div></li>                           
                        <li><a href="/"><i className="material-icons">home</i>Início</a></li>
                        <li><a href="/docentes"><i className="material-icons">person</i>Docentes</a></li>
                        <li><a href="/talking"><i className="material-icons">comment</i>Conversa</a></li>
                        <li><a href="/eventos"><i className="material-icons">event_note</i>Eventos</a></li>
                        <li><a href="/utils"><i className="material-icons">settings</i>Útil</a></li>                          
                        <li><a onClick={this.logout} href="/logout"><i className="material-icons">logout</i>Sair</a></li>
                                                                        
                    </ul>
                </body>
            </Fragment>
        )
    }
};
//{<iframe src="https://tawk.to/chat/5e7406c4eec7650c332149ae/default" width="100%" height="800" scrolling="yes" allowfullscreen></iframe>}
export default NavBar;