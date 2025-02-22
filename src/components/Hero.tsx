import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="section1"
      className="sc-ftTHYK gHukVr block hero-block scroll-margin-top"
      data-section-id="93hdkbdc9y9cyw6vhd77"
    >
      <div className="hero-image">
        <img 
          src="https://cdn.zarlasites.com/image/f7dae440c30f78ce3c32140ad7d906c4f4788850a8d333165d52a14afb7be103/desktop-920@2x"
          alt="Snow Path Immigration Consultancy hero image"
        />
      </div>
      <div className="width-restricted-block">
        <h1 className="heading scroll-margin-top-subitem">
          Your Path to Immigration Success Starts Here
        </h1>
        <p className="scroll-margin-top-subitem">
          Many potential immigrants find it challenging to understand and choose among the different immigration options available in Canada.
        </p>
        <p className="scroll-margin-top-subitem">
          We simplify the immigration process by providing consultation services and gaining an understanding of your objectives to guide you towards your future goals and opportunities in Canada.
        </p>
        <p className="scroll-margin-top-subitem">
          Whether you are looking to study, work, or settle in Canada, we provide personalized services tailored to your unique needs. From visa applications to citizenship assistance, we are here to guide you every step of the way. With our experience and in-depth knowledge of immigration laws and regulations, Snow Path Immigration Consultancy is committed to providing you with top-notch service and support. Let us help you make your immigration journey a smooth and successful one.
        </p>
        <button className="btn scroll-margin-top-subitem">
          Get Started Today!
        </button>
      </div>
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

export default Hero;
