export const Contact = () => {
  return (
    <section
      id="section5"
      className="sc-gswNZR gimVZL block width-restricted-block"
    >
      <h2 className="heading" id="contact-us">
        Get in Touch
      </h2>
      <p className="contact-form-text">Need more info? Email now.</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
      <section className="sc-dkrFOg klFucW phone-number-wrapper scroll-margin-top-subitem">
        <a
          href="mailto:info@snowpathimmigration.com"
          className=""
          aria-label="contact email"
        >
          <span className="phone-icon"></span>
          <span>info@snowpathimmigration.com</span>
        </a>
      </section>
    </section>
  );
};

export default Contact;
