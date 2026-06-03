// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css"; // Or whatever your global CSS file is named

const inter = Inter({ subsets: ["latin"] });

// 👑 THIS OBJECT MUST BE HERE, NOT IN PAGE.TSX
export const metadata = {
  title: "Throne of the Ascendant",
  description: "By Nitti Games",
  icons: {
    icon: "/images/sprites/tota-web-logo.png",
    shortcut: "/images/sprites/tota-web-logo.png",
    apple: "/images/sprites/tota-web-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
