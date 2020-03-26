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
                duration: 600,                                

            });
            console.log(instances)
        });
    }
    render() {
        return (
            <Fragment>
                <body className="box3" width="100%" height="480">
                    <div class="parallax-container">
                        <div class="parallax"><img src="" alt="React logo" /></div>
                        <div class="parallax-container">
                            <div className="box3 card-panel hoverable carousel carousel-slider center" width="100%" height="480">
                                <div className="carousel-fixed-item center">
                                </div>
                                <div className="carousel-item box black darken-4 white-text" href="#one!">
                                    <a href="#" ><img className="circle" src="https://s.calendarr.com/upload/datas/rv/or/rvore-de-outono_c.jpg" /></a>
                                    <br />
                            Atlética NF - YouTube
                        </div>

                                <div className="carousel-item box black darken-4 white-text" href="#one!">
                                    <div class="video-container">
                                        <iframe width="853" height="480" src="https://www.youtube.com/channel/UCNOb67Xa_V4cXu-hSHusJIw" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div className="carousel-fixed-item center">
                                </div>
                                <div className="carousel-item box black darken-4 white-text" href="#one!">
                                    <a href="" ><img className="circle" width="100%" height="100%" src="https://4.bp.blogspot.com/-zjxfHT2Wr6w/Ur8sT42BzFI/AAAAAAAAAMs/8DL58gpW4Rk/s1600/oiem.png" /></a>
                                    <br />
                            Garota Gammer - Cefet NF
                        </div>

                                <div className="carousel-item  box black darken-4 white-text" href="#two!">
                                    <div className="box">
                                        <h2 className="box2 nav-wrapper light-blue darken-2">Tempo Agora</h2>
                                        <br />
                                        <Tempo />
                                    </div>
                                    <br />
                                </div>
                                <div class="carousel-item box black white-text" href="#three!">
                                    <div className="box">
                                        <h2 className="box2 nav-wrapper teal darken-4">Card Modelo</h2>
                                        <br />

                                    </div>
                                </div>
                                <div class="carousel-item box black white-text" href="#four!">
                                    <div className="box2 light-blue darken-2">
                                        <h2>Painel Showw</h2>                                        
                                        <p class="white-text">... painel whooll...</p>
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