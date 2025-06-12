import { FaBalanceScale, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "home" },
        { name: "Practice Areas", href: "practice-areas" },
        { name: "Find a Lawyer", href: "our-lawyers" },
        { name: "About Us", href: "about-us" },
        { name: "Contact", href: "contact" },
      ],
    },
    {
      title: "Practice Areas",
      links: [
        { name: "Criminal Law", href: "#" },
        { name: "Family Law", href: "#" },
        { name: "Corporate Law", href: "#" },
        { name: "Real Estate Law", href: "#" },
        { name: "Intellectual Property", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-indigo-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <FaBalanceScale className="text-3xl text-amber-500 mr-2" />
              <span className="text-2xl font-bold text-white">Wakili</span>
              <span className="text-2xl font-bold text-amber-500">Advocates</span>
            </div>
            <p className="text-gray-200 mb-6">
              Connecting clients with Kenya's top legal professionals since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-amber-500 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-200 hover:text-amber-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-200 hover:text-amber-500 transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-200 hover:text-amber-500 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      onClick={() => scrollToSection(link.href.replace('#', ''))} 
                      className="text-gray-200 hover:text-amber-500 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-200 mb-4">Subscribe to our newsletter for legal insights and updates.</p>
            <form>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-slate-500 text-white p-3 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <button 
                  type="submit"
                  className="bg-amber-500 text-dark-blue font-bold py-3 px-4 rounded-r-lg hover:bg-amber-600 cursor-pointer transition-colors"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 text-center text-gray-200">
          <p>© 2010 - {currentYear} Wakili Advocates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;