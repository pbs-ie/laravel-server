export default function AnchorLink({ href, newTab = false, children, className = "" }: { href: string, newTab?: boolean, className?: string, children?: React.ReactNode }) {
    return (
        <a href={href} className={"text-blue-600 underline hover:text-blue-800 visited:text-purple-600 " + className} target={newTab ? "_blank" : "_self"}>
            {children ?? href}
        </a>
    )
}