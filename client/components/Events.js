import React from 'react';
import Footer from './Footer';
import Modify from './Modify';
import ModalContainer from '../containers/ModalContainer'

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
    })
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
      {
        props.toggle ? (
          <Modify
            events={props.events} />
        ) : null
      }
      {/* <button className='edit-button'> */}
        <ModalContainer
          toggleClicker={props.toggleClicker} />
      {/* </button> */}

      <Footer />
    </div>
  );
};

export default Events;
