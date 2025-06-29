'use client';

import Navbar from '.././components/Navbar';

export default function Events() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff' }}>
      <Navbar />
      <section style={{ maxWidth: 700, margin: '2rem auto', textAlign: 'center' }}>
        <h1 style={{ color: '#c5050c', fontWeight: 800, fontSize: '2rem' }}>
          Upcoming Events
        </h1>
        <div style={{ marginTop: '2rem', textAlign: 'left' }}>
          <h2 style={{ color: '#c5050c' }}>Speaker Events</h2>
          <ul>
            <li>Info coming soon...</li>
          </ul>
          <h2 style={{ color: '#c5050c', marginTop: '1.5rem' }}>Curriculum Nights</h2>
          <ul>
            <li>Info coming soon...</li>
          </ul>
          <h2 style={{ color: '#c5050c', marginTop: '1.5rem' }}>PM Competitions</h2>
          <ul>
            <li>Info coming soon...</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
