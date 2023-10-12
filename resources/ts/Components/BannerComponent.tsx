import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@/Components/Icons/CloseIcon";

export default function BannerComponent({ setShowBanner }: { setShowBanner: Dispatch<SetStateAction<boolean>> }) {

    return (
        <div role="banner" className="relative flex items-center justify-between w-full pr-5 text-white lg:pr-0 bg-bibletime-green">
            <p className="mx-auto">You can view older assembly videos in the <a className="underline hover:no-underline focus:no-underline" href="/assembly">School Assembly</a> tab</p>
            <button aria-label="Close announcement banner" onClick={() => setShowBanner(false)} className="top-0 right-0 p-2 shrink"><CloseIcon className="w-6 h-6" /></button>
        </div>
    )
}