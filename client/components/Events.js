import React from 'react';

let myEventsList = [
  {
  'date': '9/16/17',
  'time': '5:00pm',
  'eventTitle': 'Homecomming',
},
{
  'date': '9/17/17',
  'time': '7:00pm',
  'eventTitle': 'Homecomming2',
}
];

const Events = (props) => {
  return (
    <div className="event-container">
      <div className="event-list">
        {
          myEventsList.length ? (
            myEventsList.map((event) => {
              return (
                <div>
                  {event.date} {event.time} {event.eventTitle}
                </div>
              )
            })
          ) : null
        }
      </div>
      <div className="event-submit-form">
        <form className="form" onSubmit={(e) => { props.submitForm(e); }}>
         <div className="">
           <label className="signup-label"> Create event here! </label>
         </div>
         <div className="form-group">
           <input type="date" name="firstName" placeholder="Date"
           className="input signup-input-field"
           id="signup-firstname-input-field"
           onChange={(e) => { props.handleInput(e); }}
           required />
         </div>
         <div className="form-group">
           <input type="time" name="firstName" placeholder="Time"
           className="input signup-input-field"
           id="signup-firstname-input-field"
           onChange={(e) => { props.handleInput(e); }}
           required />
         </div>
         <div className="form-group">
           <input type="text" name="lastName" placeholder="Title"
           className="signup-input-field"
           id="signup-lastname-input-field"
           onChange={(e) => { props.handleInput(e); }}
           required />
         </div>
         {/* { !!warning && <div className="alert alert-warning">{warning}</div> } */}
         <button className={'signup-submit-button'} type="submit">
         Create Event
         </button>
       </form>
      </div>
    </div>
  );
};

export default Events;
