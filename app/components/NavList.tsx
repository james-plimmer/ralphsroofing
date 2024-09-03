'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList() {
    const pathname = usePathname();

    return (
        <ul className="flex p-4 justify-between text-white text-4xl w-10/12">
            <li>
                <Link className={pathname.includes('/properties') ? "text-white" : "text-gray-400 hover:text-white"} href="/properties">Properties</Link>
                {/* TODO: add dropdown menu which maps properties */}
            </li>
            <li><Link className={pathname == '/testimonials' ? "text-white" : "text-gray-400 hover:text-white"} href="/testimonials">Testimonials</Link></li>
            <li><Link className={pathname == '/apply' ? "text-white" : "text-gray-400 hover:text-white"} href="/apply">Apply</Link></li>
          </ul>
    );
}