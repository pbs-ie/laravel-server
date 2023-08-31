import { Method } from "@inertiajs/core";
import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ method = "get", as = 'a', href, active = false, children }: { method?: Method | undefined, as?: string, href: string, active?: boolean, children: React.ReactNode }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active
                ? 'border-indigo-400 text-indigo-700 bg-gray-50 focus:text-indigo-800 focus:bg-gray-100 focus:border-indigo-700'
                : 'border-transparent text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'
                } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}
