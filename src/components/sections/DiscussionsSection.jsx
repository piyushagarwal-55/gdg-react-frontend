import { User2 } from "lucide-react";
import { AnimatedSection, HoverCard } from '@/components/ui/AnimatedComponents';
import { motion } from 'framer-motion';

const DiscussionsSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl relative">
        


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
         
    <AnimatedSection direction="left">
      <HoverCard>
        <img src="/classmanage-2.png" alt="" className="dark:brightness-90" />
      </HoverCard>
    </AnimatedSection>
          <AnimatedSection direction="right" className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-[40px] font-bold text-[#2F327D] dark:text-white leading-tight transition-colors duration-300">
              One-on-One <br/>
              <span className="text-[#F48C06]">Discussions</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 transition-colors duration-300">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
            <motion.a
              href="#"
              className="inline-block mt-8 sm:mt-10 px-8 py-4 border border-orange rounded-full text-orange font-medium text-lg hover:bg-orange-500 hover:text-white transition-colors duration-300 dark:text-white dark:hover:bg-orange-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See more features
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default DiscussionsSection;
