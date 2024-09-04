'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList() {
    const pathname = usePathname();

    return (
        <ul className="text-right inline-block lg:p-4 lg:justify-evenly text-white w-full text-lg sm:text-2xl md:text-3xl lg:text-4xl lg:flex">
            <li>
                <Link className={pathname.includes('/properties') ? "text-green-900 font-bold" : "text-green-900 hover:underline"} href="/properties">Properties</Link>
                {/* TODO: add dropdown menu which maps properties */}
            </li>
            <li><Link className={pathname == '/testimonials' ? "text-green-900 font-bold" : "text-green-900 hover:underline"} href="/testimonials">Testimonials</Link></li>
            <li><Link className={pathname == '/apply' ? "text-green-900 font-bold" : "text-green-900 hover:underline"} href="/apply">Apply</Link></li>
          </ul>
    );
}