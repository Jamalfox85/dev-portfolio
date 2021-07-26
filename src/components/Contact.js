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
      "Thanks for submitting a message! I'll respond back to your message within the next 24 hours"
    );
  }

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="card-text">
          <h1>Contact Contact Contact</h1>
          <h5>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </h5>
        </div>
        <div className="card-form">
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
              <textarea
                type="textbox"
                name="message"
                id="message"
                rows="10"
                cols="30"
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
