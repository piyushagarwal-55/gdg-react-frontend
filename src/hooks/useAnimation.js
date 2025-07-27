import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true, ...rest } = options;
  
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    ...rest
  });

  return { ref, inView };
};

export const useStaggeredAnimation = (itemCount, delay = 0.1) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * delay,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return variants;
};
