export default function Paragraph({ className = '', children }: { className?: string, children: React.ReactNode }) {
    return (
        <p className={`md:text-base mb-5 text-gray-600 ${className}`}>
            {children}
        </p>
    )
}