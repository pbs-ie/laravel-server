import ButtonLink from "@/Elements/Buttons/ButtonLink";
import route from "ziggy-js";

export default function RequestLessonBanner() {
    return (
        <div className="bg-pbsblue max-w-screen">
            <div className="flex flex-col items-center w-full gap-2 p-6 mx-auto md:gap-8 md:py-10 md:max-w-4xl">
                <p className="text-xl font-semibold text-center text-white md:text-3xl">Request a Lesson for your School or an Individual</p>
                <div className="flex gap-6 w-fit">
                    <ButtonLink hierarchy="secondary" href={route('request.group')}>School or Group</ButtonLink>
                    <ButtonLink hierarchy="secondary" href={route('request.individual')}>Individual or Family</ButtonLink>
                </div>
            </div>
        </div>
    )
}