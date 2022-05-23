import React from 'react';

import Header from './components/Header';
import Foooter from './components/Footer';
import People from './components/People';
import Contact from './components/Contact';
import Events from'./components/Events';

import './app.css';

function App() {
    return (
        <React.StrictMode>
            <Header/>
            <Events/>
            <People/>
            <Contact/>
            <Foooter/>
        </React.StrictMode>
    );
}
export default App;