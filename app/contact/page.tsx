import '../../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="section-title">Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
<<<<<<< HEAD
          <p>We would love to hear from you! Whether you have a question about our courses, admissions, or anything else, our team is ready to answer all your questions.</p>
=======
          <p>We&apos;d love to hear from you! Whether you have a question about our courses, admissions, or anything else, our team is ready to answer all your questions.</p>
>>>>>>> 7cce3aaf205c5770fae64b0d2311ec4b96774904
          <ul>
            <li>Email: info@smithyderabad.edu</li>
            <li>Phone: +91 123 456 7890</li>
            <li>Address: 123 Education Street, Hyderabad, Pakistan, </li>
          </ul>
        </div>
        <form className="contact-form">
          <h2>Send us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}
