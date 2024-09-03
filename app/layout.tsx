import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import NavList from "./components/NavList";

export const metadata: Metadata = {
  title: "Plimm's Properties",
  description: "Find your next luxury getaway...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="h-screen bg-stone-700">
        <nav className="bg-stone-800 p-5 flex w-full sticky top-0 shadow-md font-serif text-stone-300">
          <div className="text-7xl w-8/12">
              <Link href="/" className="font-light hover:text-white">PLIMM's PROPERTIES</Link>
          </div>
          <div className="justify-center w-7/12 flex">
            <NavList />
          </div>
        </nav>
        <main className="bg-slate-400 h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
