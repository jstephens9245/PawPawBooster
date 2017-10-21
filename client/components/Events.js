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

// console.log('num1', num1, a);
// console.log('num2', num2, b);
// console.log('num', num, (num1 - num2));
// console.log('--------------------');

function add(a, b) {
  return Number(a) + Number(b);
}

function dateConverter(dateString) {
  let num = dateString.split('-').reduce(add, 0);
  return num;
}

function timeConverter(dateString) {
  let pm = dateString.split(':')[1].substr(2);
  let hour = Number(dateString.split(':')[0]);
  let min = Number(dateString.split(':')[1].slice(0, 2));
  if((pm === 'pm') && (hour !== 12)) {
    hour += 12;
    return [hour, min].join('.');
  }
  return [hour, min].join('.');
}

const Events = (props) => {

  let sortedEventArray = []
  if(props.events.length) {
    props.events.sort(function (a, b) {
      let date = (
        dateConverter(a['date']) - dateConverter(b['date'])
      );
      let time = (
        parseFloat(timeConverter(a['time'])) -
        parseFloat(timeConverter(b['time']))
      );
      if (date !== 0) {
        return date;
      }
      return time;
      // let result = (date + time);
      // console.log("date", date);
      // console.log("time", time);
      // console.log("result", result);
      // console.log("-----------------");
      // return result;
    })
    // props.events.sort(function (a, b) {
    //   // let num1 = parseFloat([dateConverter(a['date']), timeConverter(a['time'])].join('.'));
    //   // let num2 = parseFloat([dateConverter(b['date']), timeConverter(b['time'])].join('.'));
    //   return num;
    // })
};
  return (
    <div>

      <div className="event-list">
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
      <Footer />
    </div>
  );
};

export default Events;
