import React, { Component, Fragment } from 'react';
import { PostData } from '../servicos/PostData';
import { Redirect } from 'react-router-dom';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        //console.log(this.state);
        PostData(this.state).then((result) => {
            let responseJSON = result;
            console.log(responseJSON);
            if (responseJSON.token) {
                sessionStorage.setItem('userData', responseJSON.token);
                this.setState({ redirect: true });                                
            }
            else {
                console.log('Login Error!!!');
                return (
                    <Fragment>
                    <body>
                        <p>Senha não confere.</p>                        
                    </body>
                    </Fragment>
                )
            }
        })
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });        
          //console.log(this.state);
    }
    render() {
        if (this.state.redirect) {            
            return (<Redirect to={'/'} />);
        }
        if (sessionStorage.getItem('userData')) {
            return (<Redirect to={'/'} />);
        }
        return (
            <Fragment>
                <link href="https://fonts.googleapis.com/css?family=Baloo|Fredoka+One|Paytone+One&display=swap" rel="stylesheet"></link>                
                    <body className="inicio">
                        <div>
                            <form className="box CardB">
                                <h2> Login </h2>
                                <br/>
                                <div className="inputBox">
                                    <input type="text" name="username" required="" onChange={this.onChange} />
                                    <label>Usuário: </label>
                                </div>
                                <br/>
                                <div className="inputBox">
                                    <input type="password" name="password" onChange={this.onChange} />
                                    <label>Senha: </label>
                                </div>
                                <div className="inputBox" >
                                <input type="button" name="login" onClick={this.login} value="Entrar" />
                                </div>
                            </form>
                        </div>
                    </body>                                   
            </Fragment>
        );
    }
}
export default Login;
