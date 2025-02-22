import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "International Student",
      text: "Snow Path Immigration made my dream of studying in Canada a reality. Their guidance throughout the student visa process was invaluable.",
      location: "Vancouver, BC"
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Business Owner",
      text: "The team's expertise in business immigration helped me establish my company in Canada. Their professional approach and attention to detail were exceptional.",
      location: "Toronto, ON"
    },
    {
      name: "Elena Popov",
      role: "Skilled Worker",
      text: "Thanks to Snow Path, my Express Entry application was successful. They guided me through every step and made the process much less stressful.",
      location: "Montreal, QC"
    }
  ];

  return (
    <section id="section4" className="testimonials-block">
      <div className="width-restricted-block">
        <h2 className="heading" id="testimonials">
          Client Testimonials
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h3>{testimonial.name}</h3>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
