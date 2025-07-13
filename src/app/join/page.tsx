'use client';

import Navbar from '../components/Navbar';

export default function Join() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />
      <section className="max-w-2xl mx-auto py-16 px-4 flex flex-col items-center animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#c5050c] mb-6 text-center tracking-tight">
          Join the Product Management Club!
        </h1>
        <p className="mb-6 text-lg text-gray-700 font-medium text-center">
          Interested in getting involved? Fill out our interest form below and we’ll keep you updated on events and opportunities!
        </p>
        <div className="w-full animate-fade-in delay-100">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeutSA9ns-woNwQpz5kJmPKCEOinyz47YuB5e7xG9A5fE08og/viewform?usp=header"
            width="100%"
            height="600"
            className="rounded-xl border-none shadow-xl"
            style={{ marginTop: '1rem' }}
            title="Interest Form"
          />
        </div>
      </section>
      {/* Fade-in animation keyframes */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: none;}
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-fade-in.delay-100 { animation-delay: 0.1s; }
      `}</style>
    </main>
  );
}
