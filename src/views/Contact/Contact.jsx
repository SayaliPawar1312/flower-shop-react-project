import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"; 
import BodyContainer from "../../components/BodyContainer/BodyContainer"; 

function Contact() {
  return (
    <div className="contact">
      <Navbar active="contact" />
      
      <BodyContainer>
        <h1 className="contact-title">Contact Us </h1>
        <p className="contact-subtitle">Get in touch with us!</p>

        <div className="contact-container">

        
          <div className="contact-card">
            <h3> Address</h3>
            <p>Mumbai, Maharashtra</p>

            <h3> Phone</h3>
            <p>+91 8788989941</p>

            <h3>Email</h3>
            <p>blossomshop@gmail.com</p>
          </div>

          {/* Contact Form */}
          <div className="contact-card">
            <h3>Send Message </h3>

            <input type="text" placeholder="Your Name" className="input-box" />
            <input type="email" placeholder="Your Email" className="input-box" />
            <textarea placeholder="Your Message" className="input-box"></textarea>

            <button className="send-btn">Send</button>
          </div>

        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Contact;