'use client';

import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff' }}>
      <Navbar />
      <section style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Image
          src="/logo1.png"
          alt="Product Management Club Logo"
          width={180}
          height={180}
          style={{ background: '#fff', borderRadius: '16px' }}
        />
      </section>
      <section style={{ textAlign: 'center', margin: '2rem auto', maxWidth: 700 }}>
        <h1 style={{ color: '#c5050c', fontWeight: 800, fontSize: '2.5rem' }}>
          Product Management Club @ UW–Madison
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#333', margin: '1.5rem 0' }}>
          <strong>Mission Statement:</strong> <br />
          The Product Management Club aims to empower future product leaders by offering an unofficial product management major through educational programs, mentorship avenues, and product challenges that simulate industry experience.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          margin: '2rem 0',
        }}>
          <div>
            <h3 style={{ color: '#c5050c' }}>Educational Sessions</h3>
            <p>Learn the PM fundamentals — product thinking, user research, wireframing, roadmapping, and more.</p>
          </div>
          <div>
            <h3 style={{ color: '#c5050c' }}>Mentorship</h3>
            <p>Get guidance from students and professionals with experience in product, tech, and consulting.</p>
          </div>
          <div>
            <h3 style={{ color: '#c5050c' }}>Product Challenges</h3>
            <p>Tackle real-world prompts in team settings that simulate the PM interview and feature design process.</p>
          </div>
          <div>
            <h3 style={{ color: '#c5050c' }}>Career Exploration</h3>
            <p>Understand how PM connects to other fields like engineering, UX, data, software, and business strategy.</p>
          </div>
        </div>
        <p style={{ fontWeight: 500, margin: '2rem 0' }}>
          Whether you're a CS major, aspiring engineer, business student, designer, or just someone who likes building things — this is where you can explore what it means to own a product.
        </p>
        <p style={{ fontSize: '1.1rem', marginTop: '2rem', color: '#333' }}>
          Be part of a community that's serious about learning, building, and leading.
        </p>
      </section>
    </main>
  );
}
