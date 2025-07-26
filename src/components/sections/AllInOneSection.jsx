import React from 'react';
import { FileText, Calendar, Users } from 'lucide-react';

const SkillmeFeatures = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#252641] mb-4">
            All-In-One <span className="text-orange-500">Cloud Software.</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Skillme is one powerful online software suite that combines all the 
            tools needed to run a successful school or office.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Online Billing Feature */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F327D] mb-4">
              Online Billing,<br />
              Invoicing, & Contracts
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.
            </p>
          </div>

          {/* Easy Scheduling Feature */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F327D] mb-4">
              Easy Scheduling &<br />
              Attendance Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.
            </p>
          </div>

          {/* Customer Tracking Feature */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F327D] mb-4">
              Customer Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Automate and track emails to individuals or groups. Skillme's built-in system helps organize your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillmeFeatures;