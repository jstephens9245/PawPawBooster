import React from 'react';
import {Link} from 'react-router';

const Modify = (props) => {

//   let sortedEventArray = []
//   if(props.events.length) {
//     props.events.sort(function (a, b) {
//       let date = (
//         dateConverter(a['date']) - dateConverter(b['date'])
//       );
//       let time = (
//         parseFloat(timeConverter(a['time'])) -
//         parseFloat(timeConverter(b['time']))
//       );
//       if (date !== 0) {
//         return date;
//       }
//       return time;
//     })
// };
  return (
    <div>

      {/* <div className="event-list">
        {
          props.events.length ? (
            props.events.map((event) => {
              return (
                <div className="event" key={event.id}>
                  <h2 className="event-title">{event.title}</h2>
                  <div className="event-schedule">
                    <p><span>Day </span>{event.date}</p>
                    <p><span>Time </span>{event.time}</p>
                  </div>
                  <div className="event-description">{event.description}</div>
                </div>
              )
            })
          ) : null
        }
      </div> */}

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
              <div className="form-group">
                <textarea type="text" name="description" placeholder="Description"
                   cols="40"
                   rows="4"
                   className="description-input-field"
                   id="signup-description-input-field"
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
    </div>
  );
};

export default Modify;
