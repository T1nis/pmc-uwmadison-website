import { Inter } from "next/font/google";
import './globals.css';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Product Management Club @ UW–Madison',
  description:
    'Empowering future product leaders through education, mentorship, and real-world product challenges at UW–Madison.',
  icons: {
    icon: '/logo.png'
  },
  openGraph: {
    title: 'Product Management Club @ UW–Madison',
    description:
      'Empowering future product leaders through education, mentorship, and real-world product challenges at UW–Madison.',
    images: [
      {
        url: '/logo.png', // Path to logo in the public/ folder
        width: 1200,
        height: 630,
        alt: 'Product Management Club Logo',
      },
    ],
    type: 'website',
    siteName: 'Product Management Club @ UW–Madison',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Management Club @ UW–Madison',
    description:
      'Empowering future product leaders through education, mentorship, and real-world product challenges at UW–Madison.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ width: '100%', height: '100%', margin: 0, padding: 0, background: '#fff' }}>
      <body className={inter.className} style={{
        minHeight: '100vh',
        minWidth: '100vw',
        margin: 0,
        padding: 0,
        background: '#fff',
        borderRadius: 0,
        boxSizing: 'border-box'
      }}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
