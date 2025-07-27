import { AnimatedSection, StaggeredContainer, StaggeredItem, HoverCard } from '@/components/ui/AnimatedComponents';
import { motion } from 'framer-motion';

const newsData = [
  {
    image:
      "/laptopnews.png",
    tagText: "NEWS",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    hasReadMore: true,
  },
  {
    image:
      "/news1.png",
    tagType: "text",
    tagText: "PRESS RELEASE",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "Class Technologies Inc., the company that created Class,...",
    hasReadMore: false,
  },
  {
    image:
      "/news2.png",
    tagText: "NEWS",
    title:
      "Zoom's earliest investors are betting millions on a better Zoom for schools",
    description:
      "Zoom was never created to be a consumer product. Nonetheless, the...",
    hasReadMore: false,
  },
  {
    image:
      "/news3.png",
    tagText: "NEWS",
    title:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    description:
      "This year, investors have reaped big financial returns from betting on Zoom...",
    hasReadMore: false,
  },
];

const NewsSection = () => {
  return (
    <section className="bg-white dark:bg-slate-900 py-20 lg:py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-[610] text-[#2F327D] dark:text-white transition-colors duration-300">
            Latest News and Resources
          </h2>
          <p className="mt-4 text-[#696984] dark:text-gray-300 text-lg max-w-3xl mx-auto transition-colors duration-300">
            See the developments that have occurred to Skillines in the world
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <HoverCard className="bg-white dark:bg-slate-800 rounded-[20px] shadow-card dark:shadow-lg overflow-hidden transition-colors duration-300">
            <motion.a href="#" whileHover={{ scale: 1.02 }}>
              <img
                src={newsData[0].image}
                alt={newsData[0].title}
                width={570}
                height={350}
                className="w-full h-auto object-cover dark:brightness-90"
              />
            </motion.a>
            <div className="p-8">
              <span className="bg-[#F4C474] text-white py-1 px-4 rounded-md text-sm font-semibold">
                {newsData[0].tagText}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#252641] dark:text-white leading-snug transition-colors duration-300">
                <motion.a
                  href="#"
                  className="hover:text-primary-blue transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {newsData[0].title}
                </motion.a>
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-base leading-relaxed transition-colors duration-300">
                {newsData[0].description}
              </p>
              {newsData[0].hasReadMore && (
                <motion.a
                  href="#"
                  className="mt-6 inline-block text-gray-500 dark:text-gray-400 font-medium hover:text-primary-blue transition-colors duration-300 dark:hover:text-white"
                  whileHover={{ x: 5 }}
                >
                  Read more
                </motion.a>
              )}
            </div>
          </HoverCard>

        
          <StaggeredContainer className="flex flex-col gap-8">
           
            <StaggeredItem>
              <HoverCard className="bg-white dark:bg-slate-800 rounded-[20px] shadow-card dark:shadow-lg p-5 flex items-center gap-5 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <motion.img
                    src={newsData[1].image}
                    alt={newsData[1].title}
                    width={150}
                    height={150}
                    className="rounded-md object-cover w-[125px] h-[125px] dark:brightness-90"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-gray-400 dark:text-gray-500 font-semibold text-sm mb-2 transition-colors duration-300">
                    {newsData[1].tagText}
                  </p>
                  <h3 className="text-base font-semibold text-[#252641] dark:text-white leading-snug transition-colors duration-300">
                    <motion.a
                      href="#"
                      className="hover:text-primary-blue transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {newsData[1].title}
                    </motion.a>
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    {newsData[1].description}
                  </p>
                </div>
              </HoverCard>
            </StaggeredItem>

        
            <StaggeredItem>
              <HoverCard className="bg-white dark:bg-slate-800 rounded-[20px] shadow-card dark:shadow-lg p-5 flex items-center gap-5 transition-colors duration-300">
                <div className="relative flex-shrink-0">
                  <motion.img
                    src={newsData[2].image}
                    alt={newsData[2].title}
                    width={150}
                    height={150}
                    className="rounded-md object-cover w-[125px] h-[125px] dark:brightness-90"
                    whileHover={{ scale: 1.05 }}
                  />
                  <span className="absolute top-2 left-2 bg-[#F4C474] text-white py-0.5 px-3 rounded-md text-xs font-semibold">
                    {newsData[2].tagText}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-semibold text-[#252641] dark:text-white leading-snug transition-colors duration-300">
                    <motion.a
                      href="#"
                      className="hover:text-primary-blue transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {newsData[2].title}
                    </motion.a>
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    {newsData[2].description}
                  </p>
                </div>
              </HoverCard>
            </StaggeredItem>

        
            <StaggeredItem>
              <HoverCard className="bg-white dark:bg-slate-800 rounded-[20px] shadow-card dark:shadow-lg p-5 flex items-center gap-5 transition-colors duration-300">
                <div className="relative flex-shrink-0">
                  <motion.img
                    src={newsData[3].image}
                    alt={newsData[3].title}
                    width={150}
                    height={150}
                    className="rounded-md object-cover w-[125px] h-[125px] dark:brightness-90"
                    whileHover={{ scale: 1.05 }}
                  />
                  <span className="absolute top-2 left-2 bg-[#F4C474] text-white py-0.5 px-3 rounded-md text-xs font-semibold">
                    {newsData[3].tagText}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-semibold text-[#252641] dark:text-white leading-snug transition-colors duration-300">
                    <motion.a
                      href="#"
                      className="hover:text-primary-blue transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {newsData[3].title}
                    </motion.a>
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    {newsData[3].description}
                  </p>
                </div>
              </HoverCard>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
