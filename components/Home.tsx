import React from "react";
import palmPulseTrans from "../assets/palmPulseTrans.png";
import palmPulseSquare from "../assets/PalmPulseSquare.jpg";
import promoVideo from "../assets/video.MP4";
import displayeMockup from "../assets/displaye.png";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
	return (
		<>
			<section className="relative min-h-screen snap-start flex flex-col justify-center overflow-hidden bg-[#F5F1E9]">
				<div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="lg:grid lg:grid-cols-2 gap-20 items-center">
						<div className="text-center lg:text-left">
							<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-palm-green/10 text-palm-green text-sm font-bold mb-8 border border-palm-green/20">
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-palm-green opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-palm-green"></span>
								</span>
								<span className="tracking-wide">
									UC Berkeley • Intelligent Planet 2026 • Google Cloud
								</span>
							</div>
							<h1 className="text-6xl lg:text-8xl font-black text-[#2D2424] leading-[1.0] mb-8 tracking-tighter">
								Early Detection. <br />
								<span className="text-palm-brown">Real Protection.</span>
							</h1>
							<p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
								A UC Berkeley–affiliated student team entry for the 2026 Google
								Cloud Intelligent Planet Hackathon. PalmPulse detects Red Palm
								Weevil risk from 5–10s acoustic samples to protect Saudi
								Arabia’s 30 million palms.
							</p>
							<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
								<Link
									to="/technology"
									className="px-10 py-5 bg-[#2D2424] text-white rounded-full font-bold hover:bg-black shadow-xl transform hover:-translate-y-1 transition-all text-lg"
								>
									Explore Technology
								</Link>
							</div>
						</div>

						{/* Mock-up showcase */}
						<div className="mt-20 lg:mt-0 relative flex justify-center">
							{/* Decorative elements */}
							<div className="absolute -top-10 -right-10 w-72 h-72 bg-palm-green/20 rounded-full blur-[90px] -z-10 animate-pulse"></div>
							<div
								className="absolute -bottom-10 -left-10 w-72 h-72 bg-palm-brown/20 rounded-full blur-[90px] -z-10 animate-pulse"
								style={{ animationDelay: "1s" }}
							></div>
							<img
								src={displayeMockup}
								alt="PalmPulse App Mockup"
								className="absolute top-1/2 -translate-y-1/2 w-[800px] lg:w-[1300px] max-w-none drop-shadow-2xl z-50"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Video Promotional Section */}
			<section
				id="promo"
				className="min-h-full snap-start py-24 bg-[#2D2424] relative overflow-hidden"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter">
							Strategic Mission
						</h2>
						<p className="text-white/60 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
							How Berkeley engineering and Google Cloud AI are solving a
							localized crisis with global implications.
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
							<p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
								Model Precision
							</p>
						</div>
						<div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10">
							<p className="text-palm-green text-3xl font-black mb-1">$15</p>
							<p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
								Hardware Entry
							</p>
						</div>
						<div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10">
							<p className="text-palm-green text-3xl font-black mb-1">10s</p>
							<p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
								Analysis Time
							</p>
						</div>
						<div className="text-center bg-white/5 p-8 rounded-3xl border border-white/10">
							<p className="text-palm-green text-3xl font-black mb-1">2030</p>
							<p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
								Vision Goal
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Feature Grid with Logo Styling */}
			<section className="min-h-full snap-start py-32 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-20">
						<h2 className="text-4xl lg:text-5xl font-black text-[#2D2424] mb-4 tracking-tighter">
							Powered by Intelligent Planet
						</h2>
						<p className="text-gray-500 max-w-2xl mx-auto font-medium">
							Built for scale using the Google Cloud ecosystem and a modern Expo
							stack.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-12">
						{[
							{
								title: "AI Acoustic Detection",
								desc: "Using high-fidelity acoustic sensors to capture larvae crunching through tree hearts.",
								icon: (
									<img
										src={palmPulseTrans}
										className="w-10 h-10 object-contain"
										alt="Acoustic"
									/>
								),
							},
							{
								title: "Predictive Analytics",
								desc: "Vertex AI orchestration for geospatial mapping and infestation forecasting.",
								icon: "🌍",
							},
							{
								title: "Community Defense",
								desc: "Localized containment protocols generated by Gemini 1.5 Pro for farm managers.",
								icon: "🛡️",
							},
						].map((feature, i) => (
							<div
								key={i}
								className="p-10 rounded-[2.5rem] bg-[#F5F1E9] border border-[#EAE3D2] hover:shadow-2xl transition-all group"
							>
								<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:scale-110 transition-transform">
									{feature.icon}
								</div>
								<h3 className="text-2xl font-black mb-4 text-[#2D2424]">
									{feature.title}
								</h3>
								<p className="text-gray-600 leading-relaxed font-medium">
									{feature.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
