import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoWhatsapp } from "react-icons/bi";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eheuh1a",
        "template_3mr6uew",
        form.current,
        "KxoXQDrjXacp4aDAt"
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
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>chanbit10@gmail.com</h5>
            <a href="mailto:chanbit10@gmail.com">Send A Message</a>
          </article>
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>chanbit10@gmail.com</h5>
            <a href="mailto:chanbit10@gmail.com">Send A Message</a>
          </article>
          <article className="contact_option">
            <BiLogoWhatsapp className="contact_option-icon" />
            <h4>WhatsAPP</h4>
            <h5>chanbit10@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=+4915774128843">
              Send A Message
            </a>
          </article>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
