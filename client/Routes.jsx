import React from 'react';
import store from './store';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

//containers
import HomepageContainer from './containers/HomepageContainer';

//action-creators
import {checkLoginStatus} from './actions/user';

//components
import Index from './components/Index';
import Sponsers from './components/Sponsers';
import About from './components/AboutUs';
import Events from './components/Events';


//onEnters
function indexEnter() {
  store.dispatch(checkLoginStatus());
}

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Index} onEnter={indexEnter}>
       <IndexRoute component={HomepageContainer} />
       <Route path="sponsers" component={Sponsers} />
       <Route path="aboutus" component={About} />
       <Route path="events" component={Events} />
     </Route>
    </Router>
  );
}
