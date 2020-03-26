import React, { Component, Fragment } from 'react';
import imaGem from "../img/fisica8.png";
import imaGemS1 from "../img/Atletica.jpg";
import '../components/slide.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Tempo from './TempoAgora';

// <a className="btn waves-effect white grey-text darken-text-2">button</a> .. pode ser colocado embaixo do segundo div
class Slide extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            //descomente para usar paralax
            var elemsPara = document.querySelectorAll('.parallax');
            var instance = M.Parallax.init(elemsPara, {});
            var elems = document.querySelectorAll('.carousel');
            const instances = M.Carousel.init(elems, {
                fullWidth: true,
                indicators: true,
                duration: 300,

            });
            console.log(instances)
        });
    }
    render() {
        return (
            <Fragment>
                <body>
                    <img src={imaGemS1} alt="React logo" /> está parte coloque no body
            <div class="parallax-container">
                        <div class="parallax"><img src={imaGem} alt="React logo" /></div>

                        <div class="parallax-container ">
                            <div className="carousel carousel-slider center">
                                <div className="carousel-fixed-item center">
                                </div>
                                <div className="carousel-item box indigo darken-4 white-text" href="#one!">
                                    <a href="https://www.youtube.com/channel/UCNOb67Xa_V4cXu-hSHusJIw" ><img className="circle" width="280" src={imaGemS1} /></a>
                                    <br />
                            Atlética NF - YouTube
                        </div>
                                <img src={imaGem} alt="React logo" />
                                <div className="carousel-item box indigo darken-4 white-text" href="#one!">
                                    <div class="video-container">
                                        <iframe width="853" height="480" src="https://www.youtube.com/channel/UCNOb67Xa_V4cXu-hSHusJIw" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div className="carousel-fixed-item center">
                                </div>
                                <div className="carousel-item box indigo darken-4 white-text" href="#one!">
                                    <a href="" ><img className="circle" width="480" src="https://4.bp.blogspot.com/-zjxfHT2Wr6w/Ur8sT42BzFI/AAAAAAAAAMs/8DL58gpW4Rk/s1600/oiem.png" /></a>
                                    <br />
                            Garota Gammer - Cefet NF
                        </div>
                                <img src={imaGem} alt="React logo" />
                                <div className="carousel-item  box indigo darken-4 white-text" href="#two!">
                                    <div className="box">
                                        <h2 className="box2 nav-wrapper light-blue darken-4">Tempo Agora</h2>
                                        <br />
                                        <Tempo />
                                    </div>
                                    <br />
                                </div>
                                <div class="carousel-item box green white-text" href="#three!">
                                    <div className="box">
                                        <h2 className="box2 nav-wrapper teal darken-4">Card Modelo</h2>
                                        <br />

                                    </div>
                                </div>
                                <div class="carousel-item box blue white-text" href="#four!">
                                    <div className="box">
                                        <h2>Painel Azul</h2>
                                        <p class="white-text">... azul painel...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </Fragment>
        );
    }
};
//<img src={imaGem} alt="React logo" min-width="560px" />
export default Slide;