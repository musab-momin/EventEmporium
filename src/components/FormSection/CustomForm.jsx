import React from "react";
import BlinkAnimation from "./BlinkAnimation";
import NormalBtn from "./NormalBtn";

const CustomForm = ({ frmValues, onInputChange, handleSubmit, validations, loading }) => {
  const eventsOptions = [
    "Birthdays",
    "Bachelorette",
    "Baby Showers",
    "Corporate Events",
    "Proposals",
    "High Tea Parties",
    "Anniversaries",
    "Traditional Festivities",
    "House Warming Parties",
    "Launch Events",
    "Virtual Events",
    "Award Events",
    "Makeup Artists",
    "Photographers",
    "Special Entries",
    "Dance Chreography"
  ];

  return (
    <div className="frm-sec">
      <h1 className="frm-title">Request A Quote</h1>
      <form className="frm" onSubmit={handleSubmit}>
        <div className="frm-row">
          <div className="frm-item">
            <input
              className="frm-inp"
              type="text"
              placeholder="Enter Name"
              name="name"
              value={frmValues.name}
              onChange={onInputChange}
            />
            { validations['name'] && <p className='frm-warning'>{validations.name}</p>}
          </div>
          <div className="frm-item">
            <input
              className="frm-inp"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={frmValues.email}
              onChange={onInputChange}
            />
            { validations['email'] && <p className='frm-warning'>{validations.email}</p>}
          </div>
          <div className="frm-item">
            <input
              className="frm-inp"
              type="text"
              name="contact"
              placeholder="Enter Contact"
              value={frmValues.contact}
              onChange={onInputChange}
            />
            { validations['contact'] && <p className='frm-warning'>{validations.contact}</p>}
          </div>
        </div>
        <div className="frm-row">
          <div className="frm-item frm-item-50">
            <select
              className="frm-dif-inp"
              name="type"
              value={frmValues.type}
              onChange={onInputChange}
            >
              <option defaultValue="Type of Event" disabled >Type of Event</option>
              { eventsOptions.map((event, indx) => (<option key={indx} value={event}>{event}</option>) ) }
            </select>
            { validations['type'] && <p className='frm-warning'>{validations.type}</p>}
          </div>
          <div className="frm-item frm-item-50">
            <input
              className="frm-dif-inp"
              type="date"
              name="date"
              placeholder="Date of Event"
              value={frmValues.date}
              onChange={onInputChange}
            />
            { validations['date'] && <p className='frm-warning'>{validations.date}</p>}
          </div>
        </div>
        <div className="frm-row">
          <textarea
            className="frm-area"
            name="requirements"
            rows={10}
            placeholder="Special Requirements"
            value={frmValues.requirements}
            onChange={onInputChange}
          />
        </div>
        <div className="frm-row right-align">
          <button type="submit" className="sub-btn">
            { loading ? <BlinkAnimation /> : <NormalBtn /> }
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
