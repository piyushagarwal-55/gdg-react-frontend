const newsData = [
  {
    image:
      "../../../public/laptopnews.png",
    tagText: "NEWS",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    hasReadMore: true,
  },
  {
    image:
      "../../../public/news1.png",
    tagType: "text",
    tagText: "PRESS RELEASE",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "Class Technologies Inc., the company that created Class,...",
    hasReadMore: false,
  },
  {
    image:
      "../../../public/news2.png",
    tagText: "NEWS",
    title:
      "Zoom's earliest investors are betting millions on a better Zoom for schools",
    description:
      "Zoom was never created to be a consumer product. Nonetheless, the...",
    hasReadMore: false,
  },
  {
    image:
      "../../../public/news3.png",
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
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-[610] text-[#2F327D]">
            Latest News and Resources
          </h2>
          <p className="mt-4 text-[#696984] text-lg max-w-3xl mx-auto">
            See the developments that have occurred to Skillines in the world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Card 1 - Large */}
          <div className="bg-white rounded-[20px] shadow-card overflow-hidden">
            <a href="#">
              <img
                src={newsData[0].image}
                alt={newsData[0].title}
                width={570}
                height={350}
                className="w-full h-auto object-cover"
              />
            </a>
            <div className="p-8">
              <span className="bg-[#F4C474] text-white py-1 px-4 rounded-md text-sm font-semibold">
                {newsData[0].tagText}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#252641] leading-snug">
                <a
                  href="#"
                  className="hover:text-primary-blue transition-colors duration-300"
                >
                  {newsData[0].title}
                </a>
              </h3>
              <p className="mt-3 text-gray-600 text-base leading-relaxed">
                {newsData[0].description}
              </p>
              {newsData[0].hasReadMore && (
                <a
                  href="#"
                  className="mt-6 inline-block text-gray-500 font-medium hover:text-primary-blue transition-colors duration-300"
                >
                  Read more
                </a>
              )}
            </div>
          </div>

          {/* Right column with 3 smaller cards */}
          <div className="flex flex-col gap-8">
            {/* Card 2 - Small */}
            <div className="bg-white rounded-[20px] shadow-card p-5 flex items-center gap-5">
             <div className="flex-shrink-0">
                <img
                  src={newsData[1].image}
                  alt={newsData[1].title}
                  width={150}
                  height={150}
                  className="rounded-md object-cover w-[125px] h-[125px]"
                />
              </div>
              <div className="flex-grow">
                <p className="text-gray-400 font-semibold text-sm mb-2">
                  {newsData[1].tagText}
                </p>
                <h3 className="text-base font-semibold text-[#252641] leading-snug">
                  <a
                    href="#"
                    className="hover:text-primary-blue transition-colors duration-300"
                  >
                    {newsData[1].title}
                  </a>
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {newsData[1].description}
                </p>
              </div>
             
            </div>

            {/* Card 3 - Small */}
            <div className="bg-white rounded-[20px] shadow-card p-5 flex items-center gap-5">
              <div className="relative flex-shrink-0">
                <img
                  src={newsData[2].image}
                  alt={newsData[2].title}
                  width={150}
                  height={150}
                  className="rounded-md object-cover w-[125px] h-[125px]"
                />
                <span className="absolute top-2 left-2 bg-[#F4C474] text-white py-0.5 px-3 rounded-md text-xs font-semibold">
                  {newsData[2].tagText}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-semibold text-[#252641] leading-snug">
                  <a
                    href="#"
                    className="hover:text-primary-blue transition-colors duration-300"
                  >
                    {newsData[2].title}
                  </a>
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {newsData[2].description}
                </p>
              </div>
            </div>

            {/* Card 4 - Small */}
            <div className="bg-white rounded-[20px] shadow-card p-5 flex items-center gap-5">
              <div className="relative flex-shrink-0">
                <img
                  src={newsData[3].image}
                  alt={newsData[3].title}
                  width={150}
                  height={150}
                  className="rounded-md object-cover w-[125px] h-[125px]"
                />
                <span className="absolute top-2 left-2 bg-[#F4C474] text-white py-0.5 px-3 rounded-md text-xs font-semibold">
                  {newsData[3].tagText}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-semibold text-[#252641] leading-snug">
                  <a
                    href="#"
                    className="hover:text-primary-blue transition-colors duration-300"
                  >
                    {newsData[3].title}
                  </a>
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {newsData[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
