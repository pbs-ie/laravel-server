import CardBlock from "@/Components/CardBlock";
import CardContainer from "@/Components/CardContainer";
import GalleryBasic from "@/Components/Gallery/GalleryBasic";
import Heading1 from "@/Components/Typography/Heading1";
import WrapperLayout from "@/Layouts/WrapperLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Shed() {
    const descriptionText = <p className="text-lg">
        Postal Bible School - 000 0000000<br />Gareth McMeekin- 000 000000 <br /><br />If you need directions or a lift, give us a call
    </p>
    return (
        <WrapperLayout>
            <Head title="Events - The Shed"></Head>
            <section className="text-center shadow-sm sm:rounded-lg max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                <Heading1>The SHED</Heading1>
                <div className="w-full">
                    <p className="w-3/4 my-20 mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, numquam culpa. Esse sunt similique repellendus aspernatur, excepturi impedit dolore architecto unde? Facere ad numquam exercitationem, sint est ea quas excepturi.</p>
                </div>
                <div className="w-screen relative right-1/2 left-1/2 -mx-[50vw] px-5 py-3">
                    <GalleryBasic></GalleryBasic>
                </div>
                <CardContainer type="shed" />
                <div className="mb-10">
                    <CardBlock title="Contact" description={descriptionText} buttonText="Consent Form" />
                </div>

            </section>
        </WrapperLayout>
    )
}