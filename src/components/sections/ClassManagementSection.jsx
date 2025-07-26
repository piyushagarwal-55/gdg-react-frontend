import { Star, Download } from "lucide-react";

const students = [
  {
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61e6020a-04de-4f30-9450-f6fc88d3703b-skilline-education-netlify-app/assets/images/4.24aa844b2504b9c8b4a8.webp",
    score: 100,
  },
  {
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61e6020a-04de-4f30-9450-f6fc88d3703b-skilline-education-netlify-app/assets/images/5.2850d7e0fdeac011967d.webp",
    score: 98,
  },
  {
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61e6020a-04de-4f30-9450-f6fc88d3703b-skilline-education-netlify-app/assets/images/3.25bb77c00d0f28aa0334.webp",
    score: 80,
  },
  {
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61e6020a-04de-4f30-9450-f6fc88d3703b-skilline-education-netlify-app/assets/images/6.1f50f0e7aab9ce8a2643.webp",
    score: 70,
  },
];

const getScoreStyles = (score) => {
  if (score === 100) return { text: "text-[#42C485]", bg: "bg-[#42C485]" };
  if (score >= 90) return { text: "text-primary-blue", bg: "bg-primary-blue" };
  if (score >= 80) return { text: "text-orange", bg: "bg-orange" };
  return { text: "text-[#F35F5F]", bg: "bg-[#F35F5F]" };
};

const ClassManagementSection = () => {
  return (
    <section className="py-20 md:py-[80px] bg-white overflow-hidden font-inter">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary-blue/10 rounded-full -z-0"></div>
            <div className="relative z-10">
          <h2 className="text-[#2F327D] text-[36px] md:text-section-heading font-bold leading-tight font-inter">
                 <span className="text-orange-500">Class Management</span><br/> Tools for
                Educators
              </h2>

              <p className="mt-6 text-[16px] md:text-[18px] text-black/70 max-w-md font-inter">
                Class provides tools to help run and manage the class such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>
          </div>
         <img src="../../../public/gradebook.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ClassManagementSection;
