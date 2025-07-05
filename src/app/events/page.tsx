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

        <div style={{ marginTop: '2rem', textAlign: 'left', fontSize: '1.1rem' }}>
          <h2 style={{ color: '#c5050c' }}>Org Fair</h2>
          <ul style={{ marginBottom: '1.5rem' }}>
            <li>
              <strong>September 9 & 10, 2024</strong><br />
              Find us at the UW–Madison Org Fair! Stop by to meet the team, learn about the club, and get involved.
            </li>
          </ul>

          <h2 style={{ color: '#c5050c', marginTop: '1.5rem' }}>Kickoff Event</h2>
          <ul>
            <li>
              <strong>September 17, 2024</strong><br />
              Join us for our club kickoff event! Open to all UW–Madison students—come for info, meet other members, and get started with Product Management Club.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
