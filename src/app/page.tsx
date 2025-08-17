'use client';

import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans bg-black overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-black via-[#c5050c]/80 to-[#111] opacity-90" />
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] pt-10 pb-10 px-4 text-center bg-white">
        <div className="mb-0 animate-fade-in">
          <img
            src="/logo.png"
            alt="PMC Logo"
            style={{ width: '500px', height: '500px' }}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#18181b] mb-0 leading-tight tracking-tight animate-fade-in">
          Product Management Club <span className="block text-[#c5050c]">@ UW–Madison</span>
        </h1>
        <p className="mt-2 text-2xl md:text-3xl text-[#333] font-medium max-w-2xl mx-auto animate-fade-in delay-200">
          Empowering future product leaders through education, mentorship, and real-world challenges.
        </p>
      </section>

      {/* Mission Statement */}
      <section
        className="py-40 px-4 w-full mt-24 mb-24 animate-fade-in relative overflow-hidden"
        style={{
          backgroundImage: "url('/bascom-hall-banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6">
          <h2 className="text-xl uppercase tracking-widest font-bold text-white mb-4 text-center">
            Mission Statement
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-white text-2xl font-light text-center">
              The Product Management Club aims to empower future product leaders by offering an unofficial product management major through educational programs, mentorship avenues, and product challenges that simulate industry experience.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center animate-fade-in delay-100">
            {/* <span className="mb-4 text-4xl"></span> */}
            <h3 className="text-xl font-bold text-[#c5050c] mb-2">Educational Sessions</h3>
            <p className="text-[#18181b] text-lg font-light">
              Learn the PM fundamentals — product thinking, user research, wireframing, roadmapping, and more.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center animate-fade-in delay-200">
            {/* <span className="mb-4 text-4xl"></span> */}
            <h3 className="text-xl font-bold text-[#c5050c] mb-2">Mentorship</h3>
            <p className="text-[#18181b] text-lg font-light">
              Get guidance from students and professionals with experience in product, tech, and consulting.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center animate-fade-in delay-300">
            {/* <span className="mb-4 text-4xl"></span> */}
            <h3 className="text-xl font-bold text-[#c5050c] mb-2">Product Challenges</h3>
            <p className="text-[#18181b] text-lg font-light">
              Tackle real-world prompts in team settings that simulate the PM interview and feature design process.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center animate-fade-in delay-400">
            {/* <span className="mb-4 text-4xl"></span> */}
            <h3 className="text-xl font-bold text-[#c5050c] mb-2">Career Exploration</h3>
            <p className="text-[#18181b] text-lg font-light">
              Understand how PM connects to other fields like engineering, UX, data, software, and business strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center bg-white animate-fade-in delay-500">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl py-12 px-6">
          <p className="text-2xl md:text-3xl font-semibold mb-6 text-[#c5050c]">
            Whether you&apos;re a CS major, aspiring engineer, business student, designer, or just someone who likes building things — this is where you can explore what it means to own a product.
          </p>
          <p className="text-lg md:text-xl text-[#18181b]">
            Be part of a community that&apos;s serious about learning, building, and leading.
          </p>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-fade-in.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in.delay-400 { animation-delay: 0.4s; }
        .animate-fade-in.delay-500 { animation-delay: 0.5s; }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 12s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}

