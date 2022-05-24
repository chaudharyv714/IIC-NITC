import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import EventCard from './events/EventCard';
import Announcements from './events/Announcements';
import './events.css';

function Event() {
   return (
      <div id="events">
         <span>
         <i className="bg far fa-calendar"></i>
         <p className='event-heading'>Events</p>
         </span>

         <EventCard />
         <span className='mb-2'>
         <i className="bg fas fa-stream"></i>
            <p className='event-heading'>Annoucements</p>
         </span>

         <Announcements />
      </div>


   );
}

export default Event;
