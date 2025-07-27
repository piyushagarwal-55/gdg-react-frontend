import { Grid3X3, Calendar, Users } from 'lucide-react';
import { AnimatedSection, StaggeredContainer, StaggeredItem, HoverCard } from '@/components/ui/AnimatedComponents';

const FeaturesSection = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-16 px-4 lg:px-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-32">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2F327D] dark:text-white mb-4 transition-colors duration-300">
            Our <span className="text-orange-500">Features</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto transition-colors duration-300">
            This very well-rounded features can make learning activities more efficient
          </p>
        </AnimatedSection>

     
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <div className="absolute top-[-30px] left-[20px] w-14 h-14 bg-green-400 dark:bg-green-500 rounded-full opacity-60 z-0"></div>
              <div className="absolute bottom-[6px] right-20 w-20 h-20 bg-blue-400 dark:bg-blue-500 rounded-full z-0"></div>

              <div className="absolute bottom-2 right-40 w-6 h-6 bg-orange-400 dark:bg-orange-500 rounded-full opacity-60 z-0"></div>

              <img
                src="/videocall.png"
                alt="Instructor Eveny Howard"
                className="rounded-[8px] w-full h-auto relative z-10 dark:brightness-90"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-[#2F327D] dark:text-white mb-4 transition-colors duration-300">
                  A <span className="text-orange-500">user interface</span> designed<br />
                  for the classroom
                </h3>
              </div>

              <StaggeredContainer className="space-y-4">
                <StaggeredItem>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Grid3X3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">Teachers don&apos;t get lost in the grid view</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">and have a dedicated Presenter View</p>
                    </div>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Calendar className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">TA&apos;s and presenters can be moved to</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">the front of the class</p>
                    </div>
                  </div>
                </StaggeredItem>

                <StaggeredItem>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">Teachers can easily see all students</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">and class data at one time</p>
                    </div>
                  </div>
                </StaggeredItem>
              </StaggeredContainer>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-[#2F327D] dark:text-white mb-4 transition-colors duration-300">
                  <span className="text-orange-500">Tools</span> For Teachers<br />
                  And Learners
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4}>
            <HoverCard>
              <img src="/features-2.png" alt="" className="dark:brightness-90" />
            </HoverCard>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" delay={0.2}>
            <HoverCard>
              <img src="/features-3.png" alt="" className="dark:brightness-90" />
            </HoverCard>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-[#2F327D] dark:text-white mb-4 transition-colors duration-300">
                  Assessments,<br />
                  <span className="text-orange-500">Quizzes</span>, Tests
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  Easily launch live assignments, quizzes, and tests. Student results appear automatically in the online gradebook
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;