'use client';

import Navbar from '../components/Navbar';

export default function Events() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#c5050c] mb-12 text-center tracking-tight">
          Upcoming Events
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Org Fair Card */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 transition-all duration-300 border-t-4 border-[#c5050c] flex flex-col items-start animate-fade-in">
            <h2 className="text-xl font-bold text-[#c5050c] mb-2">Org Fair</h2>
            <div className="text-gray-800 text-lg font-medium mb-1">
              <strong>September 9 &amp; 10, 2024</strong>
            </div>
            <p className="text-gray-700 text-base">
              Find us at the UW–Madison Org Fair! Stop by to meet the team, learn about the club, and get involved.
            </p>
          </div>

          {/* Kickoff Event Card */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 transition-all duration-300 border-t-4 border-[#c5050c] flex flex-col items-start animate-fade-in delay-100">
            <h2 className="text-xl font-bold text-[#c5050c] mb-2">Kickoff Event</h2>
            <div className="text-gray-800 text-lg font-medium mb-1">
              <strong>September 17, 2024</strong>
            </div>
            <p className="text-gray-700 text-base">
              Join us for our club kickoff event! Open to all UW–Madison students—come for info, meet other members, and get started with Product Management Club.
            </p>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: none;}
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-fade-in.delay-100 { animation-delay: 0.1s; }
      `}</style>
    </main>
  );
}
