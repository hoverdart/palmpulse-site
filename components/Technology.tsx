
import React from 'react';
import screen1 from '../assets/1.png';
import screen2 from '../assets/2.png';
import screen3 from '../assets/3.png';
import screen4 from '../assets/4.png';
import mic from "../assets/mic.png";

const Technology: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-700">
      <div className="text-center mb-24">
        <h1 className="text-4xl lg:text-7xl font-black text-palm-brown mb-6 tracking-tighter">Stack Intelligence</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
          Integrated systems from custom-built sensors to a Google Cloud backend (Firebase, Firestore, Authentication, Cloud Storage,
          Cloud Functions, and a Vertex AI DenseNet endpoint).
        </p>
      </div>

      {/* Sensor Highlight */}
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="relative">
          <div className="absolute -inset-4 bg-palm-green/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl border border-[#EAE3D2]">
            <img 
              src={mic}
              alt="Hardware sensor prototype" 
              className="rounded-[2rem] shadow-inner mb-8 h-[400px] w-full object-fill"
            />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-black text-2xl text-[#2D2424]">Berkeley Labs Custom</h3>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Acoustic Microphone</p>
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
          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-[#F5F1E9] text-[10px] font-black uppercase tracking-widest rounded-full text-gray-500 mb-3">
              Cloud Backbone
            </div>
            <p className="text-gray-600 leading-relaxed">
              Scans authenticate via Firebase, stream to Firestore, store audio in Cloud Storage, trigger Cloud Functions, and call a Vertex AI
              DenseNet endpoint before Gemini generates containment guidance.
            </p>
          </div>
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
          
          <div className="mt-16 lg:mt-0 grid grid-cols-2 gap-6">
            {[screen1, screen2, screen3, screen4].map((img, i) => (
              <div key={i} className="bg-white rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden">
                <img src={img} alt={`PalmPulse app screenshot ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
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
