import React from 'react';
import {Link} from 'react-router';

// import NavbarContainer from '../containers/NavbarContainer';

const Signup = (props) => {
  return (
    <div>
      <div className="signup-list">
        <div className="signup-football">
          <Link to="http://www.signupgenius.com/go/4090c4da4aa2faafc1-football1" target="_blank">
            <a className="link-style" >Football</a>
          </Link>
        </div>

        <div className="signup-basketball">
          <Link to="http://www.signupgenius.com/go/4090c4da4aa2faafc1-football1" target="_blank">
            <a className="link-style" >Basketball</a>
          </Link>
        </div>

        <div className="signup-baseball">
          <Link to="http://www.signupgenius.com/go/4090c4da4aa2faafc1-football1" target="_blank">
            <a className="link-style" >Baseball</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
