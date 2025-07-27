import { FileText, Calendar, Users } from 'lucide-react';
import { AnimatedSection, StaggeredContainer, StaggeredItem, HoverCard } from '@/components/ui/AnimatedComponents';

const SkillmeFeatures = () => {
  return (
    <div className="min-h-screen bg-[#fff] dark:bg-slate-900 flex items-center justify-center p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
      
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#252641] dark:text-white mb-4 transition-colors duration-300">
            All-In-One <span className="text-orange-500">Cloud Software.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Skillme is one powerful online software suite that combines all the 
            tools needed to run a successful school or office.
          </p>
        </AnimatedSection>

       
        <StaggeredContainer className="grid md:grid-cols-3 gap-8">
         
          <StaggeredItem>
            <HoverCard className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-md dark:shadow-slate-700/30 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2F327D] dark:text-white mb-4 transition-colors duration-300">
                Online Billing,<br />
                Invoicing, & Contracts
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Simple and secure control of your organization&apos;s financial and legal transactions. Send customized invoices and contracts.
              </p>
            </HoverCard>
          </StaggeredItem>

          <StaggeredItem>
            <HoverCard className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-md dark:shadow-slate-700/30 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2F327D] dark:text-white mb-4 transition-colors duration-300">
                Easy Scheduling &<br />
                Attendance Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.
              </p>
            </HoverCard>
          </StaggeredItem>

        
          <StaggeredItem>
            <HoverCard className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-md dark:shadow-slate-700/30 transition-all duration-300">
              <div className="w-16 h-16 bg-cyan-500 dark:bg-cyan-600 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2F327D] dark:text-white mb-4 transition-colors duration-300">
                Customer Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Automate and track emails to individuals or groups. Skillme&apos;s built-in system helps organize your organization.
              </p>
            </HoverCard>
          </StaggeredItem>
        </StaggeredContainer>
      </div>
    </div>
  );
};

export default SkillmeFeatures;