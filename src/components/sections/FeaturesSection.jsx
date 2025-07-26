import React from 'react';
import { Grid3X3, Calendar, Users, BookOpen, CheckCircle, Play, Target } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-32">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2F327D] mb-4">
            Our <span className="text-orange-500">Features</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            This very well-rounded features can make learning activities more efficient
          </p>
        </div>

        {/* User Interface Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Interface Mockup */}
          <div className="relative">
            {/* Decorative Circles Behind the Image */}
            <div className="absolute top-[-30px] left-[20px] w-14 h-14 bg-green-400 rounded-full opacity-60 z-0"></div>
            <div className="absolute bottom-[6px] right-20 w-20 h-20 bg-blue-400 rounded-full z-0"></div>

            <div className="absolute bottom-2 right-40 w-6 h-6 bg-orange-400 rounded-full opacity-60 z-0"></div>


            {/* Main Interface Image (Above Circles) */}
            <img
              src="../../../public/videocall.png"
              alt="Instructor Eveny Howard"
              className="rounded-[8px] w-full h-auto relative z-10"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#2F327D] mb-4">
                A <span className="text-orange-500">user interface</span> designed<br />
                for the classroom
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Grid3X3 className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Teachers don't get lost in the grid view</p>
                  <p className="text-gray-600 text-sm">and have a dedicated Presenter View</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">TA's and presenters can be moved to</p>
                  <p className="text-gray-600 text-sm">the front of the class</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Teachers can easily see all students</p>
                  <p className="text-gray-600 text-sm">and class data at one time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools for Teachers Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#2F327D] mb-4">
                <span className="text-orange-500">Tools</span> For Teachers<br />
                And Learners
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
              </p>
            </div>
          </div>

          {/* Right Side - Teacher Image */}
        <img src="../../../public/features-2.png" alt="" />
        </div>

        {/* Assessment Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Assessment Preview */}
          <img src="../../../public/features-3.png" alt="" />

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#2F327D] mb-4">
                Assessments,<br />
                <span className="text-orange-500">Quizzes</span>, Tests
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Easily launch live assignments, quizzes, and tests. Student results appear automatically in the online gradebook
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;