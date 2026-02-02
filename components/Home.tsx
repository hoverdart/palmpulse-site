
import React from 'react';
import palmPulseTrans from '../assets/palmPulseTrans.png';
import palmPulseSquare from '../assets/PalmPulseSquare.jpg';
import promoVideo from '../assets/video.MP4';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-[#F5F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-palm-green/10 text-palm-green text-sm font-bold mb-8 border border-palm-green/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-palm-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-palm-green"></span>
                </span>
                <span className="tracking-wide">UC Berkeley • Intelligent Planet 2026 • Google Cloud</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-[#2D2424] leading-[1.0] mb-8 tracking-tighter">
                Saving the <br />
                Kingdom's <span className="text-palm-brown">Gold</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                A UC Berkeley–affiliated student team entry for the 2026 Google Cloud Intelligent Planet Hackathon.
                PalmPulse detects Red Palm Weevil risk from 5–10s acoustic samples to protect Saudi Arabia’s 30 million palms.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                <Link to="/technology" className="px-10 py-5 bg-[#2D2424] text-white rounded-full font-bold hover:bg-black shadow-xl transform hover:-translate-y-1 transition-all text-lg">
                  Explore Technology
                </Link>
                <a href="#promo" className="px-10 py-5 border-2 border-palm-brown text-palm-brown rounded-full font-bold hover:bg-palm-brown hover:text-white transform hover:-translate-y-1 transition-all text-lg flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  Watch Brief
                </a>
              </div>
            </div>
            
            <div className="mt-20 lg:mt-0 relative flex justify-center">
              {/* Main App Mockup with Official Logo Branding */}
              <div className="relative z-10 w-[300px] h-[610px] bg-[#1a1a1a] rounded-[3.5rem] border-8 border-[#333] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
                <div className="bg-white h-full flex flex-col">
                  {/* Mock App UI Header */}
                  <div className="pt-12 px-6 pb-6 bg-[#F5F1E9] border-b border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                      <img src={palmPulseTrans} alt="PalmPulse Logo" className="w-12 h-auto" />
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-palm-green animate-pulse"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-palm-green/40"></div>
                      </div>
                    </div>
                    <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Status: Active</h4>
                    <h3 className="text-xl font-black text-[#2D2424] tracking-tight leading-none">Analyzing Acoustic <br/>Profile B-82</h3>
                  </div>

                  {/* Mock App Content Area */}
                  <div className="flex-1 p-6 flex flex-col space-y-4 overflow-hidden">
                    {/* Live Waveform Container */}
                    <div className="h-28 bg-[#2D2424] rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
                       <div className="flex items-center space-x-1 px-4 w-full h-full opacity-60">
                          {[40, 70, 30, 90, 50, 80, 40, 60, 20, 70, 90, 30, 60, 40, 80].map((h, i) => (
                            <div key={i} className="flex-1 bg-palm-green rounded-full animate-pulse" style={{height: `${h}%`, animationDelay: `${i * 0.05}s`}}></div>
                          ))}
                       </div>
                       <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[8px] font-black text-white bg-palm-green px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-sm">Real-time PCM</span>
                       </div>
                    </div>

                    {/* Prediction Result */}
                    <div className="p-4 bg-white border border-[#F5F1E9] rounded-2xl shadow-sm">
                       <div className="flex justify-between items-center mb-3">
                          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">DenseNet Output</span>
                          <span className="text-palm-green font-black text-xs">96% Conf.</span>
                       </div>
                       <div className="flex items-end justify-between mb-2">
                          <span className="text-3xl font-black text-[#2D2424]">Alert</span>
                          <span className="text-[10px] font-bold text-red-500 mb-1">Larvae Detected</span>
                       </div>
                       <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 w-[96.8%]"></div>
                       </div>
                    </div>

                    {/* Gemini AI Protocol Card */}
                    <div className="p-4 bg-palm-brown text-white rounded-2xl flex-1 shadow-lg relative overflow-hidden">
                       <div className="flex items-center space-x-2 mb-3 relative z-10">
                          <span className="text-xs">🤖</span>
                          <span className="text-[9px] font-black uppercase tracking-widest">Gemini containment</span>
                       </div>
                       <p className="text-[9px] text-white/90 leading-tight font-medium relative z-10">
                         "Protocol Gamma: Notify zone manager of B-82 infestation. Suggested bio-containment radius: 4.5m based on wind patterns."
                       </p>
                       <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/5 rounded-full"></div>
                    </div>

                    <div className="pt-2">
                      <button className="w-full py-3 bg-[#2D2424] text-white text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-black transition-colors">
                        Sync to Firestore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-palm-green/20 rounded-full blur-[90px] -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-palm-brown/20 rounded-full blur-[90px] -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Promotional Section */}
      <section id="promo" className="py-24 bg-[#2D2424] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter">Strategic Mission</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              How Berkeley engineering and Google Cloud AI are solving a localized crisis with global implications.
            </p>
          </div>
          
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(127,176,105,0.4)] border border-white/10 bg-black">
            <video 
              className="w-full h-full object-cover" 
              controls 
              poster={palmPulseSquare}
              playsInline
            >
              <source src={promoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10">
              <p className="text-palm-green text-3xl font-black mb-1">96%</p>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Model Precision</p>
            </div>
            <div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10">
              <p className="text-palm-green text-3xl font-black mb-1">$15</p>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Hardware Entry</p>
            </div>
            <div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10">
              <p className="text-palm-green text-3xl font-black mb-1">10s</p>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Analysis Time</p>
            </div>
            <div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10">
              <p className="text-palm-green text-3xl font-black mb-1">2030</p>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Vision Goal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid with Logo Styling */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-4xl lg:text-5xl font-black text-[#2D2424] mb-4 tracking-tighter">Powered by Intelligent Planet</h2>
             <p className="text-gray-500 max-w-2xl mx-auto font-medium">Built for scale using the Google Cloud ecosystem and a modern Expo stack.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
             {[
               {
                 title: "AI Acoustic Detection",
                 desc: "Using high-fidelity piezoelectric sensors to capture larvae crunching through tree hearts.",
                 icon: <img src={palmPulseTrans} className="w-10 h-10 object-contain" alt="Acoustic" />
               },
               {
                 title: "Predictive Analytics",
                 desc: "Vertex AI orchestration for geospatial mapping and infestation forecasting.",
                 icon: "🌍"
               },
               {
                 title: "Community Defense",
                 desc: "Localized containment protocols generated by Gemini 1.5 Pro for farm managers.",
                 icon: "🛡️"
               }
             ].map((feature, i) => (
               <div key={i} className="p-10 rounded-[2.5rem] bg-[#F5F1E9] border border-[#EAE3D2] hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:scale-110 transition-transform">
                     {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-[#2D2424]">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
