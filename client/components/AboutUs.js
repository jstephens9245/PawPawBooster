import React from 'react';
import Footer from './Footer'

const About = (props) => {
  return (
    <div>
      <div className="about-us-container">
        <h2 className="aboutus-title">Paw Paw Redskins Athletic Booster Inc.</h2>
          <div className="shadow-box">
            <h3>What are we?</h3>
            <p className="aboutus-paragraphs" >
              A non-profit, 501c3 volunteer organization, made up of parents, coaches
              and community members that work to compliment the high school athletic
              department. The Booster Club works to enhance the facilities, equipment
              and opportunities for our student athletes and coaches.
            </p>
          </div>
          <div className="shadow-box">
            <h3>What do we do?</h3>
            <p className="aboutus-paragraphs" >
              The following are a few examples of what the Booster Club provides funds
              for: coaching clinics, team camps, upgrades to sports facilities and
              possible needed equipment and much more!
            </p>
          </div>
          <div className="shadow-box">
            <h3>What do we need from you?</h3>
            <p className="aboutus-paragraphs" >
              We need your help! We are in need of more parent involvement. A
              parent’s level of involvement is completely up to you! Your willingness
              to become involved with the Booster Club would be greatly appreciated
              no matter how big or small. We are looking for parents to assist with
              concession stands and get involved with fund raising possibilities.
            </p>
          </div>
          <div className="shadow-box">
            <h3>Why should you get involved?</h3>
            <p className="aboutus-paragraphs" >
              Participating in the Boosters is a great way to volunteer your time to
              provide Paw Paw athletes, coaches and sports programs with additional
              opportunities that they may not be able to experience otherwise! It’s
              also a great way to meet more of the parents your kids go to school
              with and have some fun and laughs at the same time! Another perk for
              getting involved with the Boosters, if you work a minimum of 10
              athletic events, you can receive a free sports pass the following year.
              A person receiving a complimentary pass can apply $55 (cost of a
                single pass) towards the purchase of a family pass.
              </p>
          </div>
          <div className="shadow-box">
            <h3>When do we meet? Anyone is welcome to attend a meeting!</h3>
            <p className="aboutus-paragraphs" >
              Meetings are held on the first Monday of each month unless it falls
              on a holiday, in the high school teacher’s lounge @ 6:30. Meeting
              information is typically located in the Paw Paw High School daily
              announcements. The following is contact information for the officers
              on the Booster Board. Feel free to contact any of them if you have
              additional questions or if you would like more information about
              getting involved.
            </p>
          </div>
      </div>
      <h2 className="council-title">Council Members</h2>
      <div className="booster-council">
        <p className="council-member">Chairperson</p>
        <p className="council-member">Missy Burch</p>
        <p className="council-member">mburch@vbisd.org</p>

        <p className="council-member">Vice-Chairperson</p>
        <p className="council-member">Ashley Bowen</p>
        <p className="council-member">jashli31@hotmail.com</p>

        <p className="council-member">Treasurer</p>
        <p className="council-member">Trish Downard</p>
        <p className="council-member">trish.downard@gmail.com</p>

        <p className="council-member">Publicity Chairperson</p>
        <p className="council-member">Brenda Atkinson</p>
        <p className="council-member">Brenda@bluefrogfundraising.com</p>

        <p className="council-member">Concession Stand Trustee</p>
        <p className="council-member">Kellee Davis</p>
        <p className="council-member">clarksfamily@hotmail.com</p>

        <p className="council-member">Fundraiser Chairperson</p>
        <p className="council-member">Andrea Toliver</p>
        <p className="council-member">jtoliver_andrea@yahoo.com</p>

        <p className="council-member">Fundraiser Chairperson</p>
        <p className="council-member">Janet LeForge</p>
        <p className="council-member" style={{marginBottom: "2em"}}>Jfroe67001@aol.com</p>

      </div>
      <Footer />
    </div>
  );
};

export default About;
