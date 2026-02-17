'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

type ActiveLinkProps = {
    path: string,
    label: string,
}

export const ActiveLink = ({ path, label }: ActiveLinkProps) => {
    const pathName = usePathname();
    const isActive = pathName === path;

    return (
        <Link
        className={`mr-2 transition-all hover:underline hover:text-blue-400 ${isActive && 'text-blue-500'}`}
            href={path}
        >
            {label}
        </Link>
    )
}
