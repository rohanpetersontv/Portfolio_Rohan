import { useState } from "react"
import "./Contact.css"
import { motion } from "framer-motion";
import SectionAnimation from "../animations/SectionAnimation";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    
    // Fallback: mailto functionality for frontend-only form
    try {
      const { name, subject, message } = formData;
      const mailtoLink = `mailto:rohanpetersontv@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoLink;
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <SectionAnimation>
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="section-header contact-header">
            <span className="tech-label">07 / COMMUNICATION</span>
            <h2 className="section-heading">Initialize Contact</h2>
          </div>
          <p className="contact-description">
            <span className="prompt-arrow">&gt;</span> Awaiting input. Submit a transmission to collaborate or inquire.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ENTER_NAME"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ENTER_EMAIL"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="ENTER_SUBJECT"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="TRANSMIT_MESSAGE"
                rows="6"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-button"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "PROCESSING..." : "SEND_TRANSMISSION"}
            </button>

            {status === "success" && (
              <p className="success-message">[ SUCCESS ] Email client opened for transmission.</p>
            )}
            {status === "error" && (
              <p className="error-message">[ ERROR ] {errorMessage}</p>
            )}
          </form>
        </div>
      </section>
    </SectionAnimation>
  );
}

export default Contact;