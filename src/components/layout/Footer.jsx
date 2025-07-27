import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useAnimation.jsx';

const Footer = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <footer className="bg-[#1C1E53] dark:bg-slate-950 py-10 px-4 transition-colors duration-300" ref={ref}>
      <div className="max-w-4xl mx-auto text-center text-white space-y-8">
        <motion.div 
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.a 
            href="/" 
            className="relative flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 bg-[#23BDEE] rounded-lg rotate-45 flex-shrink-0 z-10" />
            <span className="-ml-8 text-2xl font-bold text-white z-20">
              Skilline
            </span>
          </motion.a>

          <div className="w-px h-6 bg-white/30 mx-2" />

          <div className="text-left">
            <p className="text-sm text-white/60 leading-tight">
              Virtual Class <br /> for Zoom
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="text-white font-medium text-sm mb-3">
            Subscribe to get our Newsletter
          </h3>
          <form className="flex justify-center items-center gap-3 flex-wrap">
            <motion.input
              type="email"
              placeholder="Your Email"
              className="px-5 py-2.5 rounded-full text-sm bg-[#2C2F55] dark:bg-slate-800 text-white placeholder:text-white/60 outline-none border border-white/20 dark:border-gray-600 transition-colors duration-300"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-[#4A6CF7] text-white text-sm hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

     
        <motion.div 
          className="flex justify-center gap-6 text-sm text-white/60"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.a href="#" whileHover={{ scale: 1.05, color: "rgb(255 255 255 / 0.8)" }}>Careers</motion.a>
            <div className="w-px h-6 bg-white/30 mx-2" />

          <motion.a href="#" whileHover={{ scale: 1.05, color: "rgb(255 255 255 / 0.8)" }}>Privacy Policy</motion.a>
            <div className="w-px h-6 bg-white/30 mx-2" />

          <motion.a href="#" whileHover={{ scale: 1.05, color: "rgb(255 255 255 / 0.8)" }}>Terms & Conditions</motion.a>
        </motion.div>

        <motion.p 
          className="text-xs text-white/40 mt-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          © 2021 Class Technologies Inc.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
