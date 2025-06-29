export const metadata = {
  title: 'Product Management Club @ UW–Madison',
  description:
    'Empowering future product leaders through education, mentorship, and real-world product challenges at UW–Madison.',
  openGraph: {
    title: 'Product Management Club @ UW–Madison',
    description:
      'Empowering future product leaders through education, mentorship, and real-world product challenges at UW–Madison.',
    images: [
      {
        url: '/logo1.png', // Path to logo in the public/ folder
        width: 1200,
        height: 630,
        alt: 'Product Management Club Logo',
      },
    ],
    type: 'website',
    siteName: 'Product Management Club @ UW–Madison',
  },
  // (Optional) For Twitter/X card preview
  twitter: {
    card: 'summary_large_image',
    title: 'Product Management Club @ UW–Madison',
    description:
      'Empowering future product leaders through education, mentorship, and real-world product challenges at UW–Madison.',
    images: ['/logo1.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
