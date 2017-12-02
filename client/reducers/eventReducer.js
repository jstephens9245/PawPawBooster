import {RECEIVE_EVENTS, ADD_NEW_EVENT, TOGGLE_CLICK} from '../constants';


const initialState = { events: [], toggle: false };

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

  case RECEIVE_EVENTS:
    newState.events = action.events;
    break;
  case ADD_NEW_EVENT:
    newState.events = [ ...newState.events, action.event ];
    break;
  case TOGGLE_CLICK:
    if(action.login === "PPRedskins") {
      newState.toggle = true;
    } else {
      newState.toggle = false;
    }
    break;
  default:
    return state;

  }

  return newState;
}
