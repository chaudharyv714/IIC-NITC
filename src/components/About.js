import React from 'react';
import './about.css';

function About() {
    return (
        <div id="about">
            <div className="con">
                <div className="content">
                    <span>
                        <i className="bg far fa-bookmark"></i>
                        
                        <h3>About</h3>
                    </span>
                    <p>Multiphase reactors are found in many diverse applications such as the manufacture of petroleum-based fuels, commodity and speciality chemicals,
                        pharmaceuticals, and the production of polymers. The understanding of complex fluid dynamic behaviours in the multiphase reactors has been studied through
                        computational flow modelling. This workshop provides state-of-the-art modelling methods for various multiphase reactors in terms of fundamental as well as
                        applications such as petroleum, chemical, biological and thermal processes and mineral processing</p>
                </div>
                <div className="content">
                    <span>
                        <i className="bg fab fa-dochub"></i>
                        <h3>Objectives</h3>
                    </span>
                    <ul>

                        <li>Identify the different types of multiphase reactors involving gas-liquid and gas-liquid-solid flows such as bubble column reactor, loop reactor, stirred reactor,
                            packed bed reactor, fluidised bed reactor and their operating parameters and various industrial applications;
                        </li>
                        <li>Understand fundamentals of multiphase reactors in terms of fluid dynamics, flow regimes, mixing, and mass transfer;
                        </li>
                        <li>Have a knowledge about advanced modelling methods of multiphase reactor including Eulerian-Eulerian approach, Eulerian Lagragian approach, and Volume of
                            Fluid approach;
                        </li>
                        <li>Design and scale-up aspects of multiphase reactor for industrial applications such as petroleum refinery-FCC, chemical process, biological process, mineral
                            processing, thermal process of pyrolysis, combustion and gasification through CFD modelling;</li>

                    </ul>
                </div>
            </div>

            <div className="image">
                <img src="rajpath.jpg" alt="rajpath" />
            </div>
        </div>
    );
};

export default About;