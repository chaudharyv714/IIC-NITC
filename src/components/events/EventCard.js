import React from 'react';

function EventCard ()  {
    return (
        <>
          <div id="announcements" className="container">
            <div className="row">
            <div className="col">
                <div class="card mt-2" >
                    <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
                    <div class="card-body">
                        <h5 class="card-title">Event #1</h5>
                        <p class="card-text">Some quick example text to build on the Event  and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div class="card mt-2" >
                    <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px"/>
                    <div class="card-body">
                        <h5 class="card-title">Event #2 </h5>
                        <p class="card-text">Some quick example text to build on the Event  and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div class="card mt-2" >
                    <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px"/>
                    <div class="card-body">
                        <h5 class="card-title">Event #3 </h5>
                        <p class="card-text">Some quick example text to build on the Event  and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            </div>
         </div>
        </>
    );
}
 export default EventCard;