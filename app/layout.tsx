import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";
import NavList from "./components/NavList";

export const metadata: Metadata = {
  title: "Plimm's Properties",
  description: "Find your next luxury getaway...",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="h-screen bg-green-950">
        <nav className="bg-green-950 p-5 flex  sticky top-0 shadow-lg font-serif text-stone-300 border-b-4 border-b-orange-200">
          <div className="content-center w-fit">
              <Link href="/" className="font-light text-3xl sm:text-5xl text-orange-200">PLIMM's PROPERTIES</Link>
          </div>
          <div className=" md:justify-center content-center w-full">
            <NavList />
          </div>
        </nav>
        <main className="bg-teal-950 h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
