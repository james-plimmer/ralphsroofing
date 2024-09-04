'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList() {
    const pathname = usePathname();

    return (
        <ul className="text-right inline-block md:p-4 md:justify-evenly text-white w-full text-lg sm:text-2xl lg:text-3xl md:flex">
            <li>
                <Link className={pathname.includes('/properties') ? "text-orange-200" : "text-gray-200 hover:text-orange-200"} href="/properties">Properties</Link>
                {/* TODO: add dropdown menu which maps properties */}
            </li>
            <li><Link className={pathname == '/testimonials' ? "text-orange-200" : "text-gray-200 hover:text-orange-200"} href="/testimonials">Testimonials</Link></li>
            <li><Link className={pathname == '/apply' ? "text-orange-200" : "text-gray-200 hover:text-orange-200"} href="/apply">Apply</Link></li>
          </ul>
    );
}