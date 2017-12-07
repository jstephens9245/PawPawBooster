import React from 'react';
import {Link} from 'react-router';
import Footer from './Footer'

// import NavbarContainer from '../containers/NavbarContainer';

const Signup = (props) => {
  return (
    <div>
      <div className="signup-list">
        <div className="signup-football">
          <Link to="http://www.signupgenius.com/go/4090c4da4aa2faafc1-football1"
          target="_blank" className="signup-style">
            Fall
          </Link>
        </div>

        <div className="signup-basketball">
          <Link to=""
          target="_blank" className="signup-style">
            Winter
          </Link>
        </div>

        <div className="signup-baseball">
          <Link to=""
          target="_blank" className="signup-style">
            Spring
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
