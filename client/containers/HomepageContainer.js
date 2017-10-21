import React, { Component } from 'react';
import { Link } from 'react-router';
import Typist from 'react-typist';
import Sponsers from '../components/Sponsers'

export default class HomePageContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="homepage-container">

        <div className="homepage-main-image-container">
          <img className="homepage-main-image" src="/assets/pawpawphoto.jpg"></img>
          <div className="main-slogan">
          <Typist avgTypingDelay={130}>
          WORKING. BUILDING. TOGETHER.
          </Typist>
          </div>
          <div className="main-mini-desc"> Your collaboration makes us Great
          </div>
          <div className="main-signup-button-container">
            <Link to="/signup">
            <button type="button" className="main-signup-button">GET STARTED</button>
            </Link>
          </div>

          {/* <div className="postit-view">
            <div className="postit yellow">
              <img className="bulb-img" src="/assets/bulb.png" />
            </div>
            <div className="postit lightyellow">
              N
            </div>
            <div className="postit brightgreen">
              O
            </div>
            <div className="postit pink">
              T
            </div>
            <div className="postit yellow">
              I
            </div>
            <div className="postit blue">
              O
            </div>
            <div className="postit green">
              N
            </div>
          </div> */}
        </div>

        <div className="border-line"/>

        <div className="desc-container">
            <div className="left-desc">
              <div className="left-desc-content">
                <div className="left-desc-title">
                  Paw Paw Boosters
                </div>
                 Complementing the Athletic Department by supporting,
                 encouraging and promoting athletic programs at Paw Paw Public
                 Schools while initiating and supporting worthwhile fundraising
                 projects for the sole purpose of enhancing the facilities,
                 equipment and programs sponsored by the Athletic Department.

              </div>

              <div className="volunteer">
                <p className="volunteer-title">Volunteer</p>
                <p>
                  2017-2018 - If you might be  interested in volunteering to help
                  on one of our committees , please contact us at PawPawBoosters@gmail.com
                  or Sign Up Now!
                </p>
              </div>
            </div>

            <div className="right-desc">
              <img className="right-desc-img" src="/assets/redskinlogo.png" />
            </div>
        </div>

        <div className="sponsors-list">
          <h2 className="sponsors-title">Corporate Sponsors</h2>
          <p className="sponsors-title-text"> - The people that have made this possible</p>
          {/* <div className="sponsor-class">
            <h3>Gold: $1000</h3>
            <p>Advantage Roofing and Exteriors</p>
            <p>Lounsbury Excavating, Inc</p>
            <p>Lakes and Country Rea l Estate</p>
            <p>Honor Credit Union</p>
            <p>Tapper Automotive</p>
            <p>Coca-Cola</p>
            <p>Meijer</p>
            <p>Walmart</p>
            <p>Family Fare</p>
            <p>Hiemstra Optical</p>
            <p>Newell Insurance NEW SPONSOR</p>
          </div>

          <div className="sponsor-class">
            <h3>Silver: $750</h3>
            <p>Maple Lake Chiropractic</p>
            <p>National Guard – Jason Brautigam</p>
            <p>LaCantina</p>
            <p>HotShotz swap for Reverse Raffle</p>
            <p>Pictures</p>
          </div>

          <div className="sponsor-class">
            <h3>Bronze: $350</h3>
            <p>Subway</p>
            <p>Premier Catering Swap for R.Raffle/TGIS</p>
            <p>Foune Well</p>
            <p>Red’s Rootbeer</p>
            <p>Great Lake Pondscapes</p>
            <p>Brookside Farms</p>
            <p>McDonalds</p>
            <p>Paw Paw Rental</p>
            <p>Rainbow Lanes</p>
          </div> */}
          <Sponsers />
        </div>
        <div className="team-desc">
          Made by Joe Stephens
        </div>

      </div>
    );
  }
}
