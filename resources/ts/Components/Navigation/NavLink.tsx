import { Link } from '@inertiajs/react';
import { AriaAttributes } from 'react';

interface NavLinkProps {
    href: string;
    active: boolean;
    isSecondary?: boolean;
    isCta?: boolean;
    role?: string;
    ariaHaspopup?: AriaAttributes['aria-haspopup'];
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>) => void;
}

export default function NavLink({ href, active, isCta, isSecondary, role, ariaHaspopup, children, onClick }: NavLinkProps) {
    const getCurrentStyle: () => string = () => {
        let styleValue = 'inline-flex uppercase items-center pt-1 border-b-2 text-sm leading-5 transition duration-150 ease-in-out ';
        if (isCta) {
            styleValue += ' my-2 rounded-md border-2 shadow-[0_1px_0_0_black] border-black text-gray-800 px-3 active:translate-y-px active:shadow-none active:border-b-2';
            if (active) {
                styleValue += ' text-indigo-700 bg-white hover:bg-blue-50 font-bold'
            } else {
                styleValue += ' bg-blue-200 hover:bg-blue-50 font-medium '
            }
        }
        else if (active) {
            styleValue += ` border-gray-300 ${isSecondary ? 'text-blue-900' : 'text-white'} font-bold hover:border-transparent`
        } else {
            styleValue += ` border-transparent ${isSecondary ? 'text-blue-900 font-normal hover:font-bold' : 'text-gray-200 font-medium hover:text-white'}  hover:border-gray-50 focus:text-gray-100`
        }

        return styleValue;
    }
    return (
        <Link
            href={href}
            className={getCurrentStyle()}
            role={role}
            aria-haspopup={ariaHaspopup}
            aria-current={active ? "page" : "false"}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
