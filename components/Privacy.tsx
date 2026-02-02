
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-700">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-palm-brown mb-4 tracking-tight">Privacy Policy & Terms of Service</h1>
        <p className="text-gray-500 font-medium">Effective February 2026 • PalmPulse for Intelligent Planet</p>
      </div>
      
      <div className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-xl border border-[#EAE3D2] space-y-10">
        
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-palm-green/10 rounded-lg">
              <svg className="w-6 h-6 text-palm-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#2D2424]">Acoustic Sensing</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            PalmPulse requires access to your device's microphone and/or the connected Berkeley Labs custom $15 piezoelectric sensor. 
            We capture a <strong>5 to 10-second audio sample</strong> of internal tree vibrations. 
            These samples are analyzed by our DenseNet model on Vertex AI solely to determine the probability of a Red Palm Weevil infestation. 
            We do not record, transmit, or store human conversations or non-agricultural ambient noise.
          </p>
        </section>

        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-palm-green/10 rounded-lg">
              <svg className="w-6 h-6 text-palm-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#2D2424]">Geospatial Analysis</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Location data is collected at the moment of each scan. We use this data to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-600">
            <li>Generate precise infestation maps for farm owners and government entities.</li>
            <li>Feed predictive algorithms that forecast the spread of weevils based on spatial proximity.</li>
            <li>Coordinate localized containment steps through Gemini AI, tailored to your specific regional environment.</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-palm-green/10 rounded-lg">
              <svg className="w-6 h-6 text-palm-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04defaultA12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#2D2424]">Terms of Service</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            By using PalmPulse, you acknowledge that the 96% accuracy rate is based on controlled laboratory and field testing and that results should be used as a primary diagnostic tool alongside traditional agricultural inspection. PalmPulse is not liable for autonomous agricultural decisions made without human oversight.
          </p>
        </section>

        <div className="pt-10 border-t border-gray-100 flex justify-between items-center text-sm font-medium text-gray-400">
          <p>PalmPulse Intelligent Planet Edition</p>
          <p>UC Berkeley Student Team Project</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
