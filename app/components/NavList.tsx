'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList() {
    const pathname = usePathname();

    return (
        <ul className="flex justify-between w-full sm:text-lg md:text-xl lg:text-2xl">
            <li>
                <Link className={pathname.includes('/properties') ? "text-teal-950" : "text-gray-500 hover:text-teal-950"} href="/properties">Properties</Link>
                {/* TODO: add dropdown menu which maps properties */}
            </li>
            
            <li><Link className={pathname == '/apply' ? "text-teal-950" : "text-gray-500 hover:text-teal-950"} href="/apply">Apply</Link></li>
          </ul>
    );
}