import {RECEIVE_EVENTS, ADD_NEW_EVENT} from '../constants';


const initialState = { events: [] };

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

  case RECEIVE_EVENTS:
    newState.events = action.events;
    console.log(newState.events);
    break;
  case ADD_NEW_EVENT:
    newState.events = [ ...newState.events, action.event ];
    break;
  default:
    return state;

  }

  return newState;
}
