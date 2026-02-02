
import React from 'react';

const Impact: React.FC = () => {
  return (
    <div className="py-16 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#2D2424] mb-6 tracking-tighter">
            Global Vision. <br /><span className="text-palm-green font-black">Saudi Reality.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            PalmPulse is the synthesis of UC Berkeley innovation, Google Cloud power, and regional expertise from KFUPM.
          </p>
        </div>

        {/* Strategic Partnerships */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="text-xl font-black tracking-widest text-gray-400">GOOGLE CLOUD</div>
          <div className="text-xl font-black tracking-widest text-gray-400">UC BERKELEY</div>
          <div className="text-xl font-black tracking-widest text-gray-400">KFUPM</div>
        </div>

        {/* Saudi Vision 2030 Card */}
        <div className="relative bg-gradient-to-br from-[#006C35] to-[#004221] text-white rounded-[3rem] p-12 lg:p-20 overflow-hidden mb-24 shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-black mb-10 flex items-center tracking-tight">
              <span className="bg-white/10 p-3 rounded-2xl mr-6 text-2xl">🇸🇦</span>
              Saudi Vision 2030 Alignment
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-palm-green">Green Saudi Initiative</h3>
                <p className="opacity-80 text-lg leading-relaxed">
                  Protecting the existing 30 million date palms is the foundational requirement for the Kingdom's goal of planting 10 billion trees.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-palm-green">Food Security</h3>
                <p className="opacity-80 text-lg leading-relaxed">
                  Preventing the $500M annual loss caused by Red Palm Weevils, ensuring the long-term survival of a vital national commodity.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-palm-green">Digital Economy</h3>
                <p className="opacity-80 text-lg leading-relaxed">
                  Showcasing how Google Cloud AI can be deployed at scale to solve localized ecological challenges with global technology.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-palm-green">Academic Bridge</h3>
                <p className="opacity-80 text-lg leading-relaxed">
                  Fostering collaboration between UC Berkeley's engineering labs and KFUPM's regional agricultural expertise.
                </p>
              </div>
            </div>
          </div>
          {/* Decorative Logo Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 -translate-y-20 translate-x-20 rounded-full"></div>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Preserving Biodiversity',
              desc: 'By stopping weevil spread, we protect the diverse palm species that support unique desert ecosystems.',
              icon: '🌿'
            },
            {
              title: 'Economic Resilience',
              desc: 'Helping small-scale farmers avoid devastating loss of their livelihoods and multi-generational farms.',
              icon: '📈'
            },
            {
              title: 'Predictive Mapping',
              desc: 'Our geospatial data predicts outbreaks before they happen, allowing for preventative resource allocation.',
              icon: '📍'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-xl hover:translate-y-[-8px] transition-transform flex flex-col h-full">
              <div className="text-4xl mb-8">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-[#2D2424] leading-tight">{item.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
