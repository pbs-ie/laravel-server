import MonthlyOverview from "@/Components/Monthly/MonthlyOverview"
import Heading3 from "@/Components/Typography/Heading3"
import WrapperLayout from "@/Layouts/WrapperLayout"
import { setAllBesLinks } from "@/helper";
import { courseContent, monthNames, seriesNames } from "@/constants";
import { Head } from "@inertiajs/inertia-react";

import HeroImage from "@images/hero.jpg";
import LessonsImage from "@images/lessons-fanned.jpg";
import PrizegivingImage from "@images/events/prizegiving.jpg";
import ShedImage from "@images/events/shed.jpg";
import StepImage from "@images/events/step.jpg";
import CampImage from "@images/events/camp.jpg";

import LandingCards from "@/Components/LandingCards";
import RequestLessonBanner from "@/Components/RequestLessonBanner";
import Heading1 from "@/Components/Typography/Heading1";
import CourseCard from "@/Components/CourseCard";
import EventCard from "@/Components/EventCard";
import ContactUsTemplate from "@/Components/ContactUsTemplate";

export default function Front({ bibleTimeDownloads }: any): JSX.Element {
    try {
        setAllBesLinks(bibleTimeDownloads);
    } catch (e) {
        console.warn("Global links variable tried to reset");
    }

    const today = new Date();
    const currentMonthNumber = today.getMonth();
    // New series for BES started in 2022 -> A series. The following year should be B series and so on
    // This will need to be manually fixed when and if BES makes changes on their end
    const currentSeriesNumber = (today.getFullYear() - 2022) % 3;

    return (
        <WrapperLayout>
            <Head title="Home"></Head>
            <section className="relative flex w-full min-h-screen">
                <div className="flex py-10 justify-center align-center h-full flex-1 bg-center bg-no-repeat bg-cover bg-[url('/hero.jpg')] bg-slate-300 bg-blend-soft-light">
                    <div className="grid h-full w-4/5 grid-cols-1 gap-2 text-blue-900 my-5 md:grid-cols-[1fr_1fr_20%] md:grid-rows-2">
                        <div className="bg-white bg-clip-content md:col-span-2 md:row-span-2">
                            <LandingCards
                                heading="School Study Materials"
                                content="Postal Bible School offers free Bible based study material for all age ranges at primary level"
                                buttonText="Learn More"
                                buttonLink={route('courses')}
                                image={HeroImage}
                                className="border-4 bg-kidspace/30 border-kidspace"
                            />
                        </div>
                        <div className="bg-white md:col-span-1 md:row-span-1">
                            <LandingCards
                                heading="New School Assembly Videos"
                                content="is now available for January 2023"
                                buttonText="Show Me"
                                buttonLink={""}
                                className="border-4 bg-teenspace/30 border-teenspace"
                            />
                        </div>
                        <div className="bg-white md:col-span-1 md:row-span-1">
                            <LandingCards
                                heading="2023 Prizegivings"
                                content="starting end of January"
                                buttonText="Schedule"
                                buttonLink={""}
                                className="border-4 bg-lifespace/30 border-lifespace"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="grid grid-rows-2 gap-5 p-5 bg-white h-92 md:grid-rows-none md:grid-cols-2 lg:px-20 lg:mx-20 lg:my-2 drop-shadow-lg">
                    <div className="flex flex-col text-center uppercase">
                        <h4 className="text-lg italic text-blue-800">This month's Lesson</h4>
                        <Heading3>{`${seriesNames[currentSeriesNumber].code}${currentMonthNumber + 1} - ${monthNames[currentMonthNumber]}`}</Heading3>
                        <img className="object-cover w-4/5 h-auto mx-auto" src={LessonsImage} alt="Lessons fanned" />
                    </div>
                    <MonthlyOverview selectedMonth={currentMonthNumber} selectedSeries={currentSeriesNumber} />
                </div>
            </section>
            <RequestLessonBanner />
            <section className="py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                <Heading1>Courses</Heading1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:flex-row">
                    {
                        courseContent.map((course, index) => (
                            <CourseCard key={index} heading={course.heading} type={course.type} description={course.description} image={course.image}></CourseCard>
                        ))
                    }
                </div>
            </section>
            <section className="py-12 text-center bg-sky-100 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl ">
                    <Heading1>Events</Heading1>
                    <div className="flex flex-col content-center justify-center gap-4 md:flex-row">
                        <EventCard title="Prizegivings" image={PrizegivingImage} imageAlt="Prizegiving image" />
                        <EventCard title="The SHED" image={ShedImage} imageAlt="SHED image" />
                        <EventCard title="STEP" image={StepImage} imageAlt="STEP image" />
                        <EventCard title="Summer Camp" image={CampImage} imageAlt="Summer Camp image" />
                    </div>
                </div>
            </section>
            <section className="mx-auto mb-10 text-center max-w-7xl">
                <Heading1>Contact Us</Heading1>
                <ContactUsTemplate />
            </section>
        </WrapperLayout>
    )
}
