import React from 'react';


// import NavbarContainer from '../containers/NavbarContainer';

const Sponsors = (props) => {
  return (
    <div>
      <div className="sponsors-list">
        <h2 className="sponsors-title">Corporate Sponsors</h2>
        <div className="sponsor-class">
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
          {/* <p>Pictures</p> */}
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
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
