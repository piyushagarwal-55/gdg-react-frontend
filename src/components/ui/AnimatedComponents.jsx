import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useAnimation.jsx';
import PropTypes from 'prop-types';

export const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  ...props 
}) => {
  const { ref, inView } = useScrollAnimation();
  
  const directionVariants = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: -50 },
    right: { x: 50 },
    scale: { scale: 0.9 }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction]
      }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1
      } : {
        opacity: 0,
        ...directionVariants[direction]
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredContainer = ({ 
  children, 
  className = "", 
  staggerDelay = 0.1,
  ...props 
}) => {
  const { ref, inView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredItem = ({ 
  children, 
  className = "", 
  direction = "up",
  ...props 
}) => {
  const directionVariants = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: -30 },
    right: { x: 30 },
    scale: { scale: 0.9 }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      ...directionVariants[direction]
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({ 
  children, 
  className = "", 
  intensity = 10,
  duration = 3,
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensity, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const HoverCard = ({ 
  children, 
  className = "", 
  scale = 1.05,
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale,
        y: -5,
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// PropTypes
AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right', 'scale']),
};

StaggeredContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  staggerDelay: PropTypes.number,
};

StaggeredItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right', 'scale']),
};

FloatingElement.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  intensity: PropTypes.number,
  duration: PropTypes.number,
};

HoverCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  scale: PropTypes.number,
};
