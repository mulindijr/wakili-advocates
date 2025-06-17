import { motion } from 'framer-motion';
import { steps } from '../../data/steps';
import * as Icons from 'react-icons/fa';

const HowItWorks = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl text-amber-600 font-semibold text-center mb-4">
        How Wakili Works
      </h2>
      <p className="text-xl text-center text-indigo-900 mb-10">
        Getting expert legal help has never been easier.
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {steps.map((step, idx) => {
          const IconComponent = Icons[step.icon];

          return (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="text-center bg-gray-50 p-5 rounded-lg border border-gray-100 shadow-md"
            >
              <div className="bg-amber-600 text-white text-3xl w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <IconComponent className="text-indigo-900 text-2xl" />
              </div>

              <h3 className="text-xl text-indigo-900 font-bold mb-3">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
export default HowItWorks;