
import React from 'react';

const Technology: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-700">
      <div className="text-center mb-24">
        <h1 className="text-4xl lg:text-7xl font-black text-palm-brown mb-6 tracking-tighter">Stack Intelligence</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
          Integrated systems from custom-built sensors to serverless AI orchestration.
        </p>
      </div>

      {/* Sensor Highlight */}
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="relative">
          <div className="absolute -inset-4 bg-palm-green/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl border border-[#EAE3D2]">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
              alt="Hardware sensor prototype" 
              className="rounded-[2rem] shadow-inner mb-8 h-[400px] w-full object-cover"
            />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-black text-2xl text-[#2D2424]">Berkeley Labs Custom</h3>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Piezoelectric Acoustic Array</p>
              </div>
              <div className="bg-palm-brown text-white px-6 py-2 rounded-full font-black text-xl">$15</div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="inline-block px-4 py-1 bg-palm-green text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6">Hardware Layer</div>
          <h2 className="text-4xl font-black mb-8 tracking-tight">Listening to Larvae</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Traditional methods of detecting the Red Palm Weevil are reactive and often come too late. Our custom-built, high-sensitivity microphone captures the specific ultrasonic signatures of weevil larvae crunching through the heart of the palm.
          </p>
          <div className="grid grid-cols-2 gap-4">
             {[
               { label: "Sampling Rate", value: "44.1kHz" },
               { label: "Noise Floor", value: "-92dB" },
               { label: "Connection", value: "BLE / Wired" },
               { label: "Housing", value: "Bio-Polymer" }
             ].map((stat, i) => (
               <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-400 font-bold uppercase">{stat.label}</p>
                  <p className="text-xl font-black text-palm-green">{stat.value}</p>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* App Screenshot Deep Dive */}
      <div className="bg-[#2D2424] rounded-[4rem] p-12 lg:p-24 text-white mb-32 relative overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter">The Expo Platform</h2>
            <p className="text-xl opacity-70 leading-relaxed mb-10">
              Built with Expo Router and Tailwind (twrnc), the PalmPulse app provides a seamless field experience for agricultural inspectors across Saudi Arabia.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-palm-green flex-shrink-0 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-lg">Instant Sync</h4>
                  <p className="text-sm opacity-60">Field data synchronized with Firestore for real-time heatmap generation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-palm-green flex-shrink-0 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-lg">Offline First</h4>
                  <p className="text-sm opacity-60">Capture scans in remote groves; auto-upload once reconnected.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-palm-green flex-shrink-0 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-lg">AI Reporting</h4>
                  <p className="text-sm opacity-60">Generate PDF field reports instantly via Gemini API integration.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 flex justify-center space-x-4">
             {/* Secondary Mockups */}
             <div className="w-64 h-[500px] bg-white rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden hidden sm:block">
                <div className="h-full bg-palm-green/10 p-6">
                   <div className="h-full border-2 border-dashed border-palm-green/30 rounded-xl flex items-center justify-center text-palm-green font-bold text-xs uppercase tracking-widest text-center">Map Visualization<br/>Preview</div>
                </div>
             </div>
             <div className="w-64 h-[500px] bg-white rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden transform translate-y-10">
                <div className="h-full bg-white p-6 flex flex-col">
                   <div className="h-32 bg-gray-100 rounded-xl mb-4 animate-pulse"></div>
                   <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-10 bg-palm-brown rounded-lg w-full mt-8"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
        {/* Background Decorative SVG */}
        <svg className="absolute top-0 right-0 h-full w-1/2 opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default Technology;
