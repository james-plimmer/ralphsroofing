'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList() {
    const pathname = usePathname();

    return (
        <ul className="flex lg:pb-2 justify-between w-full sm:text-lg md:text-xl lg:text-2xl">
            <li>
                <Link className={pathname.includes('/properties') ? "text-green-900" : "text-gray-500 hover:text-green-900"} href="/properties">Properties</Link>
                {/* TODO: add dropdown menu which maps properties */}
            </li>
            <li><Link className={pathname == '/testimonials' ? "text-green-900" : "text-gray-500 hover:text-green-900"} href="/testimonials">Testimonials</Link></li>
            <li><Link className={pathname == '/apply' ? "text-green-900" : "text-gray-500 hover:text-green-900"} href="/apply">Apply</Link></li>
          </ul>
    );
}