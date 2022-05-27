import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';

import './intro.css';

function Intro() {
    return (
        < div id="intro">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>


                {/* try images with aspect ratio~2, SHOULD NOT BE < 1.5 */}
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="false">
                        <div className="carin">

                            <div className="carousel-img-box"><img src="nitcpic1.png" alt="..." /></div>
                            <div className="carousel-caption-box">
                                <h1>
                                    Caption
                                </h1>
                                <p>
                                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className="carin">
                            <div className="carousel-img-box"><img src="nitcpic2.png" alt="..." /></div>
                            <div className="carousel-caption-box">
                                <h1>
                                    Caption
                                </h1>
                                <p>
                                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carin ">
                            <div className="carousel-img-box"><img src="nitcpic3.png" alt="..." /></div>
                            <div className="carousel-caption-box">
                                <h1>
                                    Caption
                                </h1>
                                <p>
                                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Intro;