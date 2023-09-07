import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import AnchorLink from "@/Components/Navigation/AnchorLink";
import Heading2 from "@/Components/Typography/Heading2";
import Heading3 from "@/Components/Typography/Heading3";
import Paragraph from "@/Components/Typography/Paragraph";
import ParagraphContainer from "@/Components/Typography/ParagraphContainer";
import EventWrapper from "@/Layouts/EventWrapper";
import WrapperLayout from "@/Layouts/WrapperLayout";

import CampBanner from "@images/camp/camp_header.png";
import PaypalQR from "@images/camp/paypal_qr.png";


export default function Signup() {
    return (
        <WrapperLayout>
            <div className="absolute w-full h-full -z-30">
                <img src={CampBanner} alt="" className="fixed w-full pointer-events-none aspect-auto -z-20 md:-mt-40" />
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed bg-white opacity-50"></div>
            </div>
            <EventWrapper title={"Camp Reunion 2023"} className="bg-white bg-opacity-90">
                <ParagraphContainer>
                    <Heading2>Register to book your spot!</Heading2>
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 lg:gap-8">

                        <div>
                            <p className="text-left">We are excited to invite you to join us this October for a Reunion weekend with all those who attended camp in the summer! The camp will be held in Castledaly Manor, Moate, Athlone, Co. Westmeath. Rules for the reunion weekend are similar to those of summer camp.</p>
                            <ul className="mb-5 ml-5 text-left list-disc">
                                <li>Places are only available for those who are, and have been, regularly returning PBS lessons for the year 2023</li>
                                <li>Registration may be completed by post, delivery to our office or via the links online. Please do this as soon as possible.</li>
                            </ul>
                        </div>
                        <div className="p-2 border-2 border-black rounded-2xl">
                            <Heading3>Payment</Heading3>
                            <img src={PaypalQR} alt="QR code for Paypal" />
                            <span><span className="font-bold">Link: </span><AnchorLink href={"https://www.paypal.com/donate/?hosted_button_id=CRMELXCDEWANC"} newTab={true}></AnchorLink></span>
                        </div>
                    </div>

                </ParagraphContainer>
                <ParagraphContainer className="mt-5">
                    <Paragraph className="text-left text-black">Please don't forget to name on the Booking Form one person (not a leader) you would like to share a room with. If you list any more than one, it can make arranging the rooms very difficult. If you don't have anyone in mind you can leave this field blank and we'll try our best to introduce you to groups your own age.</Paragraph>
                </ParagraphContainer>
                <div className="flex items-stretch justify-center my-10">
                    <iframe className="w-full md:w-3/4 max-w-7xl h-[35rem]" src="https://docs.google.com/forms/d/e/1FAIpQLSfnEcphksxb_7x9BHYUTwrRxnSdzJ88qEGiO8mShYiZkC2R4w/viewform?usp=sf_link">Loading…</iframe>
                </div>
                <ParagraphContainer className="text-right">
                    <SecondaryButton onClick={() => window.history.back()}>Go Back</SecondaryButton>
                </ParagraphContainer>
            </EventWrapper>
        </WrapperLayout >
    )
}