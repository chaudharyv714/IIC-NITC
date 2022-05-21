import React from 'react';
import './footer.css';

function footer() {
    return (
        <div id="footer">
            <div id="first">
                <div id="log-box">
                <img src='iic_logo_invert.png' alt="logo"/>
                    <h2> Institute Innovation Council</h2>
                    <p>National Institute of Technology, Calicut</p>
                </div>
                <div id="follow">
                    <p className="footext">Useful Links</p>
                    <div>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div id="call">
                    <img src="logoinvert.jpg" alt="nitc" />
                </div>
            </div>
            <span className="whitebr"></span>
            <div id="second">
                <div id="credits">©<a href="#">IIC|NITC</a></div>
                <div id="pptc">
                    <span>PRIVACY POLICY</span>
                    <span>TERMS AND CONDITIONS</span>
                </div>

            </div>
        </div>
    );
}
export default footer;