import React from 'react';
import {Link} from 'react-router';

const Navbar = (props) => {
  return (
    <div>
    <nav className="navbar navbar navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header" id='navHeader' >
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
            aria-expanded={props.aria} aria-controls="navbar" onClick={() => { props.expandNav(); }}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
            <a className='navbar-brand' href='/'>
              <div>
                <span className="nav-tion">Paw Paw Boosters</span>
              </div>
            </a>
          </div>

          <div id='navbar' className={props.navClass} aria-expanded={props.aria}>
            <ul className="nav navbar-nav" onClick={() => { props.newPage(); }}>
              <li><Link to="http://www.signupgenius.com/go/4090c4da4aa2faafc1-football1" target="_blank">Sign Up</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/assets/pawpaw_bilaws.pdf" target="_blank">Bi-laws</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
};
export default Navbar;
