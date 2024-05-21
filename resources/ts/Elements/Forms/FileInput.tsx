import { ChangeEventHandler } from "react"

interface FileInput {
    handleChange: ChangeEventHandler<HTMLElement>
}

export default function FileInput({ handleChange, ...props }: FileInput & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type">) {
    return (
        <input
            {...props}
            type="file"
            onChange={handleChange}
        />
    )
}