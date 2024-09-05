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
      <body className="min-h-screen bg-teal-950 font-serif flex flex-col">
        <nav className="bg-amber-50 p-3 lg:p-5 sticky top-0  border-b-8 border-b-teal-950">
          <div className="content-center justify-center w-full">
            <NavList />
          </div>
          <div className="text-center">
              <Link href="/" className=" text-center text-2xl sm:text-4xl md:text-6xl text-teal-950">PLIMM's PROPERTIES</Link>
          </div>
        </nav>
        <main className="m-2 flex grow flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
