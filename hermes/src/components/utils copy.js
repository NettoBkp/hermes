import React, { Component, Fragment } from 'react';
import imaGemCirc from "../img/cc3adrculo_trigonomc3a9trico.png";
import { Redirect } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import NavBar from './navBar';
import Tempo from './TempoAgora';
import MyCard from './cardO';
import MySelect from './MySelect';

class Utils extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    if (sessionStorage.getItem('userData')) {
      console.log('User Logged in');
    } else {
      this.setState({ redirect: true });
    }
  }
  logout() {
    //    console.log('logout');
    sessionStorage.setItem('userData', '');
    sessionStorage.clear();
    this.setState({ redirect: true });
  }
  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/login'} />);
    }
    return (
      <Fragment>
        <header>
          <NavBar />
        </header>
        <body className="CardA">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <div className="box">
            <MySelect />

            <a className="material-link blue300"  href="https://twitter.com/cefet_rj" ><img className="circle" width="25" src="" /><i className="material-icons md-24">web</i>Twitter</a>
             | 
            <a className="material-link blue300"  href="http://facebook.com/cefetrjoficial" ><img className="circle" width="25" src="" /><i className="material-icons md-24">book</i>Facebook</a>
             | 
            <a className="material-link blue300" href="https://instagram.com/cefet_rj/" ><img className="circle" width="25" src=""/><i className="material-icons md-24">touch_app</i>Instagram</a>            

            <Tempo />
          </div>
        </body>
      </Fragment>
    );
  }

}
export default Utils;