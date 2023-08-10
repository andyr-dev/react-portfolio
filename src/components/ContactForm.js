import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";


function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      window.alert(`That doesn't seem like a valid email`);
      return;
    }


    alert(`Thanks ${name}! Your message has been sent!`);

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section className="contact">
      <h1 class="section-header">Need to get in contact?</h1>

      <div class="contact-wrapper">
        <form id="contact-form" class="form-horizontal" role="form">
          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleInputChange}
                required="true"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required="true"
              />
            </div>
          </div>

          <textarea
            class="form-control"
            rows="10"
            placeholder="Message"
            name={message}
            onChange={handleInputChange}
            required="true"
          ></textarea>

          <button
            class="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="Send"
            onClick={handleFormSubmit}
          >
            <div class="alt-send-button">
              <FontAwesomeIcon icon={faPaperPlane} />
              <span class="send-text">Send</span>
            </div>
          </button>
        </form>

        <div class="direct-contact-container">
          <ul class="contact-list">
            <li class="list-item">
              <i class="fa-map-marker fa-2x">
                <FontAwesomeIcon icon={faLocationDot} />
                <span class="contact-text place">Orlando, FL</span>
              </i>
            </li>

            <li class="list-item">
              <i class="fa fa-envelope fa-2x">
                <span class="contact-text email">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto: Andy3942@gmail.com" title="Send me an email">
                    Andy3942@gmail.com
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
