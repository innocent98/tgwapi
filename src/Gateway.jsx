import React from "react";
import "./global.css";
import {Zoom, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Gateway = () => {
  return (
    <div className="gateway">
      <div className="gatewayTop">
        <div className="gatewayTopImg">
          <img src="/gate.png" alt="" />
        </div>

        <div className="gatewayTopLink">
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </div>

      <div className="gateStart">
        <Slide direction="left">
          <div className="gateStartLeft">
            <h1>Get started your exciting journey with us</h1>
            <p>
              Check off the ultimate global travel checklist with your travel
              partner! make your vacation a fun, exciting and unforgettable
              experiences.
            </p>
          </div>
        </Slide>
        <Zoom>
          <div className="gateStartRight">
            <img
              src="https://www.radfordmedicalpractice.co.uk/wp-content/uploads/sites/622/2022/02/travel.jpeg"
              alt=""
            />
          </div>
        </Zoom>
      </div>

      <div className="gateDestination">
        <h1>Destination</h1>

        <div className="gateDestinationDet">
          <Slide direction="left">
            <div className="gateDestinationDetail">
              <img
                src="https://images.adsttc.com/media/images/5f35/9efe/b357/657e/fc00/0072/large_jpg/Lagos_Nigeria.jpg?1597349616"
                alt=""
              />
              <h2>Nigeria</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                mollitia impedit hic eum ad consequatur inventore.
              </p>
              <div className="detailExtra">
                <p>
                  from <span>$500</span>
                </p>
                <Link to='rental' className="link"><button className="detailBtn">Details</button></Link>
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div className="gateDestinationDetail">
              <img
                src="https://experienceafrica.today/wp-content/uploads/2021/07/DJI_0779-HDR-reduced-scaled-1.jpg"
                alt=""
              />
              <h2>Ghana</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                mollitia impedit hic eum ad consequatur inventore.
              </p>
              <div className="detailExtra">
                <p>
                  from <span>$500</span>
                </p>
                <Link to='resources' className="link"><button className="detailBtn">Details</button></Link>
              </div>
            </div>
          </Slide>
        </div>
      </div>

      <div className="bookNextTrip">
        <h1>Book Your next trip in 3 easy steps</h1>
        <div className="bookNextTripDet">
          <Slide direction="left" className="bookNextTripLeft">
            <div className="bookNextTripLeft">
              <h4>Choose Destination</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h4>Make payment</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h4>Arrive on selected date</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Slide>
          <Zoom className="bookNextTripRight">
            <div className="bookNextTripRight">
              <img
                src="https://www.nyoooz.com/uploads/hindi/nyoooz-images/travel_checklist.jpg"
                alt=""
              />
            </div>
          </Zoom>
        </div>
      </div>

      <div className="footer">copyright (c) Tribal Gateway 2022.</div>
    </div>
  );
};

export default Gateway;
