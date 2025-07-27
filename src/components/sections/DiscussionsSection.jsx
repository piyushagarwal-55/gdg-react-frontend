import { User2 } from "lucide-react";

const DiscussionsSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
         
    <img src="/classmanage-2.png" alt="" />
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-[40px] font-bold text-[#2F327D] leading-tight">
              One-on-One <br/>
              <span className="text-[#F48C06]">Discussions</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
            <a
              href="#"
              className="inline-block mt-8 sm:mt-10 px-8 py-4 border border-orange rounded-full text-orange font-medium text-lg hover:bg-orange-500 hover:text-white transition-colors duration-300"
            >
              See more features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussionsSection;
