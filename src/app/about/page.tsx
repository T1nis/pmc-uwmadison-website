'use client';

import Navbar from '.././components/Navbar';

const eboard = [
    { name: "Kobe", position: "Founder", img: "/blank-profile.png" },
    { name: "Jay Dixit", position: "VP", img: "/blank-profile.png" },
    { name: "Suryash Rawat", position: "VP", img: "/blank-profile.png" },
    { name: "Armaan Jain", position: "VP", img: "/blank-profile.png" }
];

export default function About() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff' }}>
      <Navbar />
      <section style={{ maxWidth: 700, margin: '2rem auto', textAlign: 'center' }}>
        <h1 style={{ color: '#c5050c', fontWeight: 800, fontSize: '2rem' }}>
          About Our Board
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          {eboard.map(member => (
            <div key={member.name}>
              <img src={member.img} alt={member.name} width={100} height={100} style={{ borderRadius: '50%', background: '#eee' }} />
              <h3 style={{ marginTop: '1rem' }}>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
