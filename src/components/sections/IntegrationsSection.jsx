import { AnimatedSection, StaggeredContainer, StaggeredItem } from '@/components/ui/AnimatedComponents';
import { motion } from 'framer-motion';

const integrations = [
  {
    name: 'OneDrive',
    src: '/onedrive.png',
  },
  {
    name: 'Dropbox',
    src: '/dropbox.png',
  },
  {
    name: 'Google Drive',
    src: '/googledrive.png',
  },
  {
    name: 'Microsoft Teams',
    src: '/msteams.png',
  },
];

const IntegrationsSection = () => {
  return (
    <div className="bg-white dark:bg-slate-900 py-16 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          <StaggeredContainer className="grid grid-cols-2 gap-x-2 gap-y-12 px-20">

            {integrations.map((integration, index) => (
              <StaggeredItem
                key={integration.name}
                className={`flex flex-col items-center justify-center ${
                  index % 2 === 1 ? 'translate-y-6' : ''
                }`}
              >
                <motion.img
                  src={integration.src}
                  alt={integration.name}
                  className="w-24 h-24 object-contain dark:brightness-90"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </StaggeredItem>
            ))}
          </StaggeredContainer>

          <AnimatedSection direction="right" className="space-y-8">
            <div>
               

             <div className="flex items-center gap-2 text-sm font-medium text-[#525596] dark:text-gray-400 uppercase tracking-wider mb-4 transition-colors duration-300">
  <img src="/line.png" alt="" className="w-10 dark:brightness-90" />
  <span className='mx-2'>INTEGRATIONS</span>
</div>

              <h2 className="text-4xl font-bold text-[#2F327D] dark:text-white mb-6 leading-tight transition-colors duration-300">
                200+ educational tools and<br />
                platform <span className="text-orange-500">integrations</span>
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
              Schoology has every tool your classroom needs and comes pre-integrated
              with more than 200+ tools, student information systems (SIS), and
              education platforms.
            </p>
            <div>
        <motion.a 
          href="#" 
          className="inline-block mt-8 sm:mt-10 px-8 py-4 border border-orange rounded-full text-black font-medium text-lg hover:bg-orange-500 hover:text-white transition-colors duration-300 dark:text-white dark:hover:bg-orange-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See more features
        </motion.a>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;
