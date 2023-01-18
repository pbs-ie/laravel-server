import { Link } from '@inertiajs/inertia-react';
export default function DropdownNavLink({ href, active, children }: { href: string, active: boolean, children: any }) {
    return (
        <Link
            href={href}
            className={
                `inline-flex items-center whitespace-nowrap bg-clip-padding py-4 px-8 w-full text-sm font-medium leading-5 
                ${active
                    ? 'text-gray-50 bg-blue-500 bg-clip-padding font-bold'
                    : 'hover:bg-slate-200'}
                    focus:outline-none focus:border-black focus:bg-slate-200 transition duration-150 ease-in-out`
            }
        >
            {children}
        </Link>
    );
}
