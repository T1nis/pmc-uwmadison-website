import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={{
      background: '#c5050c',
      color: '#fff',
      padding: '0.5rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      {/* Logo on left, links on right */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image
          src="/logo1.png" // Change this if your file is named differently
          alt="PMC Logo"
          width={48}
          height={48}
          style={{ borderRadius: '8px', marginRight: '0.75rem', background: '#fff' }}
        />
        <span style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: 1,
          textDecoration: 'none'
        }}>
          PMC @ UW–Madison
        </span>
      </Link>
      <div>
        <Link href="/" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
        <Link href="/about" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>About</Link>
        <Link href="/join" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Join</Link>
        <Link href="/events" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Events</Link>
      </div>
    </nav>
  );
}
