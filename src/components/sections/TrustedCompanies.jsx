import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useAnimation.jsx';

const TrustedCompanies = () => {
  const { ref, inView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#fff] dark:bg-slate-900 py-16 px-4 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-2xl md:text-3xl font-normal text-[#CFCFDE] dark:text-gray-400 font-inter transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Trusted by 5,000+ Companies Worldwide
          </motion.h2>
        </div>

    
        <motion.div 
          className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-10 lg:gap-14 opacity-30 dark:opacity-40"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            { src: "/google.png", alt: "Google" },
            { src: "/netflix.png", alt: "Netflix" },
            { src: "/airbnb.png", alt: "Airbnb" },
            { src: "/amazon.png", alt: "Amazon" },
            { src: "/facebook.png", alt: "Facebook" },
            { src: "/grab.png", alt: "Grab" },
          ].map(({ src, alt }) => (
            <motion.div 
              key={alt} 
              className="flex items-center justify-center h-12 flex-shrink-0"
              variants={itemVariants}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={src}
                alt={alt}
                className="h-6 md:h-7 lg:h-8 object-contain text-[#CFCFDE] filter dark:brightness-75"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
