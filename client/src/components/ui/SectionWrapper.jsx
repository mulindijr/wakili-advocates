const SectionWrapper = ({ id, bgColor, children }) => {
  const sectionTitles = {
    'about-us': { subtitle: "WHO WE ARE", title: "Wakili Advocates LLP" },
    'practice-areas': { subtitle: "OUR SPECIALTIES", title: "Legal Practice Areas" },
    'our-lawyers': { subtitle: "MEET OUR TEAM", title: "Our Legal Experts" },
    testimonials: { subtitle: "CLIENT TESTIMONIALS", title: "What Our Clients Say" },
    contact: { subtitle: "GET IN TOUCH", title: "Contact Wakili Advocates" }
  };

  return (
    <section id={id} className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold">{sectionTitles[id]?.subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mt-2 mb-4">
            {sectionTitles[id]?.title}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;