
import React from 'react';
import palmPulseTrans from '../assets/palmPulseTrans.png';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#F5F1E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              <div className="w-12 h-12">
                <img 
                  src={palmPulseTrans} 
                  alt="PalmPulse Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-[#2D2424] group-hover:text-palm-green transition-colors">PalmPulse</span>
            </Link>
            <p className="text-gray-500 max-w-sm mb-8 font-medium leading-relaxed">
              An Intelligent Planet 2026 initiative protecting Saudi Arabia's "Desert Gold" with custom Berkeley hardware and Google Cloud AI.
            </p>
            <div className="flex space-x-3">
              {['Google Cloud', 'UC Berkeley', 'KFUPM'].map((badge) => (
                <span key={badge} className="px-3 py-1.5 bg-[#F5F1E9] text-[9px] font-black text-gray-500 rounded-lg uppercase tracking-widest border border-gray-100">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-[#2D2424] mb-8 uppercase tracking-widest text-[10px]">Navigation</h4>
            <ul className="space-y-4 text-gray-500 font-bold text-sm">
              <li><Link to="/" className="hover:text-palm-green transition-colors">Vision</Link></li>
              <li><Link to="/technology" className="hover:text-palm-green transition-colors">Technology</Link></li>
              <li><Link to="/impact" className="hover:text-palm-green transition-colors">Impact</Link></li>
              <li><Link to="/credits" className="hover:text-palm-green transition-colors">Credits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#2D2424] mb-8 uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="space-y-4 text-gray-500 font-bold text-sm">
              <li><Link to="/privacy" className="hover:text-palm-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-palm-green transition-colors">Terms of Service</Link></li>
              <li><a href="https://ai.google.dev" className="hover:text-palm-green transition-colors" target="_blank" rel="noreferrer">Google Gemini</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
          <p>© 2026 PalmPulse • UC Berkeley Student Hackathon Entry</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span>Intelligent Planet</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>KFUPM Partnership</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
