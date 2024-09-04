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
      <body className="min-h-screen bg-amber-50 font-serif flex flex-col">
        <nav className="bg-amber-50 p-5 flex  sticky top-0  border-b-8 border-b-green-950">
          <div className="content-center w-fit">
              <Link href="/" className="font-light text-4xl md:text-6xl text-green-900">PLIMM's PROPERTIES</Link>
          </div>
          <div className=" md:justify-center content-center w-full">
            <NavList />
          </div>
        </nav>
        <main className="mt-2 mb-2 flex grow flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
