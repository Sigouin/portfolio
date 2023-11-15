import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_j7ui7dk",
      "template_u5q7rtl",
      form.current,
      "B_Z_lgWmIDNeEb4cE"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>matt@sigouin.codes</h5>
            <a
              href="mailto:matt@sigouin.codes"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={10}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
