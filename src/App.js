import React from 'react';

import Header from './components/Header';
import Foooter from './components/Footer';
import People from './components/People';
import Contact from './components/Contact';
import Events from'./components/Events';
import Gallery from './components/Gallery'
import About from './components/About'
import Intro from './components/Intro';

import './app.css';

function App() {
    return (
        <React.StrictMode>
            <Header/>
            <Intro/>
            <About/>
            <Events/>
            <Gallery/>
            <People/>
            <Contact/>
            <Foooter/>
        </React.StrictMode>
    );
}
export default App;