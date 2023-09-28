import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import { useEffect, useRef } from "react";
import CloseX from "@/Components//Icons/CloseX";

export default function DialogCard({ onClose, onSubmit, message, onClickOutside }: { onClose: () => void, onSubmit: () => void, message?: string, onClickOutside?: () => void }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);

    return (
        <div ref={ref} className="relative px-5 pt-10 pb-5 mx-2 bg-white border-2 rounded md:w-1/3 min-w-96 h-fit">
            <button onClick={onClose} className="absolute top-5 right-5">
                <CloseX className="text-gray-700 w-7 h-7 hover:text-gray-500" />
            </button>
            <div className="mx-3">
                <h1 className="mb-4 text-lg font-bold">Delete School</h1>
                <p className="mb-4 text-base text-gray-500">{(message ? message : "Are you sure you want to delete this record?") + " The record will be removed permanently. This action cannot be undone."}</p>
            </div>
            <div className="inline-flex justify-center w-full gap-2 mt-5 md:justify-end">
                <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
                <PrimaryButton type="submit" className="w-1/3 text-white bg-red-600 hover:bg-red-700 active:bg-red-700 focus:bg-red-700" onClick={() => onSubmit()}>Confirm</PrimaryButton>
            </div>
        </div>
    )
}