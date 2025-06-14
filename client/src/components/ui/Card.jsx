import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hoverable = true,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -5, boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.15)' } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-white rounded-xl overflow-hidden shadow-md transition-shadow duration-300 ${hoverable ? 'hover:shadow-lg' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;