
import React from 'react';
import shauryaImg from '../assets/shaurya.png';
import sushantImg from '../assets/sushant.png';
import jacobImg from '../assets/jacob.png';

const Credits: React.FC = () => {
  const developers = [
    {
      name: 'Shaurya Verma',
      role: 'Lead AI & Full Stack Developer',
      link: 'https://shauryav.com',
      desc: 'Expertise in Vertex AI implementation, DenseNet optimization, and cloud architecture.',
      image: shauryaImg
    },
    {
      name: 'Sushant Pangeni',
      role: 'Product Lead & Backend Engineer',
      link: 'https://daysling.com',
      desc: 'Architect of the Google Cloud ecosystem and PalmPulse UI/UX systems.',
      image: sushantImg
    }
  ];

  const teamMembers = [
    {
      name: 'Faisal Alharbi',
      role: 'Regional Visionary & Strategy',
      desc: 'Specializing in Saudi Vision 2030 alignment and agricultural impact analysis.',
      image: null
    },
    {
      name: 'Jacob Shamoon',
      role: 'Hardware Engineering & IoT',
      desc: 'Designer of the $15 Berkeley Labs custom microphone and acoustic collection systems.',
      image: jacobImg
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-palm-brown/10 text-palm-brown px-4 py-2 rounded-full font-bold mb-6 text-sm">
          <span className="w-2 h-2 bg-palm-brown rounded-full animate-pulse"></span>
          <span>UC Berkeley Affiliated Student Team</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-[#2D2424] mb-4">The Minds Behind the Pulse</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
          Built for the 2026 Google Cloud Intelligent Planet Hackathon.
        </p>
      </div>

      {/* Core Developers */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {developers.map((dev, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-[#EAE3D2] relative overflow-hidden group hover:border-palm-green transition-all duration-300">
            <div className="relative z-10 flex gap-8">
              <img 
                src={dev.image} 
                alt={dev.name} 
                className="w-32 h-32 rounded-2xl object-cover shadow-lg flex-shrink-0"
              />
              <div>
                <h2 className="text-3xl font-bold mb-2 group-hover:text-palm-green transition-colors">{dev.name}</h2>
                <p className="text-palm-brown font-bold mb-6 text-sm uppercase tracking-widest">{dev.role}</p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{dev.desc}</p>
                <a 
                  href={dev.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-sm font-bold border-b-2 border-palm-brown pb-1 hover:text-palm-green hover:border-palm-green transition-all"
                >
                  Visit Portfolio
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Team Members */}
      <div className="grid md:grid-cols-2 gap-6">
        {teamMembers.map((m, i) => (
          <div key={i} className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all flex gap-6">
            {m.image ? (
              <img 
                src={m.image} 
                alt={m.name} 
                className="w-20 h-20 rounded-xl object-cover shadow-md flex-shrink-0"
              />
            ) : (
              <div className="w-20 h-20 rounded-xl bg-palm-green/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-palm-green">{m.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold mb-1">{m.name}</h3>
              <p className="text-sm font-semibold text-palm-green mb-4">{m.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 rounded-[3rem] bg-palm-brown text-white text-center shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Intelligent Planet 2026</h3>
          <p className="opacity-90 max-w-3xl mx-auto text-lg">
            This project represents a synthesis of Cal innovation and Google Cloud power, 
            designed to solve a critical environmental crisis in the Arabian Peninsula.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 50 Q 25 0, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" />
             <path d="M0 60 Q 25 10, 50 60 T 100 60" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Credits;
