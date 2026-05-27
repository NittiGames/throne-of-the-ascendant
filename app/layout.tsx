import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Throne of the Ascendant',
  description: 'Explore the masteries and traditions of the Throne of the Ascendant.',
  openGraph: {
    title: 'Throne of the Ascendant',
    description: 'Explore the masteries and traditions of the Throne of the Ascendant.',
    // If you have a specific social preview image, add it here:
    // images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}