import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Express Entry",
      description: "Assistance with Federal Skilled Worker, Federal Skilled Trades, and Canadian Experience Class applications.",
      icon: "🌟"
    },
    {
      title: "Study Permits",
      description: "Guidance for international students seeking to study at Canadian institutions.",
      icon: "📚"
    },
    {
      title: "Work Permits",
      description: "Support for temporary work permits and LMIA applications.",
      icon: "💼"
    },
    {
      title: "Family Sponsorship",
      description: "Help with sponsoring spouses, children, and other family members.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Business Immigration",
      description: "Assistance for entrepreneurs and investors looking to start or buy businesses in Canada.",
      icon: "🏢"
    },
    {
      title: "Citizenship Applications",
      description: "Support throughout the Canadian citizenship application process.",
      icon: "🍁"
    }
  ];

  return (
    <section id="section3" className="kind-services">
      <div className="width-restricted-block">
        <h2 className="heading" id="services">
          Our Immigration Services
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
