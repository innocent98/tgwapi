import { useEffect, useState } from "react";
import "./global.css";
import { preferOptions, prepayOptions, securityOptions, serviceOptions } from "./options";
import {Zoom } from "react-awesome-reveal";


function Coach() {
  const [total, setTotal] = useState(0);
  const [rental, setRental] = useState(0);
  const [rentalTotal, setRentalTotal] = useState(0);
  const [carClass, setCarClass] = useState(0);
  const [carClassTotal, setCarClassTotal] = useState(0);
  const [security, setSecurity] = useState(0);
  const [securityTotal, setSecurityTotal] = useState(0);
  const [fuel, setFuel] = useState(0);
  const [fuelTotal, setFuelTotal] = useState(0);
  const [handling, setHandling] = useState(7.95);
  const [inputs, setInputs] = useState({});
  const [date, setDate] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [weekError, setWeekError] = useState(false);
  const [monthError, setMonthError] = useState(false);

  const handleSelect = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleService = () => {
    if(inputs.service === "daily"){
      setRental(80);
    }
    if(inputs.service === "weekly"){
      setRental(500);
    }
    if(inputs.service === "monthly"){
      setRental(1800);
    }
  };

  const handlePrefer = () => {
    if(inputs.prefer === "economy"){
      setCarClass(0);
    }
    if(inputs.prefer === "midclass"){
      setCarClass(30);
    }
    if(inputs.prefer === "luxury"){
      setCarClass(50);
    }
  };

  const handleSecurity = () => {
    if(inputs.security === "no"){
      setSecurity(0);
    }
    if(inputs.security === "security"){
      setSecurity(50);
    }
    if(inputs.security === "uniformed-police"){
      setSecurity(75);
    }
    if(inputs.security === "uniformed-army"){
      setSecurity(100);
    }
    if(inputs.security === "armed-police"){
      setSecurity(125);
    }
    if(inputs.security === "armed-army"){
      setSecurity(150);
    }
  };

  const handlePrepay = () => {
    if(inputs.prepay === "prepay-no"){
      setFuel(0);
    }
    if(inputs.prepay === "prepay-yes"){
      setFuel(20);
    }
  };

  useEffect(() => {
    setDate(false);
    const pick = new Date(inputs.pick).getTime();
    const drop = new Date(inputs.drop).getTime();
    let diff = 0;
    diff = drop - pick;
    const days = (diff / (1000 * 3600 * 24));
    const weeks = Math.floor(days / 7);
    const month = Math.floor(weeks / 4)
    if (pick >= drop) {
      setDateError(true);
    } else {
      setDateError(false);
    }
    if (inputs.service) {
      handleService()
      switch (inputs.service) {
        case "daily":
          setTotal(handling + rental * days + carClass * days + security * days + fuel * days);
          setRentalTotal(rental * days);
          setWeekError(false)
          setMonthError(false)
          break;

        case "weekly":
          if(weeks < 1){
            setWeekError(true)
          }else{
            setTotal(handling + rental * weeks + carClass * days + security * days + fuel * days);
            setRentalTotal(rental * weeks);
            setWeekError(false)
            setMonthError(false)
          }
          break;

        case "monthly":
          if(month < 1){
            setMonthError(true)
          }else{
            setTotal(
              handling + rental * month + carClass * days + security * days + fuel * days
            );
            setRentalTotal(rental * month);
            setWeekError(false)
            setMonthError(false)
          }
          break;

        default:
          setTotal(handling + rental * days + carClass * days + security * days + fuel * days);
          setRentalTotal(rental * days);
          setWeekError(false)
          setMonthError(false)
          break;
      }
    }
    if (inputs.prefer) {
      handlePrefer()
      switch (inputs.service) {
        case "daily":
          setTotal(handling + rental * days + carClass * days + security * days + fuel * days);
          setCarClassTotal(carClass * days);
          break;

        case "weekly":
          setTotal(handling + rental * weeks + carClass * days + security * days + fuel * days);
          setCarClassTotal(carClass * days);
          break;

        case "monthly":
          setTotal(
            handling + rental * month + carClass * days + security * days + fuel * days
          );
          setCarClassTotal(carClass * days);
          break;

        default:
          setTotal(handling + rental * days + carClass * days + security * days + fuel * days);
          setCarClassTotal(carClass * days);
          break;
      }
    }
    if (inputs.security) {
      handleSecurity()
      switch (inputs.service) {
        case "daily":
          setTotal(handling + rental * days + carClass * days + security * days + fuel * days);
          setSecurityTotal(security * days);
          break;

        case "weekly":
          setTotal(handling + rental * weeks + carClass * days + security * days + fuel * days);
          setSecurityTotal(security * days);
          break;

        case "monthly":
          setTotal(handling + rental * month + carClass * days + security * days + fuel * days);
          setSecurityTotal(security * days);
          break;

        default:
          setTotal(handling + rental * days + carClass * days + security * days + fuel * days);
          setSecurityTotal(security * days);
          break;
      }
    }
    if (inputs.prepay) {
      handlePrepay();
      switch (inputs.service) {
        case "daily":
          setTotal(handling + rental * days + carClass * days + security * days + fuel * days);
          setFuelTotal(fuel * days);
          break;

        case "weekly":
          setTotal(handling + rental * weeks + carClass * days + security * days + fuel * days);
          setFuelTotal(fuel * days);
          break;

        case "monthly":
          setTotal(handling + rental * month + carClass * days + security * days + fuel * days);
          setFuelTotal(fuel * days);
          break;

        default:
          setTotal(handling + rental * days + carClass * days + security * days + fuel * days);
          setFuelTotal(fuel * days);
          break;
      }
    }
  }, [
    handling,
    rental,
    carClass,
    security,
    fuel,
    inputs.prefer,
    inputs.prepay,
    inputs.security,
    inputs.service,
    date,
    inputs.drop,
    inputs.pick,
  ]);


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data submitted successfully");
    window.location.reload();
  };

  return (
    <div className="carRental">
      <div className="rentalTop">
        <div className="topImg">
          <img src="/TRIBAL.png" alt="" />
        </div>

        <div className="topBody">
          <h1>Car & Driver Rental</h1>
          <p>
            Thank you for the opportunity to allow us to make your visit to
            Nigeria as stress free as possible. We offer several packages to
            accommodate all your transportation needs. To customize your
            experience please select your preferences below.
          </p>
        </div>
      </div>

      <Zoom>
      <div className="form">
        <h1 className="reservation">Make a reservation</h1>
        <form className="row" onSubmit={handleSubmit}>
          <div className="col">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input type="text" name="name" required onChange={handleSelect} />
          </div>
          <div className="col">
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input type="tel" name="phone" required onChange={handleSelect} />
          </div>
          <div className="col">
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <input type="email" name="email" required onChange={handleSelect} />
          </div>
          <div className="col">
            <label htmlFor="pick" className="label">
              Date of Pickup
            </label>
            <input
              type="date"
              name="pick"
              required
              onChange={handleSelect}
              onInput={() => setDate(true)}
            />
          </div>
          <div className="col">
            <label htmlFor="drop" className="label">
              Date of Drop off
            </label>
            <input
              type="date"
              name="drop"
              required
              onChange={handleSelect}
              onInput={() => setDate(true)}
            />
            {dateError && (
              <label
                htmlFor="dateError"
                style={{ color: "red", marginTop: "8px" }}
              >
                *Drop off date must be ahead of pickup date
              </label>
            )}
          </div>
          <div className="col">
            <label htmlFor="service" className="label">
              I need Car/Driver Services for
            </label>
            <select name="service" id="service" required onChange={handleSelect} >
              <option value="">Select an option</option>
              {serviceOptions.map(s=>(
                <option value={s.value} key={s.id}>{s.label}</option>
              ))}
            </select>
            {weekError && (
              <label
                htmlFor="dateError"
                style={{ color: "red", marginTop: "8px" }}
              >
                *Days selected are not up to a week, makesure days are up to a week or select another option
              </label>
            )}
            {monthError && (
              <label
                htmlFor="dateError"
                style={{ color: "red", marginTop: "8px" }}
              >
                *Days selected are not up to a month, makesure days are up to a month or select another option
              </label>
            )}
          </div>
          <div className="col">
            <label htmlFor="prefer" className="label">
              Class of car I prefer
            </label>
            <select name="prefer" id="prefer" required onChange={handleSelect} >
              <option value="">Select an option</option>
              {preferOptions.map(p=>(
                <option value={p.value} key={p.id}>{p.label}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <label htmlFor="security" className="label">
              I will like a security officer
            </label>
            <select name="security" id="security" required onChange={handleSelect} >
              <option value="">Select an option</option>
              {securityOptions.map(s=>(
                <option value={s.value} key={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <label htmlFor="prepay" className="label">
              I would like to prepay my gas at $20/daily rate
            </label>
            <select name="prepay" id="prepay" required onChange={handleSelect} >
              <option value="">Select an option</option>
              {prepayOptions.map(p=>(
                <option value={p.value} key={p.id}>{p.label}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <label htmlFor="subtotal" className="label">
              SUBTOTAL
            </label>
            <div className="subtotal">
              <label htmlFor="rental"> Car/Driver Rental Total $</label>
              <input type="text" value={rentalTotal} readOnly />
            </div>
            <div className="subtotal">
              <label htmlFor="class"> Car Class Total $</label>
              <input type="text" value={carClassTotal} readOnly />
            </div>
            <div className="subtotal">
              <label htmlFor="security"> Security Officer Total $</label>
              <input type="text" value={securityTotal} readOnly />
            </div>
            <div className="subtotal">
              <label htmlFor="fuel"> Prepaid Fuel Total $</label>
              <input type="text" value={fuelTotal} readOnly />
            </div>
            <div className="subtotal">
              <label htmlFor="subtotal"> Handling Fees $</label>
              <input type="text" value={handling} readOnly />
            </div>
          </div>
          <div className="col">
            <div className="subtotal">
              <label htmlFor="total" className="label">
                YOUR TOTAL IS $
              </label>
              <input type="text" readOnly value={total} />
            </div>
          </div>
          <div className="col">
            <button className="submit" disabled={dateError || weekError || monthError}>
              Submit
              <span>
                <p className="tooltip">Please fix the error above</p>
              </span>
            </button>
          </div>
        </form>
        <h3>
          NB: Car comes with full tank of gas, must be returned with full tank
        </h3>
      </div></Zoom>

      <div className="footer">copyright (c) Tribal Gateway 2022.</div>
    </div>
  );
}

export default Coach;
