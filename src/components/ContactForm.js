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
  const serviceId = `service_0ju38ha`;
  const templateId = `template_3235ryf`;
  const apiKey = `29IGUms4VTl81fwou`;

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

    emailjs
      .sendForm(serviceId, templateId, form.current, apiKey)

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert(`Thanks ${name}! Your message has been sent!`);
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
            <li className="d-flex align-items-center contact-text">
              <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
              <p className="m-0">---Orlando, FL</p>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope">
                <span className="contact-text ">
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
