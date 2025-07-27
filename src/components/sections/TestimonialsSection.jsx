import { ArrowRight, Star, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:pb-32 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-[#5F5F7E] dark:bg-slate-400"></span>
              <p className="font-semibold text-sm text-[#525596] dark:text-slate-300 tracking-[0.1em]">
                TESTIMONIAL
              </p>
            </div>
            <h2 className="text-[36px] font-bold text-[#2F327D] dark:text-white leading-snug">
              What They Say?
            </h2>
            <p className="text-lg text-[#696984] dark:text-slate-300 leading-relaxed">
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className="text-lg text-[#696984] dark:text-slate-300 leading-relaxed">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className="text-lg text-[#696984] dark:text-slate-300 leading-relaxed">
              Are you too? Please give your assessment
            </p>
            <a
              href="#"
              className="mt-4 flex items-center gap-4 text-black border-2 border-orange rounded-full py-4 px-8 w-fit hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition-colors duration-300 group dark:text-white dark:hover:text-black"
            >
              <span className="font-medium text-base ">Write your assessment</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-[500px] h-[380px] md:h-[420px] mx-auto lg:ml-auto lg:mr-0">
              <img
                src="/testimonalwoman.png"
                alt="Gloria Rose testimonial"
                className="rounded-xl object-cover w-100 h-full"
              />
              <div className="absolute bg-white dark:bg-slate-800 p-4 rounded-lg shadow-[0px_18px_40px_rgba(189,198,214,0.5)] dark:shadow-none w-[85%] md:w-[380px] left-1/2 -translate-x-1/2 -bottom-20 lg:left-auto lg:translate-x-0 lg:-bottom-16 lg:right-10">
                <p className="text-[#5F5F7E] dark:text-slate-300 text-sm leading-relaxed border-l-2 border-[#BDBDD1] dark:border-slate-600 pl-3">
                  &ldquo;Thank you so much for your help. It&rsquo;s exactly what I&rsquo;ve been
                  looking for. You won&rsquo;t regret it. It really saves me time and
                  effort. Skilline is exactly what our business has been
                  lacking.&rdquo;
                </p>
                <hr className="my-4 border-gray-200 dark:border-slate-700" />
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-dark-navy dark:text-white text-base">
                      Gloria Rose
                    </h4>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex gap-1 text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-[#80819A] dark:text-slate-400 text-xs mt-1">
                      12 reviews at Yelp
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="hidden lg:flex items-center justify-center absolute top-1/2 right-20 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-full w-14 h-14 shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors z-50">
              <ChevronRight className="h-6 w-6 text-primary-blue dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
