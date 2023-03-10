export default function InputLabel({ forInput, value, required, className, children }: { forInput: string, value: string, required?: boolean | undefined, className?: string, children?: string }) {
    return (
        <label htmlFor={forInput} className={`inline-block capitalize p-2 text-base rounded bg-sky-100 font-medium md:text-base mb-px text-slate-700 ${required && "after:content-['*'] after:ml-1 after:text-red-500"} ${className}`}>
            {value ? value : children}
        </label>
    );
}
