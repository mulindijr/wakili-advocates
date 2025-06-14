import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import SectionWrapper from '../ui/SectionWrapper';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" bgColor="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
              <div>
                <h4 className="font-bold text-indigo-900">{testimonial.name}</h4>
                <p className="text-amber-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            <div className="flex mt-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-amber-400" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;