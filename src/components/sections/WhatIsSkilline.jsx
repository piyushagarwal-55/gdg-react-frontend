import React from "react";
import { Play } from "lucide-react";

const WhatIsSkilline = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
       
        <div className="text-center">
          <h2 className="text-[#2F327D] text-3xl md:text-[32px] font-bold leading-tight">
            What is <span className="text-orange-500">Skilline?</span>
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-base text-black/60 font-medium leading-[1.8]">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

       
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
          <div className="relative rounded-2xl overflow-hidden h-80 group">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61e6020a-04de-4f30-9450-f6fc88d3703b-skilline-education-netlify-app/assets/images/1.9122ea9ee7551e8b4773-22.jpg"
              alt="Instructor leading a class"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold">FOR INSTRUCTORS</h3>
              <button className="mt-4 bg-transparent border-2 border-white rounded-full px-8 py-3 text-base font-semibold hover:bg-white hover:text-dark-navy transition-colors duration-300">
                Start a class today
              </button>
            </div>
          </div>

      
          <div className="relative rounded-2xl overflow-hidden h-80 group">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61e6020a-04de-4f30-9450-f6fc88d3703b-skilline-education-netlify-app/assets/images/2.81fdbb44584c608767e4-23.jpg"
              alt="Student using a laptop"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold">FOR STUDENTS</h3>
              <button className="mt-4 bg-transparent border-2 border-white rounded-full px-8 py-3 text-base font-semibold hover:bg-white hover:text-dark-navy transition-colors duration-300">
                Enter access code
              </button>
            </div>
          </div>
        </div>

        <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
         
          <div className="lg:pr-10">
            <h3 className="text-2xl font-semibold text-[#2F327D] leading-snug relative">
              <span className="relative inline-block">
                <span className="relative z-10">E</span>
                <span className="absolute -top-0.5 -left-2 w-10 h-10 bg-orange-500 rounded-full z-[-1] hidden lg:block" />
              </span>
              verything you can do in a physical classroom,{" "}
              <span className="text-orange-500">you can do with Skilline</span>
            </h3>
            <p className="mt-4 text-base text-black/70 leading-relaxed">
              Skilline's school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <a
              href="#"
              className="mt-6 inline-block text-[#696984] font-semibold underline underline-offset-4"
            >
              Learn more
            </a>
          </div>

        
          <div className="relative lg:ml-10">
         
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#23BDEE] rounded-tl-[16px] rounded-tr-none rounded-br-none rounded-bl-none z-0 hidden lg:block"></div>



            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-orange-500 rounded-tl-[16px]  z-0 hidden lg:block"></div>

          
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
              <img
                src="/video.png"
                alt="Classroom with students and teacher"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  role="button"
                  aria-label="Play video"
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
                >
                  <Play className="w-10 h-10 text-primary-blue fill-current ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSkilline;
