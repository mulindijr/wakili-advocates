import { motion } from 'framer-motion';
import { FaShieldAlt, FaLightbulb, FaHandshake } from 'react-icons/fa';
import SectionWrapper from '../ui/SectionWrapper';
import heroImage from '../../assets/images/hero.jpg';

const About = () => {
  return (
    <SectionWrapper id="about-us" bgColor="bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">Your Trusted Legal Partners</h3>
          <p className="text-gray-700 mb-6">
            Established in 2010, Wakili Advocates has grown to become one of Kenya's premier law firms, offering comprehensive legal services to both corporate and individual clients.
          </p>
          <p className="text-gray-700 mb-6">
            Our firm combines traditional values with innovative approaches to deliver exceptional legal solutions. We pride ourselves on building long-term relationships with our clients based on trust, excellence, and outstanding service.
          </p>
          <p className="text-gray-700 mb-8">
            With offices in Nairobi and Mombasa, we serve clients across East Africa, offering expertise in both Kenyan and regional legal frameworks.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="bg-amber-100 p-3 rounded-full mr-3">
                <FaShieldAlt className="text-amber-600" />
              </div>
              <span className="font-medium">Ethical Practice</span>
            </div>
            <div className="flex items-center">
              <div className="bg-amber-100 p-3 rounded-full mr-3">
                <FaLightbulb className="text-amber-600" />
              </div>
              <span className="font-medium">Innovative Solutions</span>
            </div>
            <div className="flex items-center">
              <div className="bg-amber-100 p-3 rounded-full mr-3">
                <FaHandshake className="text-amber-600" />
              </div>
              <span className="font-medium">Client Focused</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <motion.div 
            className="bg-white p-2 shadow-xl rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={heroImage}
              alt="Law firm meeting" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;