import React from 'react';
import store from './store';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

//containers
import HomepageContainer from './containers/HomepageContainer';
import EventContainer from './containers/EventContainer';

//action-creators
import {checkLoginStatus} from './actions/user';
import {getAllEvents} from './actions/event';

//components
import Index from './components/Index';
import Sponsers from './components/Sponsers';
import About from './components/AboutUs';
import Signup from './components/Signup';
import Events from './components/Events';


//onEnters
// function indexEnter() {
//   store.dispatch(checkLoginStatus());
// }

function eventsOnEnter(nextRouterState) {
  store.dispatch(getAllEvents());
}

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Index} >
       <IndexRoute component={HomepageContainer} />
       <Route path="sponsers" component={Sponsers} />
       <Route path="aboutus" component={About} />
       <Route path="events" component={EventContainer} />
       <Route path="signup" component={Signup} />
     </Route>
    </Router>
  );
}
