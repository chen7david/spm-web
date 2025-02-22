import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="section2" className="kind-about">
      <div className="width-restricted-block">
        <h2 className="heading" id="about-us">
          About Snow Path Immigration Consultancy
        </h2>
        <div className="about-content">
          <p>
            Snow Path Immigration Consultancy is dedicated to helping individuals and families
            navigate the complex Canadian immigration system. With our expertise and
            personalized approach, we strive to make your immigration journey as smooth as
            possible.
          </p>
          <p>
            Our team of experienced consultants understands that each client's situation is
            unique. We take the time to understand your specific needs and goals, providing
            tailored solutions that align with your immigration objectives.
          </p>
          <p>
            We pride ourselves on our:
          </p>
          <ul>
            <li>Professional and personalized service</li>
            <li>Extensive knowledge of Canadian immigration laws and procedures</li>
            <li>Commitment to client success</li>
            <li>Transparent and ethical practices</li>
            <li>Ongoing support throughout your immigration journey</li>
          </ul>
          <p>
            Let us help you achieve your Canadian immigration goals with confidence and peace
            of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
