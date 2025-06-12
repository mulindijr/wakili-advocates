import { motion } from 'framer-motion';
import heroImage from '../../assets/images/hero.jpg';
import SearchBar from '../ui/SearchBar';

const Hero = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-20"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <motion.div
                className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-white"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="max-w-5xl">
                    <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Expert Legal Solutions Tailored to Your Needs
                    </h1>
                    <p className="text-lg text-center md:text-xl mb-8 opacity-90">
                        Connect with top-rated advocates in your area for personalized legal guidance and representation.
                    </p>                                      
                    <SearchBar />                    
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;