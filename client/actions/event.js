import axios from 'axios';

import {RECEIVE_EVENTS, ADD_NEW_EVENT, TOGGLE_CLICK} from '../constants';

export const receiveAllEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events,
});
export const toggleClick = (login) => ({
  type: TOGGLE_CLICK,
  login,
});

export const addNewEvent= (event) => ({
  type: ADD_NEW_EVENT,
  event
});

export const getAllEvents = () => {
  return dispatch => {
    return axios.get('/api/event')
      .then((res) => res.data)
      .then((events) => {
        // console.log(events.events[0]);
        dispatch(receiveAllEvents(events.events[0]));
      });
  };
};


export const createEvent = (date, time, title, description) => {
  console.log({date, time, title, description});
  return dispatch => {
    return axios.post('/api/event', {date, time, title, description})
      .then((res) => res.data)
      .then((event) => {
        dispatch(addNewEvent(event));
      });
  };
};

export const deleteEvent = (eventId) => (dispatch) => {
  return axios.delete(`/api/event/${eventId}`)
    .then((res) => res.data)
    .then((event) => {
      dispatch(getAllEvents());
    });
};
