import React from 'react';
import Footer from './Footer'

let myEventsList = [
  {
  'id': 1,
  'date': '9/16/17',
  'time': '5:00pm',
  'title': 'Homecomming',
},
{
  'id': 2,
  'date': '9/17/17',
  'time': '7:00pm',
  'title': 'Homecomming2',
}
];
function add(a, b) {
  return Number(a) + Number(b);
}
function dateConverter(dateString) {
  return dateString.split('-').reduce(add, 0)
}
function timeConverter(dateString) {
  return Number(dateString.split(':')[0]);
}
const Events = (props) => {

  let sortedEventArray = []
  if(props.events.length) {
    props.events.sort(function (a, b) {
      return (
        parseFloat([dateConverter(a['date']), timeConverter(a['time'])].join('.')) -
        parseFloat([dateConverter(b['date']), timeConverter(b['time'])].join('.'))
      )
    })
};
  return (
    <div>

      <div className="event-list">
        {
          props.events.length ? (
            props.events.map((event) => {
              return (
                <div key={event.id}>
                  {event.date} {event.time} {event.title}
                </div>
              )
            })
          ) : null
        }
      </div>
      <div className={`form-container ${props.type} ${props.wobbleError}`}>

        <div className="event-container">
          <div className="event-submit-form">
            <form className="form" onSubmit={(e) => { props.submitForm(e); }}>
              <div className="">
                <label className="signup-label"> Create event here! </label>
              </div>
              <div className="form-group">
                <input type="date" name="date" placeholder="Date"
                  className="input signup-input-field"
                  id="signup-firstname-input-field"
                  onChange={(e) => { props.handleInput(e); }}
                  required />
              </div>
              <div className="form-group">
                 <input type="text" name="time" placeholder="Time"
                 className="input signup-input-field"
                 id="signup-firstname-input-field"
                 onChange={(e) => { props.handleInput(e); }}
                 required />
              </div>
              <div className="form-group">
                <input type="text" name="title" placeholder="Title"
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
              {
                props.events.length ? (
                  props.events.map((event) => {
                    return (
                      <div>
                        <div key={event.id}>
                          {event.date} {event.time} {event.title}
                          <button value={event.id} onClick={(e) => props.deleteEvent(e.target.value)}>X</button>
                        </div>
                      </div>
                    )
                  })
                ) : null
              }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
