import React from "react";
import "./Contact.css";
import Head from "../UI/Head/Head";
import Button from "../UI/Button/Button"

const Contact = () => {
  return (
    <div className="ContactMain">
      <Head>Contact</Head>
      <div className="contact">
        <div className="frame">
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            style={{ filter: " grayscale(1) contrast(1) opacity(0.25)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777314.872995804!2d68.6848901800457!3d22.399496801005473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1705999731578!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form">
          <h3>Contact Us</h3>
          <p>For ant query u can contact us on Mail</p>
          <div className="inner">
            <label htmlFor="">Email</label>
            <input  type="email" name="" placeholder="abc@gmail.com" id="" />
            <label htmlFor="">Message</label>
            <textarea cols={40} rows={4} name="" placeholder="type here" id=""></textarea>
            <a href="mailto:husain.vijapura@gmail.com">Send Mail</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
