import { ArrowRight, Star, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:pb-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-[#5F5F7E]"></span>
              <p className="font-semibold text-sm text-[#525596] tracking-[0.1em]">
                TESTIMONIAL
              </p>
            </div>
            <h2 className="text-[36px] font-bold text-[#2F327D] leading-snug">
              What They Say?
            </h2>
            <p className="text-lg text-[#696984] leading-relaxed">
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className="text-lg text-[#696984] leading-relaxed">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className="text-lg text-[#696984] leading-relaxed">
              Are you too? Please give your assessment
            </p>
            <a
              href="#"
              className="mt-4 flex items-center gap-4 text-orange-500 border-2 border-orange rounded-full py-4 px-8 w-fit hover:bg-orange hover:text-white transition-colors duration-300 group"
            >
              <span className="font-medium text-base">
                Write your assessment
              </span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-[500px] h-[380px] md:h-[420px] mx-auto lg:ml-auto lg:mr-0">
              <img
                src="../../../public/testimonalwoman.png"
                alt="Gloria Rose testimonial"
                className="rounded-xl object-cover w-100 h-full"
              />
              <div className="absolute bg-white p-4 rounded-lg shadow-[0px_18px_40px_rgba(189,198,214,0.5)] w-[85%] md:w-[380px] left-1/2 -translate-x-1/2 -bottom-20 lg:left-auto lg:translate-x-0 lg:-bottom-16 lg:right-10">
                <p className="text-[#5F5F7E] text-sm leading-relaxed border-l-2 border-[#BDBDD1] pl-3">
                  &ldquo;Thank you so much for your help. It&rsquo;s exactly what I&rsquo;ve been
                  looking for. You won&rsquo;t regret it. It really saves me time and
                  effort. Skilline is exactly what our business has been
                  lacking.&rdquo;
                </p>
                <hr className="my-4 border-gray-200" />
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-dark-navy text-base">Gloria Rose</h4>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex gap-1 text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-[#80819A] text-xs mt-1">12 reviews at Yelp</p>
                  </div>
                </div>

              </div>

            </div>
            <button className="hidden lg:flex items-center justify-center absolute top-1/2 right-20 -translate-y-1/2 bg-white rounded-full w-14 h-14 shadow-lg hover:bg-gray-100 transition-colors z-50">
              <ChevronRight className="h-6 w-6 text-primary-blue" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
