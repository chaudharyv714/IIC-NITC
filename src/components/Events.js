import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import EventCard from './events/EventCard';
import Announcements from './events/Announcements';

function App() {
  return (
     <>
        
        <h1 className='text-center text-danger text-capitalize my-5'>Events</h1>
        <EventCard/>
        <h1 className='text-center text-danger text-capitalize my-5'>Annoucements</h1>
        <Announcements/>
     </>


  );
}

export default App;
