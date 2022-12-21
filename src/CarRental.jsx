import { useEffect, useState } from "react";
import "./global.css";

function Coach() {
  return (
    <div className="carRental">
      <div className="rentalTop">
        <div className="topImg">
          <img src="/tt.jpg" alt="" />
        </div>

        <div className="topBody">
          <h1>Welcome To Tribal-Gateway Car & Driver Rental</h1>
          <p>
            Thank you for the opportunity to allow us to make your visit to
            Nigeria as stress free as possible. We offer several packages to
            accommodate all your transportation needs. To customize your
            experience please select your preferences below.
          </p>
        </div>
      </div>

      <div className="form">
        <form className="row">
          <div className="col">
            <label htmlFor="name" className="label">Name</label>
            <input type="text" />
          </div>
          <div className="col">
            <label htmlFor="phone" className="label">Phone</label>
            <input type="number" />
          </div>
          <div className="col">
            <label htmlFor="email" className="label">Email Address</label>
            <input type="email" />
          </div>
          <div className="col">
            <label htmlFor="pick" className="label">Date of Pickup</label>
            <input type="date" />
          </div>
          <div className="col">
            <label htmlFor="drop" className="label">Date of Dropoff</label>
            <input type="date" />
          </div>
          <div className="col">
            <label htmlFor="service" className="label">I need Car/Driver Services for </label>
            <div className="radio">
              <input type="radio" id="daily" name="service" />
              <label htmlFor="daily">Daily $80/day</label>
            </div>
            <div className="radio">
              <input type="radio" id="weekly" name="service" />
              <label htmlFor="weekly">Weekly $500/wk</label>
            </div>
            <div className="radio">
              <input type="radio" id="monthly" name="service" />
              <label htmlFor="monthly">Monthly $1800/mo</label>
            </div>
          </div>
          <div className="col">
            <label htmlFor="prefer" className="label">Class of car I prefer </label>
            <div className="radio">
              <input type="radio" id="economy" name="prefer" />
              <label htmlFor="economy">Economy</label>
            </div>
            <div className="radio">
              <input type="radio" id="midclass" name="prefer" />
              <label htmlFor="midclass">Mid-Class +20/day</label>
            </div>
            <div className="radio">
              <input type="radio" id="luxury" name="prefer" />
              <label htmlFor="luxury">Luxury +40/day</label>
            </div>
          </div>
          <div className="col">
            <label htmlFor="security" className="label">I will like a security officer </label>
            <div className="radio">
              <input type="radio" id="no" name="security" />
              <label htmlFor="no">No</label>
            </div>
            <div className="radio">
              <input type="radio" id="yes" name="security" />
              <label htmlFor="yes">Yes +40/day</label>
            </div>
            <div className="radio">
              <input type="radio" id="uniformed" name="security" />
              <label htmlFor="uniformed">Uniformed +60/day</label>
            </div>
            <div className="radio">
              <input type="radio" id="armed" name="security" />
              <label htmlFor="armed">Armed +100/day </label>
            </div>
          </div>
          <div className="col">
            <label htmlFor="prepay" className="label">
              I would like to prepay my gas at $20/daily rate
            </label>
            <div className="radio">
              <input type="radio" id="prepay-no" name="prepay" />
              <label htmlFor="prepay-no">No</label>
            </div>
            <div className="radio">
              <input type="radio" id="prepay-yes" name="prepay" />
              <label htmlFor="prepay-yes">Yes</label>
            </div>
          </div>
          <div className="col">
            <label htmlFor="subtotal" className="label">SUBTOTAL</label>
            <div className="subtotal">
              <label htmlFor="rental"> Car/Driver Rental Total $</label>
              <input type="text" value="" readOnly />
            </div>
            <div className="subtotal">
              <label htmlFor="class"> Car Class Total $</label>
              <input type="text" value="" readOnly />
            </div>
            <div className="subtotal">
              <label htmlFor="security"> Security Officer Total $</label>
              <input type="text" value="" readOnly />
            </div>
            <div className="subtotal">
              <label htmlFor="fuel"> Prepaid Fuel Total $</label>
              <input type="text" value="" readOnly />
            </div>
            <div className="subtotal">
              <label htmlFor="subtotal"> Handling Fees $</label>
              <input type="text" value="" readOnly />
            </div>
          </div>
          <div className="col">
            <div className="subtotal">
              <label htmlFor="total" className="label">YOUR TOTAL IS $</label>
              <input type="text" readOnly />
            </div>
          </div>
        </form>
        <h3>
          NB: Car comes with full tank of gas, must be returned with full tank
        </h3>
      </div>
      
      <div className="footer">copyright (c) Tribal Gateway 2022.</div>
    </div>
  );
}

export default Coach;
