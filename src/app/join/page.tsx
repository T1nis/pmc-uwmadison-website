'use client';

import Navbar from '.././components/Navbar';

export default function Join() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff' }}>
      <Navbar />
      <section style={{ maxWidth: 700, margin: '2rem auto', textAlign: 'center' }}>
        <h1 style={{ color: '#c5050c', fontWeight: 800, fontSize: '2rem' }}>
          Join the Product Management Club!
        </h1>
        <p style={{ margin: '1.5rem 0', fontSize: '1.1rem' }}>
          Interested in getting involved? Fill out our interest form below and we’ll keep you updated on events and opportunities!
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeutSA9ns-woNwQpz5kJmPKCEOinyz47YuB5e7xG9A5fE08og/viewform?usp=header"
          width="100%"
          height="600"
          style={{ border: 'none', marginTop: '1rem' }}
          title="Interest Form"
        />
      </section>
    </main>
  );
}
