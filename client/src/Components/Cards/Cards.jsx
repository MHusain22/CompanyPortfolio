import React from "react";
import "./Cards.css";
import { HiLightBulb } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlinePriceCheck } from "react-icons/md";

const Cards = () => {
  return (
    <div className="cards">
      <div className="col1">
        <HiLightBulb color="#e1ca72" className="icns" size={50}/>
        <div className="cardText">
            <h1>Innovative Solutions</h1>
            <p>We Are Constantly Seeking For Fresh Challenges To Help Us Create Original Works Of Art, Software, And Services For Our Customers That Are Worthwhile Investments.</p>
        </div>
      </div>
      <div className="col1">
        <FaPeopleGroup color="#e1ca72" size={50}/>
        <div className="cardText">
            <h1>Experienced team</h1>
            <p>Through A Wide Range Of Special Services, We Guarantee Quality Focus And Excellent Client Satisfaction.</p>
        </div>
      </div>
      <div className="col1">
        <MdOutlinePriceCheck color="#e1ca72" size={50}/>
        <div className="cardText">
            <h1>Flexible pricing</h1>
            <p>From Creative Direction To Production, We All Shared The Conviction That It Was Critical To Provide Work That Was Both Effective And Economical.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
