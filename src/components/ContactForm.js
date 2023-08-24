import React, { useState, useRef } from "react";
import { validateEmail } from "../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import emailjs from "@emailjs/browser";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const serviceId =  process.env.REACT_APP_SERVICE_ID
  const templateId = process.env.REACT_APP_TEMPLATE_ID
  const apiKey = process.env.REACT_APP_API_KEY

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      window.alert(`That doesn't seem like a valid email`);
      return;
    }

    alert(`Thanks ${name}! Your message has been sent!`);

    emailjs
      .sendForm(
       serviceId,
        templateId,
        form.current,
        apiKey
      )
      
      .then(
        console.log( serviceId, templateId, apiKey),
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section className="contact">
      <h1 className="section-header">Need to get in contact?</h1>

      <div className="contact-wrapper">
        <form
          ref={form}
          id="contact-form"
          className="form-horizontal"
          role="form"
        >
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="Message"
            name="message"
            value={message}
            onChange={handleInputChange}
            required
          ></textarea>

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="Send"
            onClick={sendEmail}
          >
            <div className="alt-send-button">
              <FontAwesomeIcon icon={faPaperPlane} />
              <span className="send-text">Send</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa-map-marker fa-2x">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="contact-text place">Orlando, FL</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text email">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto: Me@Andyr.dev" title="Send me an email">
                    Me@Andyr.dev
                  </a>
                </span>
              </i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Form;
