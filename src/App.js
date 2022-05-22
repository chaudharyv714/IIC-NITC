import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Foooter from './components/Footer';
import People from './components/People';
import './app.css';

function App() {
    return (
        <React.StrictMode>
            <Header/>
            <People/>
            <Foooter/>
        </React.StrictMode>
    );
}
export default App;