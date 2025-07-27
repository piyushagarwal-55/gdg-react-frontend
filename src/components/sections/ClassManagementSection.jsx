import { Star, Download } from "lucide-react";
import { AnimatedSection, HoverCard } from '@/components/ui/AnimatedComponents';

const ClassManagementSection = () => {
  return (
    <section className="py-20 md:py-[80px] bg-white dark:bg-slate-900 overflow-hidden font-inter transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary-blue/10 dark:bg-blue-500/20 rounded-full -z-0 transition-colors duration-300"></div>
            <div className="relative z-10">
          <h2 className="text-[#2F327D] dark:text-white text-[36px] md:text-section-heading font-bold leading-tight font-inter transition-colors duration-300">
                 <span className="text-orange-500">Class Management</span><br/> Tools for
                Educators
              </h2>

              <p className="mt-6 text-[16px] md:text-[18px] text-black/70 dark:text-gray-300 max-w-md font-inter transition-colors duration-300">
                Class provides tools to help run and manage the class such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>
          </AnimatedSection>
         <AnimatedSection direction="right">
           <HoverCard>
             <img src="/gradebook.png" alt="" className="dark:brightness-90" />
           </HoverCard>
         </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ClassManagementSection;
