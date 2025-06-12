import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { servicesData } from '../../data/services';
import * as Icons from 'react-icons/fa';

const Services = () => {
  const cardHover = {
    hover: { 
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <SectionWrapper id="practice-areas" bgColor="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          const IconComponent = Icons[service.icon];
          return (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={cardHover}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                  <IconComponent className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2 text-gray-700">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Icons.FaCheck className="text-amber-600 mt-1 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Services;