import React from 'react';

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
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* Left Side */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-12 px-20">

            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className={`flex flex-col items-center justify-center ${
                  index % 2 === 1 ? 'translate-y-6' : ''
                }`}
              >
                <img
                  src={integration.src}
                  alt={integration.name}
                  className="w-24 h-24 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            <div>
               

             <div className="flex items-center gap-2 text-sm font-medium text-[#525596] uppercase tracking-wider mb-4">
  <img src="/line.png" alt="" className="w-10" />
  <span className='mx-2'>INTEGRATIONS</span>
</div>

              <h2 className="text-4xl font-bold text-[#2F327D] mb-6 leading-tight">
                200+ educational tools and<br />
                platform <span className="text-orange-500">integrations</span>
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Schoology has every tool your classroom needs and comes pre-integrated
              with more than 200+ tools, student information systems (SIS), and
              education platforms.
            </p>
            <div>
        <a href="#" className="inline-block mt-8 sm:mt-10 px-8 py-4 border border-orange rounded-full text-orange-500 font-medium text-lg hover:bg-orange hover:text-black transition-colors duration-300">See more features</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;
