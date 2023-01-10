import CardContainer from "@/Components/CardContainer";
import GalleryBasic from "@/Components/Gallery/GalleryBasic";
import Heading1 from "@/Components/Typography/Heading1";
import WrapperLayout from "@/Layouts/WrapperLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Prizegivings() {
    return (
        <WrapperLayout>
            <Head title="Events - Prizegivings"></Head>
            <section className="text-center shadow-sm sm:rounded-lg max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                <Heading1>Prizegivings</Heading1>
                <div className="w-screen relative right-1/2 left-1/2 -mx-[50vw] px-5 py-3">
                    <GalleryBasic></GalleryBasic>
                </div>
                <div className="w-full">
                    <p className="w-3/4 my-20 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus eget sagittis dignissim sodales porta ullamcorper condimentum etiam euismod. Magna sapien interdum magnis vel sociosqu magna parturient condimentum faucibus aenean. Curae vitae lacinia sed nulla ipsum vitae ultricies aliquet tincidunt et. Phasellus ridiculus luctus est molestie primis elit adipiscing quam rutrum eu. Mauris mi convallis massa quam ad fringilla curae lobortis velit ligula.<br />
                        Sit mattis duis fusce nascetur sollicitudin in sollicitudin mi dolor dictum. Lorem quis vel curabitur nam dictumst tortor condimentum diam quis sit. Penatibus lacinia aptent praesent nam porttitor pretium natoque penatibus nec massa. Mus lacinia vestibulum gravida mauris dolor nunc platea vivamus lectus nascetur. Eu nostra etiam vestibulum tincidunt cubilia platea potenti primis blandit donec. Mi eros commodo elit leo venenatis conubia tortor proin maecenas nec.</p>
                </div>
                <CardContainer />
            </section>
        </WrapperLayout>
    )
}