import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../components/NTest.css';
import NavBar from '../components/navBar';
import Tempo from '../components/TempoAgora';
import AlistaBd from '../components/Alista';
import MyButton from '../components/MyButton';
import imaGemBt from "../img/cc3adrculo_trigonomc3a9trico.png";
import imaGemT from "../img/notaveis.png";

var img = '';
class MyLabel extends Component {
    render() {
        return (
            <div class="o texto vai aqui em baixo">
                {this.props.text}                
            </div>
        )
    }
}
class Teste extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            labelText: [
                <Fragment>
                    <div className="txt">
                        A Física é uma ciência básica que explica as diversas formas de interação entre matéria e energia.
                        Quando se estuda Física, principalmente na escola, a ideia que normalmente se tem é que nem tudo o que é aprendido realmente tem alguma utilidade prática. No entanto, muito do que é visto como idealização de modelos, tem grande aplicação no dia a dia, desde as atividades físicas que realizamos até os equipamentos sofistica dos que carregamos, como os telefones celulares e relógios.
                </div>
                    <div>

                    </div>
                </Fragment>
            ],
            ClassN: "col s2 m2 box4 min scale-transition",            
            data: [],
            agenda: []
        }
        this.setClassName = this.setClassName.bind(this);
        this.setLabelText = this.setLabelText.bind(this);
        this.logout = this.logout.bind(this);
    }
    setClassName(ClassN){
        this.setState({ ClassN });       
    }
    setLabelText(labelText) {
        this.setState({ labelText });
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
    teste() {
        return (
            <Fragment>
                <header> Teste Ok </header>
            </Fragment>
        )
    }

    render() {
        const { data } = (this.state);
        console.log(this.state);
        
        if (this.state.redirect) {
            return (<Redirect to={'/login'} />);
        }
        return (
            <Fragment>
                <header>
                    <NavBar />
                </header>
                <body >
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Baloo|Fredoka+One|Paytone+One&display=swap" rel="stylesheet"></link>
                    <div className="box3">
                        <p />
                        <div className="box4">
                        <MyButton handleClick={this.setLabelText} text="col s1 m4 box4 min scale-transition" label="Menu" NClick={this.setClassName} nClass="col s0 m4 box4 scale-transition" />                        
                        <MyLabel text={this.state.labelText} />
                        </div>
                        <div className={this.state.ClassN}>
                        <MyButton handleClick={this.setClassName} text="col s1 m4 box4 min scale-transition scale-out" label="Botão Limpar" />                                
                                <MyButton handleClick={this.setLabelText} type="text" text={<Fragment><h5>Circulo Trigonométrico</h5><img width="100%" src={imaGemBt} /></Fragment>} label="Circulo Trigonométrico" />
                                <MyButton handleClick={this.setLabelText} type="text" text={<Fragment>Ângulos Notáveis<img width="100%" src={imaGemT} /></Fragment>} label="Ângulos Notáveis" NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />
                                <MyButton handleClick={this.setLabelText} text={<Tempo />} label="Tempo Agora" NClick={this.setClassName} nClass="col s0 m1 box4 scale-transition scale-out"/>
                                <MyButton handleClick={this.setLabelText} text={<iframe src="https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html" width="600" height="600" scrolling="no" allowfullscreen></iframe>} label="Lei de equilíbrio" />
                                <MyButton handleClick={this.setLabelText} text={<iframe src="https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html" width="600" height="600" scrolling="no" allowfullscreen></iframe>} label="Força e Movimento" />
                                <MyButton handleClick={this.setLabelText} text={<iframe src="https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html" width="600" height="600" scrolling="no" allowfullscreen></iframe>} label="Movimento do Projétil" />
                                <MyButton handleClick={this.setLabelText} text={<iframe src="https://www.myphysicslab.com/index-en.html" width="600" height="600" scrolling="yes" allowfullscreen></iframe>} label="myphysicslab" />
                                <MyButton handleClick={this.setLabelText} text={<iframe src="http://www.falstad.com/dispersion/" width="600" height="600" scrolling="yes" allowfullscreen></iframe>} label="Superposição de ondas" />
                                <MyButton handleClick={this.setLabelText} text={<iframe src="http://www.falstad.com/vector2de/" width="600" height="600" scrolling="yes" allowfullscreen></iframe>} label="Campo Elétrico" />
                        </div>                        
                        <div className="row valign-wrapper">                        
                            <div className="col s8 m12 box4">                                
                            <MyButton handleClick={this.setLabelText} text={<Tempo />}  NClick={this.setClassName} nClass="col s2 m1 box4 scale-transition scale-out" label="Menu Out" />                                                                                        
                            </div>                            
                                
                            <div className={this.state.ClassN}>                                
                                <MyButton handleClick={this.setClassName} text="col s2 m4 box4 min scale-transition scale-out" label="Botão Limpar" />                                
                                <MyButton handleClick={this.setLabelText} type="text" text={<Fragment><h5>Circulo Trigonométrico</h5><img width="100%" src={imaGemBt} /></Fragment>} label="Circulo Trigonométrico" />
                                <MyButton handleClick={this.setLabelText} type="text" text={<Fragment>Ângulos Notáveis<img width="100%" src={imaGemT} /></Fragment>} label="Ângulos Notáveis" NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out" />
                                <MyButton handleClick={this.setLabelText} text={<Tempo />} label="Tempo Agora" NClick={this.setClassName} nClass="col s1 m1 box4 scale-transition scale-out"/>
                                <MyButton handleClick={this.setLabelText} text={<iframe src="https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html" width="600" height="600" scrolling="no" allowfullscreen></iframe>} label="Lei de equilíbrio" />
                                <MyButton handleClick={this.setLabelText} text={<iframe src="https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html" width="600" height="600" scrolling="no" allowfullscreen></iframe>} label="Força e Movimento" />
                                <MyButton handleClick={this.setLabelText} text={<iframe src="https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html" width="600" height="600" scrolling="no" allowfullscreen></iframe>} label="Movimento do Projétil" />
                                <MyButton handleClick={this.setLabelText} text={<iframe src="https://www.myphysicslab.com/index-en.html" width="600" height="600" scrolling="yes" allowfullscreen></iframe>} label="myphysicslab" />
                                <MyButton handleClick={this.setLabelText} text={<iframe src="http://www.falstad.com/dispersion/" width="600" height="600" scrolling="yes" allowfullscreen></iframe>} label="Superposição de ondas" />
                                <MyButton handleClick={this.setLabelText} text={<iframe src="http://www.falstad.com/vector2de/" width="600" height="600" scrolling="yes" allowfullscreen></iframe>} label="Campo Elétrico" />
                                <p />
                            </div>
                        </div>                        
                    </div>
                </body>
                <ul>{data.map(item => <li>{item.full_name}</li>)}</ul>
            </Fragment>

        )
    }
}
// <MyLabel text={this.state.labelText} />    pode ser colodaco porcima dos botoes
//<ul>{data.map(item => <li>{item.full_name}</li>)}</ul> depois de footer
//<MyButton handleClick={this.setLabelText} text={<Redirect to={'/talking'} />} label="NTaking" />
//<MyButton handleClick={this.setLabelText} text={<AlistaBd />} label="Lista" />  
export default Teste;