import ButtonLink from "@/Components/Buttons/ButtonLink";
import ContentWrapper from "@/Layouts/ContentWrapper";
import WrapperLayout from "@/Layouts/WrapperLayout";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { auth } = usePage<PassedProps>().props;

    return (
        <WrapperLayout>
            <ContentWrapper title="Dashboard">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2 w-fit">
                        <img className="w-8" src={auth?.user?.picture} alt={`${auth?.user?.nickname} Picture`} />
                        <p className="text-xl">Welcome {auth?.user?.nickname}</p>
                    </div>
                    <div className="flex flex-col gap-2 mb-5 text-left md:gap-6">
                        <p>Welcome to the School Assembly page. We hope you are able to make use of the additional resources provided here. You can view the assembly videos that correlate with each month's BibleTime lesson or update your lesson order information if we have you registered.</p>
                        <div className="flex justify-center w-full gap-2">
                            <ButtonLink href={"/assembly"}>Assembly Videos</ButtonLink>
                            <ButtonLink href={"/orders"}>Order Form</ButtonLink>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2 text-left md:gap-6 ">
                        <p>We have additional videos that cover the themes of Bible books and explanation videos for Big Bible Words that may be hard for some children to understand. Please feel free to make use of the resources provided.</p>
                        <ButtonLink className="w-fit" href={route("assembly.bonus.index")}>Go to Bonus Videos</ButtonLink>
                    </div>
                </div>
            </ContentWrapper>
        </WrapperLayout>
    )
}