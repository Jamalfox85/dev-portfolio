import React from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_48elr08",
        "template_i6padgp",
        e.target,
        "user_06N5hxIwPewVQkIg9ERf6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(
      "Thanks for submitting a message! I'll respond back within the next 24 hours"
    );
  }

  return (
    <div className="contact" id="contact">
      <div className="section-tag">Contact Me!</div>
      <div className="contact-wrapper">
        <div className="planet-img"></div>
        <div className="card-text-wrapper">
          <h1 className="card-text">
            Interested in what you've seen so far? <br /> <br />
            Let's Connect!
          </h1>
        </div>
        <div className="card-form-wrapper">
          <form className="contact-form" onSubmit={sendEmail}>
            <label htmlFor="subject">
              Subject:
              <input type="text" name="subject" id="subject" />
            </label>
            <label htmlFor="name">
              Name:
              <input type="text" name="name" id="name" />
            </label>
            <label htmlFor="email">
              Email:
              <input type="text" name="email" id="email" />
            </label>
            <label htmlFor="message">
              Message:
              <textarea type="textbox" name="message" id="message" rows="10" />
            </label>
            <div className="contact-submit-btn">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
